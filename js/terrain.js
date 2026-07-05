import * as THREE from 'three';
import {
    state, OCEAN_LEVEL, OCEAN_RADIUS, TERRAIN_HEIGHT, TERRAIN_SIZE, TERRAIN_SEGMENTS,
    BASE_DEPTH, FLOOR_Y, PEAK_Y,
    volcanoColor, seafloorColor, loadHeightmap, sampleHeight,
} from './config.js?v=real9';
import { HEIGHTMAP_URL, validateHeightmap } from './heightmap.js?v=real9';

export function initTerrain() {
    const { islandGroup, SUN_DIR } = state;

    // --- High-res mountain (pure heightmap, no modifications) ---
    const mtnGeo = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, TERRAIN_SEGMENTS, TERRAIN_SEGMENTS);
    mtnGeo.rotateX(-Math.PI / 2);
    // Mountain material — elevation-based vertex colors (volcanoColor + shore blend).
    // Lava pulse is injected into the vertex shader via onBeforeCompile so that
    // per-frame work is one uniform write instead of an O(N_verts) JS loop +
    // full color buffer re-upload. See ISSUES P1 #5.
    const terrainPulseUniform = { value: 0.6 * 0.8 }; // base * (0.8 + sin*0.2) at t=0
    // 5th-attempt dark-home fix: add a baseline cool-blue emissive term on
    // the mountain material itself so every terrain pixel has a self-
    // illumination floor that survives into the night hemisphere regardless
    // of direct/indirect light. Day side is dominated by the 5.2 key and
    // barely notices; night side picks up a moonlight-colored lift.
    // --- Photographic rock PBR set (CC0, tiled) ---
    // Replaces the procedural value-noise bakes: real fracture planes,
    // strata edges, and mineral mottling that noise can't produce, and
    // photo normal maps mipmap cleanly (less shading shimmer).
    const texLoader = new THREE.TextureLoader();
    const maxAniso = state.renderer
        ? Math.min(8, state.renderer.capabilities.getMaxAnisotropy()) : 4;
    function _rockTex(url, srgb) {
        const t = texLoader.load(url);
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(3, 3);
        t.anisotropy = maxAniso;
        if (srgb) t.colorSpace = THREE.SRGBColorSpace;
        return t;
    }
    const rockColorMap = _rockTex('rockface_color.jpg', true);
    const normalMap = _rockTex('rockface_normal.jpg', false);
    const roughnessMap = _rockTex('rockface_rough.jpg', false);
    // Photographic beach sand (CC0, footprint-pocked). Blended over the
    // rock set in the shader wherever the baked aSand mask says beach,
    // so the shore band gets REAL sand grain instead of tinted rock.
    const sandColorMap = _rockTex('sand_color.jpg', true);
    const sandNormalMap = _rockTex('sand_normal.jpg', false);
    const sandUniforms = {
        uSandMap: { value: sandColorMap },
        uSandNrm: { value: sandNormalMap },
    };

    // terrainTimeUniform removed — lava trickle was the only consumer

    const mtnMat = new THREE.MeshStandardMaterial({
        // Photo albedo multiplies with the elevation vertex colors, so
        // the tuned palette / shore band / scorch zone all survive —
        // they just gain real rock grain.
        map: rockColorMap,
        // >1 material color compensates the double-albedo product:
        // vertexColor (~1.0 capped) x photo albedo (~0.3 avg) would land
        // the island at a third of its tuned brightness. 3.4 restores
        // the original tonal target (screenshot-matched at home +
        // research framings).
        color: new THREE.Color(3.4, 3.4, 3.4),
        vertexColors: true, roughness: 0.9, metalness: 0.05,
        emissive: new THREE.Color(0x1a2d44),
        emissiveIntensity: 0.75,
        normalMap: normalMap,
        // 0.82: 0.95 + the detail tap pushed sub-pixel normal variance
        // high enough to twinkle under the sun key at mid range (the
        // deep-fried shimmer, again). The crag/terrace GEOMETRY now
        // carries the ruggedness, so the normal map can sit lower.
        normalScale: new THREE.Vector2(0.82, 0.82),
        roughnessMap: roughnessMap,
        // 0.22: the global scene.environment (PMREM) feeds indirect
        // specular to EVERY standard material, and on the craggy rock
        // it fired white sub-pixel glints even inside shadows (env
        // light has no shadowing). Rock is matte — a whisper suffices.
        envMapIntensity: 0.05,
    });
    // Island-local sun direction, written per frame from animate.js
    // (the group spins, so a world-space sun would sweep the terminator).
    const terrainSunUniform = { value: new THREE.Vector3(1, 0.4, 0).normalize() };
    window._terrain = { sunUniform: terrainSunUniform };
    mtnMat.onBeforeCompile = (shader) => {
        shader.uniforms.uPulse = terrainPulseUniform;
        shader.uniforms.uSunLocal = terrainSunUniform;
        shader.uniforms.uSandMap = sandUniforms.uSandMap;
        shader.uniforms.uSandNrm = sandUniforms.uSandNrm;
        shader.uniforms.uDeepLight = (window.__deepLightU = window.__deepLightU || { value: 0.0 });
        // Add aEmissive attribute and pulse uniform.
        // Fold them into vColor so the standard <color_vertex> chunk's
        // downstream usage in the fragment shader (vColor * diffuse) carries
        // the emissive tint per pixel for free.
        shader.vertexShader = shader.vertexShader
            .replace(
                '#include <common>',
                [
                    '#include <common>',
                    'attribute vec3 aEmissive;',
                    'attribute float aSand;',
                    'uniform float uPulse;',
                    'uniform vec3 uSunLocal;',
                    'varying float vSunFacing;',
                    'varying float vSand;',
                    'varying float vSlopeY;',
                    'varying vec2 vLocXZ;',
                    '// uTime removed — lava trickle was stripped',
                ].join('\n')
            )
            .replace(
                '#include <beginnormal_vertex>',
                [
                    '#include <beginnormal_vertex>',
                    '// Sun-facing in object space, for the day/night fill split.',
                    'vSunFacing = dot(normalize(objectNormal), normalize(uSunLocal));',
                    'vSand = aSand;',
                    '// Terrain slope (1 = level bench, 0 = vertical cliff) for',
                    '// the slope-zoned material below.',
                    'vSlopeY = clamp(normalize(objectNormal).y, 0.0, 1.0);',
                ].join('\n')
            )
            .replace(
                '#include <color_vertex>',
                [
                    '#include <color_vertex>',
                    '#ifdef USE_COLOR',
                    '  // --- Rock grain speckle: breaks up smooth vertex-color gradient.',
                    '  // Half the old +-12% swing: per-vertex noise this dense is',
                    '  // sub-pixel from every camera pose, and at full strength it',
                    '  // shimmered like static as the island rotated. ---',
                    '  float grain = fract(sin(dot(floor(position.xz * 40.0), vec2(127.1, 311.7))) * 43758.5453);',
                    '  vColor.rgb *= 0.94 + grain * 0.12;',
                    '',
                    '  // --- Geological strata: very subtle horizontal variation ---',
                    '  float strata = sin(position.y * 12.0 + grain * 2.0) * 0.5 + 0.5;',
                    '  strata = smoothstep(0.35, 0.65, strata);',
                    '  vColor.rgb *= 0.97 + strata * 0.03;',
                    '',
                    '  vColor.rgb += aEmissive * uPulse;',
                    '',
                    '  // Volcano peak red glow — always-on, concentrated at the summit',
                    '  float peakHeight = clamp((position.y - 4.5) / 1.5, 0.0, 1.0);',
                    '  float peakGlow = peakHeight * peakHeight * 0.35;',
                    '  vColor.rgb += vec3(peakGlow * 0.8, peakGlow * 0.25, peakGlow * 0.04);',
                    '',
                    '  // --- Crevice veins: hash-grid crack pattern on upper slopes ---',
                    '  float veinHeightNorm = clamp((position.y - 0.6) / 5.1, 0.0, 1.0);',
                    '  float veinMask = smoothstep(0.45, 0.6, veinHeightNorm) * 0.35;',
                    '  if (veinMask > 0.01) {',
                    '    vec2 cellA = position.xz * 2.5;',
                    '    vec2 cellB = position.xz * 6.0;',
                    '    vec2 fracA = fract(cellA);',
                    '    vec2 fracB = fract(cellB);',
                    '    float edgeA = min(min(fracA.x, 1.0 - fracA.x), min(fracA.y, 1.0 - fracA.y));',
                    '    float edgeB = min(min(fracB.x, 1.0 - fracB.x), min(fracB.y, 1.0 - fracB.y));',
                    '    float crackA = 1.0 - smoothstep(0.0, 0.08, edgeA);',
                    '    float crackB = 1.0 - smoothstep(0.0, 0.05, edgeB);',
                    '    float veinGlow = max(crackA * 0.7, crackB * 0.5);',
                    '    vColor.rgb += vec3(0.8, 0.25, 0.04) * veinGlow * veinMask;',
                    '  }',
                    '#endif',
                ].join('\n')
            );
        // --- Fragment shader: height-based roughness override ---
        // Inject after roughnessmap_fragment to modulate roughness by elevation.
        // Uses vViewPosition.y which is the view-space Y (approximation of world height).
        // We pass world position through a varying instead for accuracy.
        shader.vertexShader = shader.vertexShader
            .replace(
                '#include <common>',
                [
                    '#include <common>',
                    'varying float vWorldHeight;',
                    'varying float vWorldDist;',
                ].join('\n')
            )
            .replace(
                '#include <worldpos_vertex>',
                [
                    '#include <worldpos_vertex>',
                    'vWorldHeight = position.y;',
                    'vWorldDist = length(position.xz);',
                    'vLocXZ = position.xz;',
                ].join('\n')
            );
        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                [
                    '#include <common>',
                    'varying float vWorldHeight;',
                    'varying float vWorldDist;',
                    'varying float vSunFacing;',
                    'varying float vSand;',
                    'varying float vSlopeY;',
                    'varying vec2 vLocXZ;',
                    'uniform sampler2D uSandMap;',
                    'uniform sampler2D uSandNrm;',
                    'uniform float uDeepLight;',
                    'uniform vec3 uSunLocal;',
                ].join('\n')
            )
            .replace(
                '#include <color_fragment>',
                [
                    '#include <color_fragment>',
                    '// Beach sand albedo: where the baked aSand mask says beach,',
                    '// swap the rock-photo x vertex-tint product for real sand',
                    '// grain (tiled fine so footprint pocks read at close range).',
                    '// The 1.6 lift compensates the material color multiplier the',
                    '// sand sample bypasses.',
                    'if (vSand > 0.003) {',
                    '  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 9.0).rgb;',
                    '  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.6, vSand);',
                    '}',
                    '// --- Slope-zoned volcanic material (ALU only, no taps) ---',
                    '// A single tiled rock hue read as procedural. Real volcanic',
                    '// terrain is zoned: near-black basalt on steep faces, rusty',
                    '// oxidized scoria patches on the upper flanks, pale ash on',
                    '// level benches near the summit, faint strata banding, and',
                    '// a dark wet tide ring where rock meets sea.',
                    '{',
                    '  float dryLand = smoothstep(0.62, 0.95, vWorldHeight) * (1.0 - vSand);',
                    '  if (dryLand > 0.001) {',
                    '    float steep = 1.0 - vSlopeY;',
                    '    float h01 = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);',
                    '    float m1 = sin(vLocXZ.x * 0.55 + 1.3) * cos(vLocXZ.y * 0.48 + 4.2);',
                    '    float m2 = sin(vLocXZ.x * 1.7 + 0.4) * cos(vLocXZ.y * 1.5 + 2.1);',
                    '    float macro = m1 * 0.65 + m2 * 0.35;',
                    '    // Steep faces: dark cool basalt. Gentle ground: warm tuff.',
                    '    vec3 zone = mix(vec3(1.06, 1.01, 0.90), vec3(0.48, 0.47, 0.50), smoothstep(0.2, 0.75, steep));',
                    '    // Rust scoria lobes on the upper flanks.',
                    '    float rust = smoothstep(0.1, 0.7, macro) * smoothstep(0.2, 0.55, h01);',
                    '    zone = mix(zone, vec3(1.22, 0.74, 0.52), rust * 0.55);',
                    '    // Pale ash benches near the summit on flat ground.',
                    '    float ash = smoothstep(0.6, 0.95, h01) * vSlopeY;',
                    '    zone = mix(zone, vec3(1.14, 1.10, 1.02), ash * 0.5);',
                    '    // Faint strata banding tied to elevation.',
                    '    float strataB = 0.95 + 0.05 * sin(vWorldHeight * 9.0 + macro * 2.0);',
                    '    diffuseColor.rgb *= mix(vec3(1.0), zone * strataB, dryLand);',
                    '  }',
                    '  // Wet tide ring: dark saturated band just above the water,',
                    '  // anchoring the island INTO the sea (skipped on sand).',
                    '  float tide = smoothstep(1.05, 0.72, vWorldHeight) * smoothstep(0.5, 0.66, vWorldHeight);',
                    '  diffuseColor.rgb *= 1.0 - tide * 0.45 * (1.0 - vSand);',
                    '}',
                ].join('\n')
            )
            .replace(
                '#include <emissivemap_fragment>',
                [
                    '#include <emissivemap_fragment>',
                    '// The cool-blue night-readability emissive floor is a DRY-LAND',
                    '// term. Underwater it glowed through the semi-transparent ocean',
                    '// as a centered pale halo that erased the land/water boundary in',
                    '// the top-down framing. Fade it out just below the waterline.',
                    'totalEmissiveRadiance *= smoothstep(0.10, 0.55, vWorldHeight);',
                    '// And keep most of it on the day side: at full strength it',
                    '// filled the shadow hemisphere and flattened the island into',
                    '// an evenly-lit blob. A low floor keeps a whisper of night',
                    '// relief while matching the storm-mode night darkness.',
                    'totalEmissiveRadiance *= mix(0.12, 1.0, smoothstep(-0.30, 0.40, vSunFacing));',
                ].join('\n')
            )
            .replace(
                '#include <lights_fragment_end>',
                [
                    '#include <lights_fragment_end>',
                    '// Day/night split: the ambient + hemi fill is what washed the',
                    '// island into a uniformly-lit mass with no terminator. Pull',
                    '// the indirect fill down on slopes facing away from the sun',
                    '// so the island reads half lit / half shadow like the moon.',
                    '// Floors sit low (0.12) so the clear-weather night side is as',
                    '// dark as the storm one — the split must not change with weather.',
                    'float dayside = smoothstep(-0.30, 0.40, vSunFacing);',
                    'reflectedLight.indirectDiffuse *= mix(0.12, 1.0, dayside);',
                    'reflectedLight.indirectSpecular *= mix(0.0, 1.0, dayside);',
                    '// Direct specular too: the camera-facing rim fill was making',
                    '// the wet low-roughness shore band sparkle on the NIGHT side,',
                    '// which read as light leaking through the terrain. Capped at',
                    '// 0.30 even on the day side — grazing-angle GGX spikes at the',
                    '// terminator were blooming into blinding white flickers that',
                    '// made the island glimmer in a way rock never would.',
                    'reflectedLight.directSpecular *= mix(0.0, 0.30, dayside);',
                    '// Specular only where light actually LANDS: gate by the',
                    '// received direct diffuse (which already includes the',
                    '// shadow map). Kills the single-pixel glints inside',
                    '// day-side crevices — dark hollows whose detail normals',
                    '// still caught the sun through the position-only gate.',
                    'float litAmt = smoothstep(0.02, 0.18, dot(reflectedLight.directDiffuse, vec3(0.3333)));',
                    'reflectedLight.directSpecular *= litAmt;',
                    '// Silhouette de-twinkle: grazing-angle pixels are the last',
                    '// shimmer source (sub-pixel silhouette facets catch the key',
                    '// for one frame at a time as the island turns). Fade all',
                    '// specular where the surface goes edge-on to the camera —',
                    '// matte rock loses nothing visually there.',
                    'float rimNV = abs(dot(normal, normalize(vViewPosition)));',
                    'float rimFade = smoothstep(0.04, 0.28, rimNV);',
                    'reflectedLight.directSpecular *= rimFade;',
                    'reflectedLight.indirectSpecular *= mix(0.4, 1.0, rimFade);',
                    '// Absolute ceiling: every gate above SCALES the specular,',
                    '// but a single GGX spike is HDR — scale 3.0 by 0.3 and the',
                    '// pixel still flashes white. Matte volcanic rock never',
                    '// flashes; clamp the term itself, and fade it out with',
                    '// distance (past ~50u a one-pixel highlight is pure noise',
                    '// while the diffuse sheen carries the material).',
                    'float specDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);',
                    'reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * specDist;',
                    'reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));',
                ].join('\n')
            )
            .replace(
                '#include <normal_fragment_maps>',
                [
                    '#include <normal_fragment_maps>',
                    '// Detail normal: second tap of the SAME rock normal map at',
                    '// a finer scale, blended in. One extra texture fetch buys',
                    '// small-rock surface detail everywhere (apparent resolution',
                    '// roughly doubles at close range). tbn is threes own',
                    '// cotangent frame (built by getTangentFrame even without a',
                    '// tangent attribute) so this needs no extra geometry data.',
                    '#ifdef USE_NORMALMAP',
                    '// Distance fade: past ~mid-range these micro-normals are',
                    '// SUB-PIXEL, and sub-pixel normal variance under the sun',
                    '// key re-rolls per frame as the island turns — the',
                    '// twinkling/deep-fried shimmer. Full detail up close,',
                    '// gone by 130u where it could only alias.',
                    'float dtlFade = clamp(1.0 - (length(vViewPosition) - 35.0) / 60.0, 0.0, 1.0);',
                    'vec3 dtlN = texture2D( normalMap, vNormalMapUv * 4.3 ).xyz * 2.0 - 1.0;',
                    'normal = normalize( normal + tbn * vec3( dtlN.xy * 0.35 * dtlFade, 0.0 ) );',
                    '#endif',
                    '// Specular AA: widen roughness by per-pixel normal',
                    '// variance (screen derivatives) so sub-pixel normal',
                    '// detail can never flash single-pixel highlights — the',
                    '// fried speckle killed at the source instead of by blur.',
                    'vec3 saaDx = dFdx(normal);',
                    'vec3 saaDy = dFdy(normal);',
                    'float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));',
                    'roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));',
                ].join('\n')
            )
            .replace(
                '#include <opaque_fragment>',
                [
                    '// Underwater light absorption (Beer-Lambert): submerged',
                    '// slopes darken and blue-shift with true water depth, so',
                    '// looking inward through the glass the floor visibly',
                    '// deepens toward the island base. max() floor: pure',
                    '// exponential drove the basin to PITCH black — real deep',
                    '// water keeps a dim blue ambient from downwelled scatter.',
                    'float wDepth = clamp(0.62 - vWorldHeight, 0.0, 4.0);',
                    '// Downwelling light is DIRECTIONAL: the water column on',
                    '// the night side receives no sun, so submerged ground',
                    '// there dims (including the shallow shore ring) — but the',
                    '// dimming applies BEFORE the ambient floor, so the night',
                    '// basin bottoms out at the same never-darker-than-space',
                    '// level instead of going pitch black.',
                    'vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);',
                    'float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vLocXZ), normalize(uSunLocal.xz)));',
                    'uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));',
                    'outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);',
                    '// Bloom-proof the rock: the bloom pass thresholds at 0.8',
                    '// scene-linear, and single sunlit-speckle pixels crossing it',
                    '// bloom into flashing buds as the island turns — the fried',
                    '// look. Rock never legitimately glows; ceiling it just under',
                    '// the threshold starves bloom of terrain input entirely.',
                    '// (The lava pool + crater glow are separate meshes and keep',
                    '// their bloom.) Soft knee, not a hard min: linear below 0.62,',
                    '// asymptotic cap. History: 0.78 read OVERCAST (full sun never',
                    '// landed), 0.92 restored brilliant faces but left 0.12 of bloom',
                    '// headroom over the 0.80 threshold — enough for a lone bright',
                    '// DIFFUSE pixel to bloom-flicker as the island turns, the last',
                    '// twinkle path once specular is ceilinged. 0.84 keeps the sun',
                    '// on the lit faces while cutting bloom overshoot to 0.04.',
                    'vec3 kneeExcess = max(outgoingLight - vec3(0.62), vec3(0.0));',
                    'outgoingLight = min(outgoingLight, vec3(0.62)) + 0.22 * (vec3(1.0) - exp(-kneeExcess / 0.22));',
                    '#include <opaque_fragment>',
                ].join('\n')
            )
            .replace(
                '#include <roughnessmap_fragment>',
                [
                    '#include <roughnessmap_fragment>',
                    '// Photo roughness (sampled by the include above, normalized',
                    '// by the 0.9 material constant) modulates a height-based',
                    '// base: wet near shore, matte mid-slope, dusty at peak.',
                    '// Floors stay high — glossy pixels on detailed normals fire',
                    '// the white specular flicker (the old fried look).',
                    'float texRough = clamp(roughnessFactor / 0.9, 0.0, 1.0);',
                    'float heightNorm = clamp((vWorldHeight - 0.6) / 5.1, 0.0, 1.0);',
                    'roughnessFactor = mix(0.5, 0.85, smoothstep(0.0, 0.3, heightNorm));',
                    'roughnessFactor = mix(roughnessFactor, 0.55, smoothstep(0.8, 1.0, heightNorm));',
                    '// Lava crevices: cooled-lava sheen where emissive is strong',
                    'float creviceWet = smoothstep(0.3, 0.0, vWorldHeight - 0.6) * 0.35;',
                    '// Floors raised 0.42 -> 0.52: glossy pixels on the dense',
                    '// detail normals fire the white specular twinkle.',
                    'roughnessFactor = max(0.52, roughnessFactor - creviceWet);',
                    'roughnessFactor = clamp(roughnessFactor * mix(0.85, 1.15, texRough), 0.52, 1.0);',
                    '// Dry sand is matte, wet swash sand is glossier.',
                    'if (vSand > 0.003) {',
                    '  float wetSand = smoothstep(0.35, 0.0, vWorldHeight - 0.62);',
                    '  roughnessFactor = mix(roughnessFactor, mix(0.85, 0.5, wetSand), vSand);',
                    '}',
                ].join('\n')
            );
    };
    const mtnMesh = new THREE.Mesh(mtnGeo, mtnMat);
    mtnMesh.renderOrder = 1;
    mtnMesh.userData.aoInclude = true; // solid geometry — feeds the GTAO G-buffer (scene.js)
    islandGroup.add(mtnMesh);

    // --- Satellite islets: small rocky outcrops off the shoreline. ---
    // Volcanic islands shed skerries and sea stacks; a few minor rocks
    // breaking the surface make the big island read as genuinely BIG.
    // Same photo rock set, displaced icosahedra, mostly submerged.
    {
        const isletMat = new THREE.MeshStandardMaterial({
            map: rockColorMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap,
            normalScale: new THREE.Vector2(0.8, 0.8),
            color: new THREE.Color(1.35, 1.28, 1.18),
            roughness: 0.9,
            metalness: 0.02,
            envMapIntensity: 0.05,
        });
        isletMat.onBeforeCompile = (shader) => {
            shader.uniforms.uSandMap = sandUniforms.uSandMap;
            shader.uniforms.uSandNrm = sandUniforms.uSandNrm;
            shader.uniforms.uDeepLight = (window.__deepLightU = window.__deepLightU || { value: 0.0 });
            shader.uniforms.uSunW = (window.__sunDirW = window.__sunDirW || { value: new THREE.Vector3(1, 0.2, 0) });
            shader.vertexShader = shader.vertexShader
                .replace('#include <common>', '#include <common>\nvarying vec3 vIsWP;')
                .replace('#include <worldpos_vertex>',
                    '#include <worldpos_vertex>\nvIsWP = (modelMatrix * vec4(position, 1.0)).xyz;');
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', [
                    '#include <common>',
                    'varying vec3 vIsWP;',
                    'uniform sampler2D uSandMap;',
                    'uniform sampler2D uSandNrm;',
                    'uniform float uDeepLight;',
                    'uniform vec3 uSunW;',
                    '// Static per-position hash (no time input, cannot flicker):',
                    '// patchy sand pockets around each skerry waterline.',
                    'float isletSand() {',
                    '  float band = 1.0 - smoothstep(0.0, 0.22, abs(vIsWP.y - 0.70));',
                    '  float pk = max(0.0, sin(vIsWP.x * 6.5 + 1.3) * cos(vIsWP.z * 5.7 + 4.1));',
                    '  return clamp(band * (0.35 + pk), 0.0, 1.0);',
                    '}',
                ].join('\n'))
                .replace(
                    '#include <color_fragment>',
                    [
                        '#include <color_fragment>',
                        'float sMask = isletSand();',
                        'if (sMask > 0.003) {',
                        '  vec3 sandAlbedo = texture2D(uSandMap, vNormalMapUv * 7.0).rgb;',
                        '  diffuseColor.rgb = mix(diffuseColor.rgb, sandAlbedo * 1.5, sMask);',
                        '}',
                    ].join('\n')
                )
                .replace(
                    '#include <normal_fragment_maps>',
                    [
                        '#include <normal_fragment_maps>',
                        '// Specular AA (see mountain material).',
                        'vec3 saaDx = dFdx(normal);',
                        'vec3 saaDy = dFdy(normal);',
                        'float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));',
                        'roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));',
                    ].join('\n')
                )
                .replace(
                    '#include <lights_fragment_end>',
                    [
                        '#include <lights_fragment_end>',
                        '// Anti-twinkle ceiling (see mountain material) — the',
                        '// skerries had NO specular gate and pipped freely.',
                        'float isSpecDist = clamp(1.0 - (length(vViewPosition) - 45.0) / 70.0, 0.15, 1.0);',
                        'reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.09)) * isSpecDist;',
                        'reflectedLight.indirectSpecular = min(reflectedLight.indirectSpecular, vec3(0.05));',
                    ].join('\n')
                )
                .replace(
                '#include <opaque_fragment>',
                [
                    '// Underwater light absorption (see seabed material).',
                    'float wDepth = clamp(0.62 - vIsWP.y, 0.0, 4.0);',
                    '// Directional downwelling, floor applied last (world',
                    '// sun here since vIsWP is a world position).',
                    'vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);',
                    'float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vIsWP.xz), normalize(uSunW.xz)));',
                    'uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));',
                    'outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);',
                    '// Bloom-proof soft knee (see mountain material).',
                    'vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));',
                    'outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));',
                    '#include <opaque_fragment>',
                ].join('\n')
            );
        };
        isletMat.vertexColors = true;
        const islets = [
            { a: 0.55, r: 9.2,  s: 1.05, squash: 0.50 },
            { a: 1.15, r: 10.6, s: 0.55, squash: 0.60 },
            { a: 2.95, r: 8.6,  s: 1.35, squash: 0.42 },
            { a: 3.35, r: 11.3, s: 0.50, squash: 0.55 },
            { a: 5.05, r: 9.8,  s: 0.80, squash: 0.48 },
            // Awash micro-rocks: barely breaking the surface. The size
            // ladder (mountain -> skerry -> awash rock) is what sells
            // the scale of the main island.
            { a: 0.85, r: 11.8, s: 0.28, squash: 0.5 },
            { a: 3.05, r: 10.2, s: 0.24, squash: 0.5 },
            { a: 5.45, r: 11.0, s: 0.32, squash: 0.45 },
        ];
        for (let k = 0; k < islets.length; k++) {
            const cfg = islets[k];
            const geo = new THREE.IcosahedronGeometry(1, 3);
            const p = geo.attributes.position;
            for (let i = 0; i < p.count; i++) {
                const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
                // Craggy radial displacement, seeded per islet.
                const n = Math.sin(vx * 5.1 + k * 7.7) * Math.cos(vz * 4.3 + k * 3.1)
                        + Math.sin(vy * 6.7 + k * 11.3) * 0.6;
                const d = 1.0 + n * 0.16;
                p.setXYZ(i, vx * d, vy * d, vz * d);
            }
            geo.computeVertexNormals();
            const m = new THREE.Mesh(geo, isletMat);
            m.scale.set(cfg.s, cfg.s * cfg.squash, cfg.s * (0.8 + (k % 3) * 0.15));
            m.position.set(
                Math.cos(cfg.a) * cfg.r,
                OCEAN_LEVEL - cfg.s * cfg.squash * 0.45,
                Math.sin(cfg.a) * cfg.r
            );
            // Sand collar at the waterline: a warm-bright vertex tint in
            // the splash band, patchy via the displacement noise so each
            // skerry gets pocket sand, not a painted ring.
            {
                const scaleY = cfg.s * cfg.squash;
                const cols = new Float32Array(p.count * 3);
                for (let i = 0; i < p.count; i++) {
                    const wy = p.getY(i) * scaleY + m.position.y;
                    const band = 1.0 - Math.min(1, Math.abs((wy - OCEAN_LEVEL - 0.06) / 0.14));
                    const patch = Math.max(0, Math.sin(p.getX(i) * 9.0 + k * 5.0));
                    const sm = Math.max(0, band) * patch * 0.85;
                    cols[i*3]   = 1.0 + sm * 0.45;
                    cols[i*3+1] = 1.0 + sm * 0.32;
                    cols[i*3+2] = 1.0 + sm * 0.10;
                }
                geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
            }
            m.rotation.y = cfg.a * 2.3;
            m.userData.aoInclude = true;
            // In the sun's shadow system: without receiveShadow the
            // skerries stayed sunlit even when the main island stood
            // between them and the sun (light appeared to pass through).
            m.castShadow = true;
            m.receiveShadow = true;
            islandGroup.add(m);

            // Scatter boulders on each skerry: small displaced rocks
            // half-buried around the waterline collar. The extra size rung
            // (skerry -> boulder) plus rocks poking out of the sand pockets
            // is what makes the sand read as REAL beach material. Only the
            // 5 full skerries get boulders (not the 3 awash micro-rocks),
            // and boulders do NOT cast shadows (20 tiny shadow casters cost
            // ~20fps in the per-frame shadow pass for no visible gain).
            const nRocks = k < 5 ? 2 : 0;
            for (let b = 0; b < nRocks; b++) {
                const seed = k * 3.7 + b * 2.3;
                const bGeo = new THREE.IcosahedronGeometry(1, 2);
                const bp = bGeo.attributes.position;
                for (let i = 0; i < bp.count; i++) {
                    const bx = bp.getX(i), by = bp.getY(i), bz = bp.getZ(i);
                    const n = Math.sin(bx * 6.3 + seed) * Math.cos(bz * 5.1 + seed * 1.7)
                            + Math.sin(by * 7.9 + seed * 0.9) * 0.5;
                    const d = 1.0 + n * 0.22;
                    bp.setXYZ(i, bx * d, by * d, bz * d);
                }
                bGeo.computeVertexNormals();
                // isletMat has vertexColors on — a missing color attribute
                // reads as black, so give boulders a neutral white fill.
                const bCols = new Float32Array(bp.count * 3).fill(1.0);
                bGeo.setAttribute('color', new THREE.BufferAttribute(bCols, 3));
                const rock = new THREE.Mesh(bGeo, isletMat);
                const rs = cfg.s * (0.10 + 0.09 * Math.abs(Math.sin(seed * 3.1)));
                rock.scale.set(rs, rs * 0.8, rs * (0.85 + 0.3 * Math.abs(Math.cos(seed))));
                const ba = cfg.a + Math.sin(seed) * 0.9;
                const br = cfg.r + Math.cos(seed * 1.3) * cfg.s * 0.9;
                rock.position.set(
                    Math.cos(ba) * br,
                    OCEAN_LEVEL + 0.02 + Math.sin(seed * 2.1) * 0.05 - rs * 0.35,
                    Math.sin(ba) * br
                );
                rock.rotation.set(seed, seed * 1.7, seed * 0.6);
                rock.castShadow = false;
                rock.receiveShadow = true;
                islandGroup.add(rock);
            }
        }
    }

    // --- Lava pool at summit (embedded inside terrain) ---
    {
        // Generate two 128x128 canvas noise textures for UV distortion
        function makeNoiseTex(seed) {
            const c = document.createElement('canvas');
            c.width = c.height = 128;
            const cx = c.getContext('2d');
            const img = cx.createImageData(128, 128);
            for (let i = 0; i < 128 * 128 * 4; i += 4) {
                const v = Math.floor(((Math.sin((i + seed) * 127.1) * 43758.5453) % 1 + 1) % 1 * 255);
                img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
                img.data[i + 3] = 255;
            }
            cx.putImageData(img, 0, 0);
            const t = new THREE.CanvasTexture(c);
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            return t;
        }
        const noiseTex1 = makeNoiseTex(0);
        const noiseTex2 = makeNoiseTex(7919);

        const poolTimeUniform = { value: 0 };
        const poolMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: poolTimeUniform,
                uNoise1: { value: noiseTex1 },
                uNoise2: { value: noiseTex2 },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform sampler2D uNoise1;
                uniform sampler2D uNoise2;
                varying vec2 vUv;
                void main() {
                    float dist = length(vUv - 0.5) * 2.0;
                    float mask = 1.0 - smoothstep(0.6, 1.0, dist);
                    vec2 d1 = (texture2D(uNoise1, vUv * 1.5 + vec2(uTime * 0.02, -uTime * 0.015)).rg - 0.5) * 0.08;
                    vec2 d2 = (texture2D(uNoise2, vUv * 1.2 + vec2(-uTime * 0.018, uTime * 0.025)).rg - 0.5) * 0.08;
                    vec2 distorted = vUv + d1 + d2;
                    float n1 = texture2D(uNoise1, distorted * 2.0).r;
                    float n2 = texture2D(uNoise2, distorted * 1.8 + 0.3).r;
                    float heat = (n1 + n2) * 0.5 * mask * (0.9 + 0.1 * sin(uTime * 0.4));
                    vec3 col = vec3(0.45, 0.06, 0.02) * smoothstep(0.1, 0.3, heat)
                             + vec3(0.55, 0.28, 0.04) * smoothstep(0.3, 0.55, heat)
                             + vec3(0.25, 0.32, 0.06) * smoothstep(0.55, 0.75, heat);
                    // Darken edges to blend into crater walls
                    float edgeDarken = smoothstep(0.5, 0.85, dist);
                    col *= (1.0 - edgeDarken * 0.7);
                    gl_FragColor = vec4(col * heat * 2.8, smoothstep(0.0, 0.15, heat) * (1.0 - edgeDarken * 0.5));
                }
            `,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
        });
        const POOL_RADIUS = 0.35;
        const CRATER_RADIUS = 0.7;
        const CRATER_DEPTH = 0.45;
        const poolGeo = new THREE.CircleGeometry(POOL_RADIUS, 32);
        const poolMesh = new THREE.Mesh(poolGeo, poolMat);
        poolMesh.rotation.x = -Math.PI / 2;
        // Y position will be set after heightmap loads to match crater bottom
        poolMesh.position.set(0, PEAK_Y - CRATER_DEPTH - 0.05, 0);
        poolMesh.renderOrder = 2;
        islandGroup.add(poolMesh);

        // Deep magma layer — darker disc slightly below the surface pool
        const deepPoolGeo = new THREE.CircleGeometry(POOL_RADIUS * 0.85, 32);
        const deepPoolMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: poolTimeUniform,
                uNoise1: { value: noiseTex1 },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform sampler2D uNoise1;
                varying vec2 vUv;
                void main() {
                    float dist = length(vUv - 0.5) * 2.0;
                    float mask = 1.0 - smoothstep(0.5, 0.9, dist);
                    float n = texture2D(uNoise1, vUv * 1.2 + vec2(uTime * 0.008, -uTime * 0.006)).r;
                    float heat = n * mask * 0.6;
                    vec3 col = vec3(0.35, 0.04, 0.01) * heat;
                    gl_FragColor = vec4(col * 2.0, heat * 0.7);
                }
            `,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
        });
        const deepPoolMesh = new THREE.Mesh(deepPoolGeo, deepPoolMat);
        deepPoolMesh.rotation.x = -Math.PI / 2;
        deepPoolMesh.position.set(0, PEAK_Y - CRATER_DEPTH - 0.15, 0);
        deepPoolMesh.renderOrder = 1;
        islandGroup.add(deepPoolMesh);

        // Edge transition ring — blends pool into crater rock
        const ringGeo = new THREE.RingGeometry(POOL_RADIUS, POOL_RADIUS + 0.25, 32);
        const ringMat = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                void main() {
                    // vUv.x goes 0 (inner) to 1 (outer) on a RingGeometry
                    float t = vUv.x;
                    // Inner edge: warm glow, outer: dark rock
                    vec3 inner = vec3(0.25, 0.06, 0.02);
                    vec3 outer = vec3(0.04, 0.03, 0.02);
                    vec3 col = mix(inner, outer, smoothstep(0.0, 0.7, t));
                    float alpha = (1.0 - smoothstep(0.5, 1.0, t)) * 0.8;
                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = -Math.PI / 2;
        ringMesh.position.set(0, PEAK_Y - CRATER_DEPTH - 0.03, 0);
        ringMesh.renderOrder = 2;
        islandGroup.add(ringMesh);

        // Dim point light at the pool (reduced intensity)
        const poolLight = new THREE.PointLight(0xff5020, 0.5, 3.0);
        poolLight.position.set(0, PEAK_Y - CRATER_DEPTH + 0.2, 0);
        islandGroup.add(poolLight);

        // Clock for pool animation
        const poolClock = new THREE.Clock();
        poolMesh.onBeforeRender = () => {
            // Wrapped against the fp32 hash-precision flicker (see ocean.js).
            poolTimeUniform.value = poolClock.getElapsedTime() % 600;
        };

        state.lavaPool = { mesh: poolMesh, deepMesh: deepPoolMesh, ringMesh: ringMesh, light: poolLight, timeUniform: poolTimeUniform };
    }

    // Store geometry + uniform refs for lighting updates
    state.mtnGeo = mtnGeo;
    state.terrainPulseUniform = terrainPulseUniform;

    loadHeightmap(HEIGHTMAP_URL, (imgData, w, h) => {
        validateHeightmap(imgData, w, h);
        // shoreLast carries the bake's shoreline to the foam setup below.
        let shoreLast = null;

        // --- Island bake ---
        // Procedural layers (crags, gullies, terraces, beach pockets)
        // take phase offsets from SD; zeros = the canonical island.
        // Seed offsets for the procedural crag/gully/terrace layers. Zeros =
        // the canonical island; window.__regenIsland() randomizes them to
        // roll a fresh island on demand (click the specimen id in the hero).
        let _isleSD = { a: 0, b: 0, c: 0, d: 0 };
        const bakeIsland = () => {
        const SD = _isleSD;
        const pos = mtnGeo.attributes.position;
        const uv = mtnGeo.attributes.uv;
        const colors = new Float32Array(pos.count * 3);
        const sandArr = new Float32Array(pos.count); // beach mask -> aSand attribute
        const shoreMap = {};
        const EDGE_R = 9.8;   // where blend starts collapsing to seabed
        const FADE_R = 7.0;   // full mountain detail inside this radius

        for (let i = 0; i < pos.count; i++) {
            const hVal = sampleHeight(imgData, w, h, uv.getX(i), uv.getY(i));
            const vx = pos.getX(i), vz = pos.getZ(i);
            const dist = Math.sqrt(vx * vx + vz * vz);

            let height = hVal * TERRAIN_HEIGHT;

            // --- Crater depression at summit ---
            // Push vertices near the peak center DOWN to create a bowl
            const CRATER_R = 0.7;
            const CRATER_D = 0.45;
            if (dist < CRATER_R * 1.5) {
                // Inside the crater: smooth bowl shape
                const craterT = Math.max(0, 1.0 - dist / CRATER_R);
                // Smoothstep-like curve for a natural bowl
                const bowl = craterT * craterT * (3 - 2 * craterT);
                height -= bowl * CRATER_D;
                // Slight rim bump just outside the crater
                if (dist > CRATER_R * 0.8 && dist < CRATER_R * 1.4) {
                    const rimT = 1.0 - Math.abs(dist - CRATER_R) / (CRATER_R * 0.4);
                    height += Math.max(0, rimT) * 0.08;
                }
            }

            // Smooth circular blend: full detail at center, fades to seabed at edges
            let fadeEase = 0;
            if (dist > FADE_R) {
                const t = Math.min(1, (dist - FADE_R) / (EDGE_R - FADE_R));
                fadeEase = t * t * (3 - 2 * t); // smoothstep
                const seabedY = OCEAN_LEVEL - 1.2; // approximate seabed height near island
                height = height + (seabedY - height) * fadeEase;
            }
            // Collapse outside verts to rim
            if (dist > EDGE_R) {
                const s = EDGE_R / dist;
                pos.setX(i, vx * s); pos.setZ(i, vz * s);
                height = OCEAN_LEVEL - 1.2;
            }

            // --- Physical beach terrace ---
            // A real, wide, low-angle sand shelf built INTO the geometry
            // (not a texture band): verts in a tall swash zone are remapped
            // onto a gentle ramp that sits LOWER than the raw rock and
            // slopes at a shallow grade from a bit above water down under
            // it, so the shoreline reads as a walkable beach easing into
            // the shallows instead of rock dropping straight in. Widest
            // where the raw slope is gentlest (natural bays get big
            // beaches, cliffs stay steep).
            let beachW = 0.0; // 0..1 how strongly this vert is beach
            {
                const rel = height - OCEAN_LEVEL;
                const ZONE = 1.6; // full vertical reach of the shelf
                if (Math.abs(rel) < ZONE && dist < EDGE_R) {
                    const t = Math.abs(rel) / ZONE;
                    // Quartic falloff: a wide full-strength plateau around
                    // the waterline before easing off, so most of the swash
                    // zone IS beach instead of a thin blended sliver.
                    beachW = 1.0 - t * t * t * (t * (t * 6 - 15) + 10);
                    // Target beach surface: a near-flat ramp centered
                    // slightly BELOW the waterline. Grade 0.16 = the wide
                    // low-angle foreshore of a real dissipative beach.
                    const beachY = OCEAN_LEVEL - 0.08 + rel * 0.16;
                    // Sand ripples / berm undulation so the shelf is not a
                    // dead-flat cone (award-grade: real beaches ripple).
                    const ripple = Math.sin(dist * 5.5 - Math.atan2(vz, vx) * 3.0) * 0.03
                                 + Math.sin(vx * 3.1 + vz * 2.7) * 0.02;
                    height = height + (beachY + ripple * beachW - height) * beachW;
                }
            }

            // --- Peak / ridgeline sharpening ---
            // The summit read too smoothed. Ridged multifractal creasing,
            // amplitude GROWING with elevation, so the base stays intact
            // but the upper cone breaks into sharp aretes and horns. Added
            // to the geometry (silhouette), not just the normals. Suppressed
            // on the beach shelf so the shore stays smooth sand.
            {
                const h01 = Math.max(0, Math.min(1, (height - OCEAN_LEVEL) / (PEAK_Y - OCEAN_LEVEL)));
                const rock = (1.0 - beachW) * Math.min(1, height - OCEAN_LEVEL > 0.2 ? 1 : (height - OCEAN_LEVEL - 0.2) / 0.2 + 1);
                if (h01 > 0.02 && rock > 0.0) {
                    // Ridged noise: (1-|f|) makes creases into sharp positive
                    // ridges rather than rounded bumps.
                    const f1 = Math.sin(vx * 3.1 + Math.cos(vz * 2.4) + SD.a) * Math.cos(vz * 3.4 + Math.sin(vx * 1.9) + SD.b);
                    const f2 = Math.sin(vx * 6.7 + 1.1 + SD.c) * Math.cos(vz * 5.9 + 2.3 + SD.d);
                    const f3 = Math.sin(vx * 12.9 + 4.2 + SD.a) * Math.cos(vz * 11.3 + 0.7 + SD.c);
                    const ridge = (1.0 - Math.abs(f1)) * 0.55
                                + (1.0 - Math.abs(f2)) * 0.28
                                + (1.0 - Math.abs(f3)) * 0.14;
                    // Macro mask varies WHERE the cragginess lives: some
                    // flanks stay smooth cliff/talus, others break up. A
                    // single uniform frequency read as procedural noise.
                    const macro = 0.5 + 0.5 * Math.sin(vx * 0.9 + 2.0 + SD.b) * Math.cos(vz * 0.8 + 0.5 + SD.d);
                    // Center the ridge term around 0 so it cuts valleys AND
                    // raises crests. Amplitude toned down from the first
                    // pass (0.35 + 1.15h2) — wall-to-wall spikes read as
                    // noise; roughness should come from cliff faces and
                    // benches, with crags reserved for the ridge crests.
                    const amp = (0.26 + 0.65 * h01 * h01) * rock * (0.45 + 0.8 * macro);
                    height += (ridge - 0.55) * amp;
                    // Summit horn, softened (0.55 was a needle).
                    height += Math.pow(h01, 3.0) * 0.35 * rock * (0.6 + 0.4 * (1.0 - Math.abs(f1)));
                    // Radial drainage: meandering gullies carved downslope
                    // from the summit, strongest mid-flank. This is what
                    // gives a stratovolcano its structure — aretes RADIATE
                    // from the peak instead of noise sitting on a cone.
                    const ang = Math.atan2(vz, vx);
                    const meander = Math.sin(dist * 1.6 + ang * 2.0 + SD.a) * 0.4;
                    const ray = Math.sin(ang * 7.0 + meander + Math.sin(ang * 3.0 + 1.7 + SD.b) * 0.8 + SD.c);
                    const channel = 1.0 - Math.abs(ray); // 1 at gully centerline
                    const flank = Math.sin(Math.PI * Math.min(1, Math.max(0, (h01 - 0.04) / 0.9)));
                    height -= channel * channel * 0.45 * flank * rock;
                    // Stratified lava benches: on selected flanks, quantize
                    // the height into flat treads with steep risers — the
                    // trap-basalt terrace/plateau/cliff profile (Faroes,
                    // Iceland). The slope-zoned material then paints risers
                    // dark basalt and treads pale ash automatically.
                    const stepH = 0.9;
                    const ph = height / stepH;
                    const fr = ph - Math.floor(ph);
                    const tread = Math.floor(ph) + Math.min(1, Math.max(0, (fr - 0.35) / 0.3));
                    const terraceY = tread * stepH;
                    const flankSel = Math.max(0, Math.sin(vx * 0.55 + 4.0 + SD.d) * Math.cos(vz * 0.6 + 1.2 + SD.a));
                    const midBand = Math.sin(Math.PI * Math.min(1, Math.max(0, (h01 - 0.05) / 0.75)));
                    const tm = Math.min(0.7, flankSel * 1.15) * midBand * rock;
                    height = height * (1 - tm) + terraceY * tm;
                }
            }

            pos.setY(i, height);

            // Coloring: volcano above water, seafloor below
            const noise = (Math.random() - 0.5) * 0.04;
            const nearShore = Math.max(0, 1.0 - Math.min(1, Math.abs(height - OCEAN_LEVEL) / 0.5));
            let cr, cg, cb;
            if (height > OCEAN_LEVEL - 0.3) {
                const c = volcanoColor(Math.max(0, Math.min(1, hVal + noise)), nearShore);
                cr = c.r; cg = c.g; cb = c.b;
            } else {
                // Underwater mountain — raw volcanic crust coloring
                const c = seafloorColor(Math.max(0, Math.min(1, (height - FLOOR_Y) / BASE_DEPTH)));
                cr = c.r; cg = c.g; cb = c.b;
            }
            // Lift baked palette so night hemisphere has readable albedo.
            // Capped to prevent blow-out under the sun key light.
            // Underwater verts get a much smaller lift: the full 2.4x
            // pushed the shallow seabed ring around the island to the
            // cap, and that beige glowed through the semi-transparent
            // water as a milky halo the same brightness as the land —
            // in the top-down framing the shoreline vanished entirely.
            // The night-readability argument only applies above water.
            // Beach fringe: a dry-sand band just above the waterline,
            // patchy via noise so it reads as pocket beaches between
            // rock, not a painted ring. Sits above the darker WET band
            // (which starts at the waterline) — the two-tone shore is
            // the scale cue that makes the island read mountain-sized.
            if (height > OCEAN_LEVEL + 0.04 && height < OCEAN_LEVEL + 0.5) {
                const bandT = 1.0 - Math.abs((height - OCEAN_LEVEL - 0.22) / 0.28);
                const patch = Math.max(0, Math.sin(vx * 1.9 + 4.7) * Math.cos(vz * 2.3 + 1.3));
                const sandMix = Math.min(1, Math.max(0, bandT) * patch * 1.15);
                cr += (0.375 - cr) * sandMix;
                cg += (0.320 - cg) * sandMix;
                cb += (0.235 - cb) * sandMix;
                sandArr[i] = Math.max(sandArr[i], sandMix);
            }
            // Submerged sand apron: the same pocket-beach noise continues
            // BELOW the waterline as pale sand shallows. Under the water
            // absorption this renders as the bright turquoise entry that
            // real swimming beaches have (dry sand -> glowing shallows ->
            // deep blue), instead of rock diving straight into dark water.
            if (height > OCEAN_LEVEL - 0.55 && height <= OCEAN_LEVEL + 0.04) {
                const subT = 1.0 - Math.abs((height - OCEAN_LEVEL + 0.22) / 0.35);
                const patch = Math.max(0, Math.sin(vx * 1.9 + 4.7) * Math.cos(vz * 2.3 + 1.3));
                const sandMix = Math.min(1, Math.max(0, subT) * patch * 1.05);
                cr += (0.310 - cr) * sandMix;
                cg += (0.280 - cg) * sandMix;
                cb += (0.215 - cb) * sandMix;
                sandArr[i] = Math.max(sandArr[i], sandMix * 0.8);
            }
            // Bind the sand texture to the physical beach shelf itself, so
            // the whole ramp reads as sand (with a patchy edge into rock).
            if (beachW > 0.05) {
                const edgePatch = 0.55 + 0.45 * Math.max(0,
                    Math.sin(vx * 2.4 + 3.1) * Math.cos(vz * 2.8 + 0.9));
                sandArr[i] = Math.max(sandArr[i], Math.min(1, beachW * 1.2 * edgePatch));
            }
            // Above-water values raised (2.4/0.78 -> 3.4/1.05): the photo
            // rock albedo (mid-grey, ~0.5 average) now MULTIPLIES these
            // vertex colors, so the product needs a brighter baked base
            // to land at the same on-screen brightness as before.
            const above = height > OCEAN_LEVEL - 0.3;
            const LIFT = above ? 3.4 : 1.4, CAP = above ? 1.05 : 0.40;
            cr = Math.min(CAP, cr * LIFT);
            cg = Math.min(CAP, cg * LIFT);
            cb = Math.min(CAP, cb * LIFT);
            // Blend the flat apron ring down toward the outer seabed
            // mesh's darkness so the shallow shelf doesn't sit as a
            // uniformly bright disc under the water around the island.
            if (!above && fadeEase > 0) {
                const dim = 1.0 - fadeEase * 0.5;
                cr *= dim; cg *= dim; cb *= dim;
            }

            // --- Scorched zone: darken rock near the crater ---
            if (dist < 1.5) {
                const scorchT = Math.max(0, 1.0 - dist / 1.5);
                const scorch = scorchT * scorchT * 0.35;
                cr *= (1.0 - scorch);
                cg *= (1.0 - scorch * 1.2);
                cb *= (1.0 - scorch * 0.8);
            }
            colors[i * 3] = cr; colors[i * 3 + 1] = cg; colors[i * 3 + 2] = cb;

            // Shore detection
            const sx = pos.getX(i), sz = pos.getZ(i);
            if (height > OCEAN_LEVEL && height < OCEAN_LEVEL + 0.5) {
                const angle = Math.atan2(sz, sx);
                const bucket = Math.round((angle + Math.PI) / (Math.PI * 2) * 360);
                const sd = Math.sqrt(sx * sx + sz * sz);
                if (!shoreMap[bucket] || sd > shoreMap[bucket].dist)
                    shoreMap[bucket] = { x: sx, z: sz, dist: sd };
            }
        }
        pos.needsUpdate = true;
        mtnGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        mtnGeo.setAttribute('aSand', new THREE.BufferAttribute(sandArr, 1));
        mtnGeo.computeVertexNormals();

        // --- Gradient-based lava glow: peaks + crevices ---
        // Build height grid for neighbor lookups
        const S = TERRAIN_SEGMENTS + 1; // verts per side
        const heights = new Float32Array(pos.count);
        for (let i = 0; i < pos.count; i++) heights[i] = pos.getY(i);

        const emissiveColors = new Float32Array(pos.count * 3);
        for (let i = 0; i < pos.count; i++) {
            const ht = heights[i];
            if (ht < OCEAN_LEVEL + 0.2) continue; // skip underwater

            const row = Math.floor(i / S);
            const col = i % S;

            // Sample neighbors to compute local gradient
            let maxNeighbor = ht, minNeighbor = ht, sumNeighbor = 0, nCount = 0;
            for (let dr = -2; dr <= 2; dr++) {
                for (let dc = -2; dc <= 2; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    const nr = row + dr, nc = col + dc;
                    if (nr >= 0 && nr < S && nc >= 0 && nc < S) {
                        const nh = heights[nr * S + nc];
                        maxNeighbor = Math.max(maxNeighbor, nh);
                        minNeighbor = Math.min(minNeighbor, nh);
                        sumNeighbor += nh;
                        nCount++;
                    }
                }
            }
            const avgNeighbor = nCount > 0 ? sumNeighbor / nCount : ht;

            // Peak detection: vertex is higher than all neighbors
            const peakness = Math.max(0, ht - maxNeighbor + 0.05) * 20; // sharp peaks
            // Also glow based on absolute height (top of mountain)
            const heightGlow = Math.max(0, (ht - TERRAIN_HEIGHT * 0.85) / (TERRAIN_HEIGHT * 0.15));

            // Crevice detection: vertex is lower than average neighbors
            const depthDiff = Math.max(0, avgNeighbor - ht);
            const creviceDepth = depthDiff * 5.0 * (1.0 - depthDiff * 0.5);

            // Combined glow
            let glow = Math.min(1, peakness + heightGlow * 1.6 + creviceDepth);

            // Fade at edges
            const vx2 = pos.getX(i), vz2 = pos.getZ(i);
            const d2 = Math.sqrt(vx2 * vx2 + vz2 * vz2);
            glow *= 1.0 - Math.min(1, d2 / 8);

            // Orange-red emissive
            emissiveColors[i * 3]     = glow;            // R
            emissiveColors[i * 3 + 1] = glow * 0.25;     // G (orange tint)
            emissiveColors[i * 3 + 2] = glow * 0.03;     // B (barely)
        }
        // Bind baked emissive as a separate attribute. The vertex shader
        // (injected via onBeforeCompile above) multiplies it by uPulse and
        // adds it to vColor, so the GPU does the per-pixel blend for free.
        mtnGeo.setAttribute('aEmissive', new THREE.BufferAttribute(emissiveColors, 3));

        // --- Reposition lava pool to actual crater bottom ---
        {
            let minCraterY = Infinity;
            for (let i = 0; i < pos.count; i++) {
                const vx3 = pos.getX(i), vz3 = pos.getZ(i);
                const d3 = Math.sqrt(vx3 * vx3 + vz3 * vz3);
                if (d3 < 0.3) { // sample vertices very near center
                    minCraterY = Math.min(minCraterY, pos.getY(i));
                }
            }
            if (minCraterY < Infinity && state.lavaPool) {
                const poolY = minCraterY + 0.02; // just above crater floor
                state.lavaPool.mesh.position.y = poolY;
                state.lavaPool.deepMesh.position.y = poolY - 0.1;
                state.lavaPool.ringMesh.position.y = poolY + 0.02;
                state.lavaPool.light.position.y = poolY + 0.3;
            }
        }

        shoreLast = shoreMap;
        };
        bakeIsland();
        // Click-to-regenerate: roll new phase offsets and re-bake the
        // island geometry live (position is edited in place, so flag it +
        // recompute normals; color/sand/emissive re-set themselves).
        window.__regenIsland = () => {
            const T = Math.PI * 2;
            _isleSD = { a: Math.random() * T, b: Math.random() * T, c: Math.random() * T, d: Math.random() * T };
            try {
                bakeIsland();
                mtnGeo.attributes.position.needsUpdate = true;
                mtnGeo.computeVertexNormals();
            } catch (e) { console.warn('island regen failed', e); }
        };
        const pos = mtnGeo.attributes.position;

        // --- Reflection-only particles (layer 1) ---
        // Three types: shore foam, rim foam, and sparse ocean whitecaps
        const sv = Object.values(shoreLast);

        // Count: shore (4 per point), rim (100), no whitecaps
        const SHORE_PER = 4;
        const shoreTot = sv.length * SHORE_PER;
        const RIM_COUNT = 400;
        const tot = shoreTot + RIM_COUNT;

        const fp = new Float32Array(tot * 3);
        const fs = new Float32Array(tot);
        const fph = new Float32Array(tot);
        const fType = new Uint8Array(tot); // 0=shore, 1=rim, 2=whitecap
        let idx = 0;

        // Shore foam — tight to island waterline, narrow band
        for (let i = 0; i < sv.length; i++) {
            const sx = sv[i].x, sz = sv[i].z;
            for (let p = 0; p < SHORE_PER; p++) {
                fp[idx*3]   = sx + (Math.random()-0.5)*0.1;
                fp[idx*3+1] = OCEAN_LEVEL + 0.12;
                fp[idx*3+2] = sz + (Math.random()-0.5)*0.1;
                fs[idx] = 0.5 + Math.random() * 0.5;
                fph[idx] = Math.random() * Math.PI * 2;
                fType[idx] = 0;
                idx++;
            }
        }

        // Rim foam — same style as island shore, tight to glass edge
        for (let i = 0; i < RIM_COUNT; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = OCEAN_RADIUS - 0.15 + Math.random() * 0.1; // tight to edge
            fp[idx*3]   = Math.cos(angle) * r + (Math.random()-0.5)*0.1;
            fp[idx*3+1] = OCEAN_LEVEL + 0.12;
            fp[idx*3+2] = Math.sin(angle) * r + (Math.random()-0.5)*0.1;
            fs[idx] = 0.5 + Math.random() * 0.5; // same speed range as shore
            fph[idx] = Math.random() * Math.PI * 2;
            fType[idx] = 1;
            idx++;
        }

        // Whitecaps removed

        const fg = new THREE.BufferGeometry();
        fg.setAttribute('position', new THREE.BufferAttribute(fp, 3));
        const fm = new THREE.PointsMaterial({
            color: 0xffffff, size: 0.006, transparent: true,
            opacity: 0.07, depthWrite: false, depthTest: true, sizeAttenuation: true,
        });
        const fPts = new THREE.Points(fg, fm);
        fPts.layers.set(1); // reflection only
        fPts.renderOrder = 12;
        // Hidden for launch: the dense white point swarm at the
        // waterline bloomed into the glowing shoreline patch (the
        // "glitter" artifact) and read as cartoon foam against the
        // photo materials. The shader crest term on the water carries
        // the whitecap read now.
        fPts.visible = false;
        islandGroup.add(fPts);
        window._foam = { geo: fg, speeds: fs, phases: fph, types: fType, count: tot, mat: fm, mesh: fPts };
    });

    // --- (D) Seabed terrain — full ocean floor with composited heightmaps ---
    const SEABED_SEGMENTS = 512;
    const seabedGeo = new THREE.PlaneGeometry(OCEAN_RADIUS * 2, OCEAN_RADIUS * 2, SEABED_SEGMENTS, SEABED_SEGMENTS);
    seabedGeo.rotateX(-Math.PI / 2);
    // Same photo rock set as the mountain (own texture instances so the
    // tiling can differ): the baked depth/lava vertex tints keep the
    // bathymetry palette, the photo maps add real sediment-rock grain.
    // Tiled denser (6x) than the mountain — the seabed plane is 2x the
    // island footprint and reads at a smaller texel scale through water.
    const seabedColorMap = _rockTex('rockface_color.jpg', true);
    const seabedNormalMap = _rockTex('rockface_normal.jpg', false);
    const seabedRoughMap = _rockTex('rockface_rough.jpg', false);
    seabedColorMap.repeat.set(6, 6);
    seabedNormalMap.repeat.set(6, 6);
    seabedRoughMap.repeat.set(6, 6);
    const seabedMat = new THREE.MeshStandardMaterial({
        map: seabedColorMap,
        // Same double-albedo compensation logic as the mountain material,
        // but held lower — at 2.6 the shallow rim shelf blew out into a
        // bright icy ring through the glass.
        color: new THREE.Color(1.7, 1.7, 1.7),
        vertexColors: true,
        roughness: 0.85,
        metalness: 0.0,
        normalMap: seabedNormalMap,
        normalScale: new THREE.Vector2(0.6, 0.6),
        roughnessMap: seabedRoughMap,
        envMapIntensity: 0.05,
    });
    seabedMat.onBeforeCompile = (shader) => {
        shader.uniforms.uDeepLight = (window.__deepLightU = window.__deepLightU || { value: 0.0 });
        shader.uniforms.uSunLocal = terrainSunUniform;
        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', '#include <common>\nvarying float vSbWY;\nvarying vec2 vSbXZ;')
            .replace('#include <worldpos_vertex>',
                '#include <worldpos_vertex>\nvSbWY = position.y;\nvSbXZ = position.xz;');
        shader.fragmentShader = shader.fragmentShader
            .replace('#include <common>', '#include <common>\nvarying float vSbWY;\nvarying vec2 vSbXZ;\nuniform float uDeepLight;\nuniform vec3 uSunLocal;')
            .replace(
                '#include <normal_fragment_maps>',
                [
                    '#include <normal_fragment_maps>',
                    '// Specular AA (see mountain material) — derivative math',
                    '// only, no texture cost.',
                    'vec3 saaDx = dFdx(normal);',
                    'vec3 saaDy = dFdy(normal);',
                    'float saaVar = 0.25 * (dot(saaDx, saaDx) + dot(saaDy, saaDy));',
                    'roughnessFactor = min(1.0, sqrt(roughnessFactor * roughnessFactor + min(saaVar, 0.30)));',
                ].join('\n')
            )
            .replace(
            '#include <opaque_fragment>',
            [
                '// Underwater light absorption: the floor darkens and',
                '// blue-shifts with true depth — the shallow rim shelf',
                '// stays readable while the basin toward the island base',
                '// falls into deep-water dark. THE inward-depth cue.',
                '// max() floor keeps the basin a dim blue instead of the',
                '// pitch black the raw exponential produced.',
                'float wDepth = clamp(0.62 - vSbWY, 0.0, 4.0);',
                '// Directional downwelling with the ambient floor applied',
                '// LAST: night side dims but never below the space level',
                '// (see mountain material).',
                'vec3 uwAbs = exp(-vec3(0.62, 0.34, 0.20) * wDepth * 1.15);',
                'float uwDay = smoothstep(-0.45, 0.35, dot(normalize(vSbXZ), normalize(uSunLocal.xz)));',
                'uwAbs *= mix(1.0, mix(0.38, 0.85, uwDay), smoothstep(0.0, 0.3, wDepth));',
                'outgoingLight *= max(uwAbs, vec3(0.13, 0.17, 0.23) * uDeepLight);',
                '// Same bloom-proof soft knee as the mountain: the sun',
                '// hotspot on the SHALLOW SHELF (seen through clear water)',
                '// was blooming into a white patch that tracked the sun',
                '// azimuth around the island.',
                'vec3 kneeExcess = max(outgoingLight - vec3(0.6), vec3(0.0));',
                'outgoingLight = min(outgoingLight, vec3(0.6)) + 0.18 * (vec3(1.0) - exp(-kneeExcess / 0.18));',
                '#include <opaque_fragment>',
            ].join('\n')
        );
    };
    const seabedMesh = new THREE.Mesh(seabedGeo, seabedMat);
    seabedMesh.renderOrder = 2;
    seabedMesh.userData.aoInclude = true; // solid geometry — feeds the GTAO G-buffer (scene.js)
    islandGroup.add(seabedMesh);

    // Seabed: real NASA GEBCO bathymetry — single heightmap, no tiling
    loadHeightmap('ocean_floor.png', (imgData, w, h) => {
        const pos = seabedGeo.attributes.position;
        const uv = seabedGeo.attributes.uv;
        const colors = new Float32Array(pos.count * 3);

        for (let i = 0; i < pos.count; i++) {
            const u = uv.getX(i);
            const v = uv.getY(i);
            let vx = pos.getX(i);
            let vz = pos.getZ(i);
            const dist = Math.sqrt(vx * vx + vz * vz);

            const bH = sampleHeight(imgData, w, h, u, v);
            let y = FLOOR_Y + 0.2 + bH * (BASE_DEPTH - 0.5);

            // Cap well below ocean surface
            y = Math.min(y, OCEAN_LEVEL - 0.5);

            // Clip to circle
            const SHELF_Y = FLOOR_Y + BASE_DEPTH * 0.15;
            const rimStart = OCEAN_RADIUS - 2.0;
            if (dist > rimStart) {
                const rimT = Math.min(1, (dist - rimStart) / 2.0);
                const ease = rimT * rimT * (3 - 2 * rimT); // smoothstep
                y = y + (SHELF_Y - y) * ease;
            }
            if (dist > OCEAN_RADIUS - 0.05) {
                const s = (OCEAN_RADIUS - 0.05) / dist;
                pos.setX(i, vx * s); pos.setZ(i, vz * s);
                y = SHELF_Y;
            }

            // Seam tuck: the outermost meter DIVES under the glass floor
            // corner instead of butting into it edge-to-edge. The razor
            // seam becomes a naturally shadowed sediment groove, the way
            // sand meets the wall of a real aquarium.
            if (dist > OCEAN_RADIUS - 0.9) {
                const tuckT = Math.min(1, (dist - (OCEAN_RADIUS - 0.9)) / 0.9);
                y -= tuckT * tuckT * 0.38;
            }

            pos.setY(i, y);

            const noise = (Math.random() - 0.5) * 0.03;
            const depthNorm = Math.max(0, Math.min(1, (y - FLOOR_Y) / BASE_DEPTH + noise));

            // Lava veins — procedural at the deepest areas
            let lava = 0;
            if (depthNorm < 0.3) {
                const vx2 = pos.getX(i), vz2 = pos.getZ(i);
                const vein1 = Math.sin(vx2 * 1.5 + vz2 * 0.7) * Math.sin(vx2 * 0.3 - vz2 * 1.8);
                const vein2 = Math.sin(vx2 * 2.8 - vz2 * 1.2) * Math.cos(vx2 * 0.9 + vz2 * 2.1);
                const veinMask = Math.max(0, vein1 * 0.5 + 0.5) * Math.max(0, vein2 * 0.5 + 0.5);
                const deepFactor = 1.0 - depthNorm / 0.3;
                lava = veinMask * deepFactor * 0.4;
            }
            const col = seafloorColor(depthNorm, lava);
            const radialDark = 1.0 - Math.min(1, (1.0 - dist / OCEAN_RADIUS)) * 0.6;
            const depthDark = 0.6 + depthNorm * 0.3;
            // Floored at 0.55: unfloored, the product bottomed at 0.24 on
            // the darkest palette stop and the basin baked out at ~0.014
            // vertex color — pitch black after absorption. The depth read
            // comes from the absorption shader now, not from crushing the
            // bake.
            const dark = Math.max(radialDark * depthDark, 0.55);
            let sr = col.r * dark, sg = col.g * dark, sb = col.b * dark;
            // Sediment contact ring: only the last ~1.3u darkens into the
            // grounded seam tone. The wall now goes CLEAR below the shelf
            // line so the seabed detail near the glass is deliberately on
            // display — a wide dark weld here would black out exactly the
            // rock the cutaway view exists to show.
            if (dist > OCEAN_RADIUS - 2.2) {
                const sedT = Math.min(1, (dist - (OCEAN_RADIUS - 2.2)) / 2.0);
                const sed = sedT * sedT * 0.85;
                sr += (0.012 - sr) * sed;
                sg += (0.020 - sg) * sed;
                sb += (0.026 - sb) * sed;
            }
            colors[i * 3]     = sr;
            colors[i * 3 + 1] = sg;
            colors[i * 3 + 2] = sb;
        }
        pos.needsUpdate = true;
        seabedGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        seabedGeo.computeVertexNormals();

        // --- Rim bubbles: only at highest seabed peaks along the dish edge ---
        const rimVentSources = [];
        for (let i = 0; i < pos.count; i++) {
            const vy = pos.getY(i);
            const vx = pos.getX(i), vz = pos.getZ(i);
            const d = Math.sqrt(vx * vx + vz * vz);
            if (d > OCEAN_RADIUS * 0.75 && d < OCEAN_RADIUS - 1 && vy > FLOOR_Y + BASE_DEPTH * 0.45) {
                if (Math.random() < 0.05) {
                    rimVentSources.push({ x: vx, y: vy, z: vz, d });
                }
            }
        }
        rimVentSources.sort((a, b) => b.y - a.y);
        const topVents = rimVentSources.slice(0, Math.min(30, rimVentSources.length));

        if (topVents.length > 0) {
            const BPV = 15;
            const totalB = topVents.length * BPV;
            const bp = new Float32Array(totalB * 3);
            const bv = new Float32Array(totalB);
            const bph = new Float32Array(totalB);
            for (let i = 0; i < topVents.length; i++) {
                const src = topVents[i];
                const inward = 0.95;
                for (let b = 0; b < BPV; b++) {
                    const j = i * BPV + b;
                    bp[j * 3]     = src.x * inward + (Math.random() - 0.5) * 0.3;
                    bp[j * 3 + 1] = src.y + Math.random() * (OCEAN_LEVEL - src.y);
                    bp[j * 3 + 2] = src.z * inward + (Math.random() - 0.5) * 0.3;
                    bv[j] = 0.2 + Math.random() * 0.4;
                    bph[j] = Math.random() * Math.PI * 2;
                }
            }
            const bubGeo = new THREE.BufferGeometry();
            bubGeo.setAttribute('position', new THREE.BufferAttribute(bp, 3));
            const bubClipTop = new THREE.Plane(new THREE.Vector3(0, -1, 0), OCEAN_LEVEL - 0.05);
            const bubClipBot = new THREE.Plane(new THREE.Vector3(0, 1, 0), -FLOOR_Y + 0.1);
            const bubMat = new THREE.PointsMaterial({
                color: 0xaaddff, size: 0.02, transparent: true,
                opacity: 0.25, depthWrite: false, sizeAttenuation: true,
                blending: THREE.AdditiveBlending,
                clippingPlanes: [bubClipTop, bubClipBot],
            });
            const bubMesh = new THREE.Points(bubGeo, bubMat);
            bubMesh.renderOrder = 5;
            // Hidden for launch: discrete bubble dots read cartoonish
            // against the photo seabed. Re-enable via mesh.visible.
            bubMesh.visible = false;
            islandGroup.add(bubMesh);
            window._rimBubbles = {
                geo: bubGeo, positions: bp, speeds: bv, phases: bph,
                sources: topVents, perVent: BPV, count: totalB, mat: bubMat, mesh: bubMesh,
            };
        }

        // Peak foam REMOVED
    });
}
