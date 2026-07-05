import * as THREE from 'three';
import { Water } from './Water.js?v=real18'; // local copy with reflection-layer hack
import {
    state, OCEAN_LEVEL, OCEAN_RADIUS, BASE_DEPTH, FLOOR_Y,
} from './config.js?v=real18';

// ---------------------------------------------------------------------------
// Procedural noise textures for the lava underside shader (no external files)
// ---------------------------------------------------------------------------

/** 256x256 smooth Perlin-like noise generated on a canvas */
function _makeNoiseTex() {
    const S = 256;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const ctx = c.getContext('2d');

    // Hash-based value noise grid at 64-cell resolution, bilinear-smoothed
    const G = 64;
    const grid = new Float32Array((G + 1) * (G + 1));
    for (let i = 0; i < grid.length; i++) grid[i] = Math.random();

    const id = ctx.createImageData(S, S);
    const d = id.data;
    for (let y = 0; y < S; y++) {
        for (let x = 0; x < S; x++) {
            const gx = (x / S) * G, gy = (y / S) * G;
            const ix = Math.floor(gx), iy = Math.floor(gy);
            const fx = gx - ix, fy = gy - iy;
            const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
            const row = G + 1;
            const a = grid[iy * row + ix], b = grid[iy * row + ix + 1];
            const cc = grid[(iy + 1) * row + ix], dd = grid[(iy + 1) * row + ix + 1];
            const v = a + (b - a) * sx + (cc - a) * sy + (a - b - cc + dd) * sx * sy;
            const byte = (v * 255) | 0;
            const off = (y * S + x) * 4;
            d[off] = byte; d[off + 1] = byte; d[off + 2] = byte; d[off + 3] = byte;
        }
    }
    ctx.putImageData(id, 0, 0);

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipMapLinearFilter;
    return tex;
}

/** 256x256 cellular / Voronoi pattern — bright cells with dark cracks */
function _makeLavaTileTex() {
    const S = 256;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const ctx = c.getContext('2d');

    // Scatter seed points
    const SEEDS = 28;
    const sx = new Float32Array(SEEDS), sy = new Float32Array(SEEDS);
    for (let i = 0; i < SEEDS; i++) { sx[i] = Math.random() * S; sy[i] = Math.random() * S; }

    const id = ctx.createImageData(S, S);
    const d = id.data;
    for (let y = 0; y < S; y++) {
        for (let x = 0; x < S; x++) {
            let minD = 1e9, minD2 = 1e9;
            for (let i = 0; i < SEEDS; i++) {
                // Wrap-aware distance for tiling
                let dx = Math.abs(x - sx[i]); if (dx > S / 2) dx = S - dx;
                let dy = Math.abs(y - sy[i]); if (dy > S / 2) dy = S - dy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minD) { minD2 = minD; minD = dist; }
                else if (dist < minD2) { minD2 = dist; }
            }
            // F2-F1 gives dark cracks between cells
            const edge = Math.min(1, (minD2 - minD) / 18);
            // Cell brightness based on distance to nearest seed
            const cell = 1.0 - Math.min(1, minD / 40);
            const v = Math.min(1, cell * 0.6 + edge * 0.6);
            const byte = (v * 255) | 0;
            const off = (y * S + x) * 4;
            d[off] = byte; d[off + 1] = (byte * 0.7) | 0; d[off + 2] = (byte * 0.3) | 0; d[off + 3] = 255;
        }
    }
    ctx.putImageData(id, 0, 0);

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipMapLinearFilter;
    return tex;
}

export function initOcean() {
    const { islandGroup, SUN_DIR } = state;

    // --- (A) Ocean surface — THREE.js Water addon for realistic reflections ---
    // Ripple normal map. main.js holds the fly-in until this decodes
    // (state.waterNormalsReady), so the water is already rippled on the
    // first visible frame. Without it the shader's getNoise() samples an
    // empty map for a beat — every tap reads 0, noise*0.5-1.0 = -1, and
    // the whole sheet collapses to one uniform normal that catches the
    // reflection as a hard squarish slab before it snaps into waves.
    const waterNormalTex = new THREE.TextureLoader().load('waternormals.jpg', (tex) => {
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        // Anisotropic filtering: the water plane is viewed at grazing
        // angles in every side-on framing, where trilinear alone smears
        // the normal detail into mush. Cheap on any modern GPU.
        if (state.renderer) {
            tex.anisotropy = Math.min(4, state.renderer.capabilities.getMaxAnisotropy());
        }
        state.waterNormalsReady = true;
        if (typeof state._onWaterReady === 'function') state._onWaterReady();
    });

    const waterGeometry = new THREE.CircleGeometry(OCEAN_RADIUS, 128);
    // The scene's SUN_DIR is horizon-level (y = 0), which starves the
    // water shader: reflect(-sun, normal) never aligns with an
    // above-horizon camera, so instead of a coherent sun path on the
    // sea there were only sporadic wave-normal flashes (shoreline
    // glitter), and the diffuse term carried no day/night gradient.
    // Lift the elevation to match the visible sun disc.
    const waterSunDir = SUN_DIR.clone();
    waterSunDir.y = 0.60;
    waterSunDir.normalize();
    const water = new Water(waterGeometry, {
        textureWidth: 1024,
        textureHeight: 1024,
        waterNormals: waterNormalTex,
        sunDirection: waterSunDir,
        // Full-strength cream sun glint (matches the sun's emission).
        // This was dimmed to 0x9c8e75 and the lobe broadened to dodge a
        // bloom hot pixel — the exact change that made the water read as
        // gray plastic. Bloom now thresholds in scene-linear HDR after
        // the OutputPass migration, so the specular can be bright and
        // tight again without piling into a bloom flash.
        sunColor: 0xf8f1e3,
        waterColor: 0x061e2e,
        distortionScale: 3.7,
        size: 2.5,
        fog: false,
        alpha: 0.82,
    });
    water.rotation.x = -Math.PI / 2;
    water.position.y = OCEAN_LEVEL + 0.05;
    water.renderOrder = 3;
    water.material.depthWrite = true; // opaque from top-down
    water.material.uniforms['oceanRadius'].value = OCEAN_RADIUS;
    islandGroup.add(water);

    // Opaque underside — blocks view through ocean from below.
    // depthWrite was previously false, which let the sun orb / corona / bloom
    // bleed straight through the dish in the skills zone (camera y = -9).
    // Switching to opacity 1.0 + depthWrite true makes this a real occluder
    // for everything that sits above the water plane (sun, moon, gateway,
    // mountain peak when seen from underneath). Side is FrontSide so it
    // only kicks in when the camera is below it — top-down views are
    // unchanged because the Water mesh draws first at y = +0.05 above this.
    // Underside disc — radial gradient: lighter at center (subsurface light),
    // darker at edges (deep water absorption). Shader-based for smooth falloff.
    const undersideGeo = new THREE.CircleGeometry(OCEAN_RADIUS, 64);
    undersideGeo.rotateX(Math.PI / 2); // faces DOWN
    const undersideMat = new THREE.ShaderMaterial({
        uniforms: {
            uRadius: { value: OCEAN_RADIUS },
            uTime:   { value: 0 },
        },
        vertexShader: `
            varying vec2 vPos;
            void main() {
                vPos = position.xz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uRadius;
            uniform float uTime;
            varying vec2 vPos;

            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p); vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
                           mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
            }

            void main() {
                float dist = length(vPos);
                float norm = dist / uRadius;

                // Deep ocean blue at center, near-black at edges
                vec3 centerCol = vec3(0.04, 0.10, 0.16);
                vec3 edgeCol   = vec3(0.015, 0.03, 0.06);
                vec3 col = mix(centerCol, edgeCol, smoothstep(0.1, 0.9, norm));

                // Subtle animated caustic hint from below
                float c = noise(vPos * 0.12 + uTime * 0.02);
                c = smoothstep(0.45, 0.65, c) * 0.06 * (1.0 - norm);
                col += vec3(0.3, 0.5, 0.6) * c;

                gl_FragColor = vec4(col, 1.0);
            }
        `,
        side: THREE.FrontSide, // only visible from below
        depthWrite: true,
    });
    const undersideMesh = new THREE.Mesh(undersideGeo, undersideMat);
    undersideMesh.position.y = OCEAN_LEVEL - 0.05; // just below water surface
    undersideMesh.renderOrder = 3;
    islandGroup.add(undersideMesh);
    window._undersideMat = undersideMat;

    // Store in shared state for lighting.js access
    state.water = water;
    water.userData.aoInclude = true; // water plane depth grounds the dish/terrain contact AO

    // --- (C) Bottom — two-texture distortion lava shader (TheGameMaker technique) ---
    // Procedural canvas textures: smooth noise + cellular Voronoi (no external files)
    const _noiseTex = _makeNoiseTex();
    const _lavaTileTex = _makeLavaTileTex();

    const bottomGeo = new THREE.CircleGeometry(OCEAN_RADIUS, 128);
    bottomGeo.rotateX(Math.PI / 2);
    const bottomMat = new THREE.ShaderMaterial({
        depthWrite: true,
        uniforms: {
            uTime:     { value: 0 },
            uRadius:   { value: OCEAN_RADIUS - 0.1 },
            uPulse:    { value: 0.48 }, // synced from terrainPulseUniform each frame
            // 0..1 eruption drive from volcano.js — the underside plumbing
            // surges when the crater above is erupting.
            uErupt:    { value: 0.0 },
            uNoiseTex: { value: _noiseTex },
            uLavaTex:  { value: _lavaTileTex },
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec2 vPos;
            void main() {
                vUv = uv;
                vPos = position.xz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform float uRadius;
            uniform float uPulse;
            uniform float uErupt;

            uniform sampler2D uNoiseTex;
            uniform sampler2D uLavaTex;
            varying vec2 vUv;
            varying vec2 vPos;

            void main() {
                float dist = length(vPos);
                float norm = dist / uRadius;

                // Clean edge clip
                if (norm > 0.998) discard;

                // ---- Radial intensity: white-hot at center, cold at edges.
                // pow 2.4 (was 1.5): heat hugs the magma conduit under the
                // volcano instead of washing the whole underside — the
                // full-disc glow read cartoon-bright from the connect view.
                float radial = 1.0 - smoothstep(0.0, uRadius * 0.85, dist);
                radial = pow(radial, 2.4);

                // Secondary ridge ring at 55-75% radius (mid-ocean ridges)
                float ridgeRing = smoothstep(0.50, 0.62, norm) * (1.0 - smoothstep(0.72, 0.88, norm));
                float heatMask = max(radial, ridgeRing * 0.30);

                // ---- Radial dike veins: bright filaments TRACING OUTWARD
                // from the central volcano, like spokes of a magma plumbing
                // system. Ridged noise in (angle, radius) space keeps them
                // elongated along the radial direction; they fade with
                // distance and flicker gently as the texture drifts.
                float ang = atan(vPos.y, vPos.x);
                float veinNoise = texture2D(uNoiseTex, vec2(ang * 1.9099, norm * 0.55 - uTime * 0.004)).r;
                float radialVein = pow(1.0 - abs(veinNoise - 0.5) * 2.0, 6.0);
                radialVein *= (1.0 - smoothstep(0.15, 0.9, norm)) * smoothstep(0.02, 0.1, norm);
                heatMask = max(heatMask, radialVein * 0.85);

                // ---- Two-texture UV distortion (TheGameMaker technique) ----
                // Sample noise texture for UV warping
                vec4 noiseA = texture2D(uNoiseTex, vUv * 3.0 + uTime * 0.005);

                // First distorted UV — slow drift
                vec2 T1 = vUv * 2.0 + vec2(1.5, -1.5) * uTime * 0.015;
                T1 += noiseA.xy * 0.8;
                float p = texture2D(uNoiseTex, T1).r;

                // Second distorted UV — counter-drift for turbulence
                vec2 T2 = vUv * 2.0 + vec2(-0.5, 2.0) * uTime * 0.01;
                T2 -= noiseA.yz * 0.3;
                vec4 lava = texture2D(uLavaTex, T2);

                // Combine: texture interaction creates flowing magma cells
                float heat = lava.r * p * 2.0 * heatMask;

                // ---- Dike veins: ridged noise -> thin bright filaments,
                // the magma plumbing that feeds the crater. Faintly present
                // at rest; surges hard while the volcano above erupts so
                // the underside visibly participates in the event.
                float vein = 1.0 - smoothstep(0.0, 0.18, abs(p - 0.5));
                vein *= vein;
                heat += vein * (0.28 + uErupt * 1.5) * (0.35 + heatMask);

                // ---- Pulse: multiply by terrain pulse uniform ----
                float pulseMul = 0.6 + uPulse * 1.2;
                heat *= pulseMul;

                // Slow organic breathing (barely perceptible)
                heat *= 0.92 + sin(uTime * 0.3 + dist * 0.15) * 0.08;

                // ---- Color ramp: black → dark red → orange → white-hot ----
                vec3 col = vec3(0.0);
                // Dark red / maroon base
                col += vec3(0.4, 0.05, 0.02) * smoothstep(0.05, 0.25, heat);
                // Orange
                col += vec3(0.6, 0.45, 0.08) * smoothstep(0.25, 0.55, heat);
                // Yellow-orange
                col += vec3(0.3, 0.35, 0.0) * smoothstep(0.55, 0.75, heat);
                // White-hot core
                col += vec3(0.2, 0.45, 0.65) * smoothstep(0.80, 1.0, heat);
                col *= heat;

                // 1.6 (was 2.8): only the white-hot conduit core should
                // clear the bloom threshold — the old value floodlit the
                // entire underside into an unrealistic lava lamp.
                col *= 1.6;

                // Alpha: fully opaque at hot spots, transparent at cold edges
                float alpha = smoothstep(0.0, 0.08, heat);

                gl_FragColor = vec4(col, max(alpha, 0.85));
            }
        `,
        side: THREE.FrontSide,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
    });
    const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
    bottomMesh.position.y = FLOOR_Y + 0.35;
    bottomMesh.renderOrder = 2;
    islandGroup.add(bottomMesh);
    window._lavaBottom = bottomMat;

    // Gap sealer — thin, matches seabed color
    const gapH = 0.27;
    const gapGeo = new THREE.CylinderGeometry(OCEAN_RADIUS - 0.1, OCEAN_RADIUS - 0.1, gapH, 64, 1, true); // open — no caps to z-fight with lava
    const gapMat = new THREE.MeshBasicMaterial({
        color: 0x1a1510, // lighter — blends with seabed shelf
        side: THREE.DoubleSide,
        depthWrite: true,
    });
    const gapMesh = new THREE.Mesh(gapGeo, gapMat);
    gapMesh.position.y = FLOOR_Y + 0.35 + gapH / 2; // sits on top of lava disc
    gapMesh.renderOrder = 1;
    // Hidden: this flat-brown ring sealed a gap under the OLD dish GLB.
    // The rebuilt lathe dish closes that space with real glass, and the
    // ring's top edge poked above the seabed shelf — one of the ugly
    // stacked "seams" visible through the wall at the bottom edge.
    gapMesh.visible = false;
    islandGroup.add(gapMesh);

    // (Glass bottom disc removed — now part of petri_dish.glb model)

    // --- Edge water column: thin ring at glass/ocean interface, darker at bottom ---
    // Spans y -2.0..0.8: the rebuilt lathe dish is SOLID glass below
    // y ~ -2.07 at this radius (inner floor corner), and the old
    // -2.35 bottom left the column's last 0.3u rendering inside the
    // glass wall thickness in below/edge-on framings.
    const edgeWcH = 2.8;
    const edgeWcGeo = new THREE.CylinderGeometry(OCEAN_RADIUS, OCEAN_RADIUS, edgeWcH, 64, 8, true);
    // PHYSICAL water-body wall, fully STATIC by design (zero time input —
    // it cannot flicker, ever; owner requirement after the animated wisp
    // versions kept shimmering). Models what a real cross-section of deep
    // water shows through an aquarium wall:
    //  - Beer-Lambert absorption: red dies first, then green — color runs
    //    sunlit-turquoise at the surface skim to deep blue-black with depth.
    //  - Downwelling light decays exponentially with depth.
    //  - Path-length opacity: a horizontal sight-line crosses ~60 units of
    //    water (opaque); only the top half-metre stays translucent.
    //  - Sun-side response matches the island terminator.
    // Shared deep-water brightness dial: the debug panel writes this and
    // both the wall scatter floor and the seabed absorption floor scale
    // by it, so the owner can dial the final basin brightness live.
    window.__deepLightU = window.__deepLightU || { value: 0.0 };
    const edgeWcMat = new THREE.ShaderMaterial({
        uniforms: {
            uSunXZ:   { value: new THREE.Vector2(1, 0) },
            uSurfY:   { value: OCEAN_LEVEL + 0.05 },
            uDeepLight: window.__deepLightU,
        },
        vertexShader: `
            varying vec3 vLocal;
            varying vec3 vWorld;
            void main() {
                vLocal = position;
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorld = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `,
        fragmentShader: `
            uniform vec2 uSunXZ;
            uniform float uSurfY;
            uniform float uDeepLight;
            varying vec3 vLocal;
            varying vec3 vWorld;
            void main() {
                // Depth below the water surface (world units).
                float d = max(uSurfY - vWorld.y, 0.0);

                // Downwelling light: I(d) = I0 * exp(-k d). k ~ 1.0/u at
                // this scene scale gives a bright first half-unit and a
                // lightless floor — the "real depth" read.
                float light = exp(-d * 1.05);

                // Spectral absorption — palette matched to the SURFACE
                // ocean (deep navy-teal, 0x061e2e family). The first pass
                // ran too saturated-BLUE against the grey-navy top and the
                // wall read as tinted plastic instead of the same water.
                vec3 absorb = vec3(3.0, 1.4, 0.8);
                // Base desaturated a step (0.20,0.36,0.42 ran electric):
                // real coastal water is a grayer teal.
                vec3 bodyCol = vec3(0.16, 0.30, 0.36) * exp(-absorb * (d + 0.25));

                // Sun-side: the lit hemisphere carries more in-scattered
                // light, matching the terrain terminator. Night floor
                // dropped hard (0.5 -> 0.25) so the bright shallow band
                // reads DAY vs NIGHT like everything else on the dish.
                float facing = dot(normalize(vLocal.xz), normalize(uSunXZ)) * 0.5 + 0.5;
                bodyCol *= mix(0.25, 1.15, facing);

                // Subsurface glow just under the waterline, sun side only
                // — squared so it dies completely on the night half.
                // Narrower band, dimmer, and broken up by a static
                // positional swell pattern: the old uniform ribbon read
                // as a painted stripe, real backlit swash varies along
                // the shore.
                float swell = 0.72 + 0.28 * sin(atan(vLocal.z, vLocal.x) * 17.0 + sin(atan(vLocal.z, vLocal.x) * 5.0) * 2.0);
                // Dimmer + cubed facing (was squared): the waterline glow was
                // still too bright where it wrapped toward the night rim.
                // Cubing keeps the sun-centre band (facing~1) essentially
                // unchanged while collapsing it fast past the terminator.
                bodyCol += vec3(0.013, 0.038, 0.041) * exp(-d * 3.6) * facing * facing * facing * swell;

                // Scattered ambient so depth never goes darker than the
                // space background (raised from a whisper (0.003,0.008,
                // 0.015) that lost to the backdrop). uDeepLight is the
                // owner-facing dial.
                bodyCol += vec3(0.014, 0.028, 0.042) * uDeepLight;

                // Opacity from the actual optical path: a HORIZONTAL
                // sight-line crosses tens of units of water and must go
                // opaque; a steep downward view exits through the nearby
                // seabed and stays clearer (bathymetry ghosts through).
                vec3 V = normalize(vWorld - cameraPosition);
                float horiz = 1.0 - clamp(abs(V.y), 0.0, 1.0);
                // Effective optical path through the column: a horizontal
                // ray at depth d crosses many units of water before it
                // reaches the island base, so path scales steeply with
                // both depth and horizontality. THE inward-depth cue:
                // near the surface the water stays readable, sight-lines
                // aimed at the island base go near-black.
                float path = d * (1.0 + 5.5 * horiz * horiz) + 0.08;
                float alpha = 1.0 - exp(-path);
                alpha = clamp(alpha, 0.10, mix(0.74, 0.93, horiz));
                // The color absorbs along the path too (not just the
                // alpha) — deep inward views lose red then green until
                // only blue-black remains.
                bodyCol *= exp(-vec3(1.4, 0.62, 0.30) * max(path - 0.4, 0.0) * 0.55);

                // Below the shelf line (~y -0.6) the seabed face sits
                // DIRECTLY behind the glass, so the water path to solid
                // ground is short — the wall must go CLEAR there and let
                // the rock detail show (the payoff of a cutaway aquarium
                // view). The old version instead slammed this zone to a
                // near-opaque black band, which read as a pitch-black
                // void at the bottom of the edge view.
                float belowBed = smoothstep(-0.35, -1.1, vWorld.y);
                alpha *= mix(1.0, 0.30, belowBed);
                // Thin sediment contact seam at the very floor junction
                // only — a grounded line, not a band.
                float seam = smoothstep(-1.80, -2.0, vWorld.y);
                bodyCol = mix(bodyCol, vec3(0.010, 0.016, 0.020), seam * 0.8);
                alpha = max(alpha, seam * 0.55);

                gl_FragColor = vec4(bodyCol * (0.45 + 0.55 * light), alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
    });
    window._edgeColumn = edgeWcMat;
    const edgeWcMesh = new THREE.Mesh(edgeWcGeo, edgeWcMat);
    edgeWcMesh.position.y = -2.0 + edgeWcH / 2; // bottom rests at -2.0, above the glass floor corner
    edgeWcMesh.renderOrder = 4;
    islandGroup.add(edgeWcMesh);

    // --- Water depth rings disabled at user request ---
    // 12 nested vertical cylinders near the dish rim were intended as a
    // depth-illusion effect (water column getting darker with depth),
    // but their bottoms protruded below the dish's curved bottom and
    // read as visible "shadow rings clipping through" the dish from
    // certain angles. Restored block kept as the previous git commit.

    // --- Ocean surface particles: tiny dots across the entire ocean + shoreline concentration ---
    // Sit just below the water surface, visible through the Water addon
    // Denser near the shoreline and glass edge, sparse across the open ocean
    const OCEAN_PARTICLES = 3000;
    const opPos = new Float32Array(OCEAN_PARTICLES * 3);
    const opPhase = new Float32Array(OCEAN_PARTICLES);
    const opSpeed = new Float32Array(OCEAN_PARTICLES);

    for (let i = 0; i < OCEAN_PARTICLES; i++) {
        let x, z, dist;
        // 40% near shore (radius 7-10), 20% near glass edge, 40% scattered across ocean
        const roll = Math.random();
        if (roll < 0.4) {
            // Shore cluster
            const angle = Math.random() * Math.PI * 2;
            const r = 7.5 + Math.random() * 3.0;
            x = Math.cos(angle) * r;
            z = Math.sin(angle) * r;
        } else if (roll < 0.6) {
            // Glass edge
            const angle = Math.random() * Math.PI * 2;
            const r = OCEAN_RADIUS - 0.5 - Math.random() * 2.0;
            x = Math.cos(angle) * r;
            z = Math.sin(angle) * r;
        } else {
            // Scattered across ocean
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * (OCEAN_RADIUS - 2);
            x = Math.cos(angle) * r;
            z = Math.sin(angle) * r;
            // Skip if too close to island center (inside mountain)
            dist = Math.sqrt(x * x + z * z);
            if (dist < 6) {
                x *= 6 / dist;
                z *= 6 / dist;
            }
        }

        opPos[i * 3]     = x;
        opPos[i * 3 + 1] = OCEAN_LEVEL - 0.02 - Math.random() * 0.08; // just below surface
        opPos[i * 3 + 2] = z;
        opPhase[i] = Math.random() * Math.PI * 2;
        opSpeed[i] = 0.2 + Math.random() * 0.4;
    }

    const opGeo = new THREE.BufferGeometry();
    opGeo.setAttribute('position', new THREE.BufferAttribute(opPos, 3));
    const opMat = new THREE.PointsMaterial({
        color: 0x90a8b8,
        size: 0.015,         // very tiny
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        sizeAttenuation: true,
    });
    const opMesh = new THREE.Points(opGeo, opMat);
    opMesh.renderOrder = 2;
    // Hidden for launch: with 40% of the 3000 dots clustered at the
    // shoreline they accumulated into the same glowing patch as the
    // foam swarm. Re-enable via mesh.visible if wanted later.
    opMesh.visible = false;
    islandGroup.add(opMesh);
    window._oceanParticles = { geo: opGeo, positions: opPos, phases: opPhase, speeds: opSpeed, count: OCEAN_PARTICLES, mat: opMat, mesh: opMesh };
}

// Animate ocean waves, shore foam, rim waves
const oceanClock = new THREE.Clock();
let _lastCausticT = 0; // for incremental caustic-drift integration
export function updateOcean() {
    const { water, SUN_DIR } = state;
    const t = oceanClock.getElapsedTime();
    // WRAPPED time for any shader that feeds t into a fract(sin(dot))
    // hash. fp32 keeps only ~7 significant digits: once t (times its
    // speed factor, times the hash's 43758.5453 amplifier) grows past
    // ~1e7, fract() returns quantization garbage that changes every
    // frame — the noise degenerates into per-pixel FLICKERING STATIC.
    // That is why the edge water column and underside shimmered worse
    // and worse the longer a tab stayed open, while fresh reloads
    // looked calm for the first minutes. 600 s wrap = one impercept-
    // ible pattern re-seed every 10 minutes instead.
    const tw = t % 600.0;

    // --- Water addon time update (wave animation is handled internally) ---
    // Clear-weather speed 0.13 (from the original 0.35): the surface
    // chop was scrolling visibly faster than anything else in the
    // scene moves. Storm adds ~3x through a quadratic ramp (matching
    // the water-color ramp in animate.js) so mid-slider stays calm.
    const _ws = (window._weather && window._weather.smoothed) || 0;
    const _waveSpeed = 0.13 + _ws * _ws * 0.30;
    water.material.uniforms['time'].value += _waveSpeed / 60.0;

    // Sync the wave field to the dish spin. The shader samples its
    // normal maps by WORLD position and counter-rotates by this angle
    // to get dish-local coordinates — the uniform existed for exactly
    // this but was never written, so the wave pattern sat still in
    // world space while the dish turned under it and the water read
    // as sliding across the disc instead of turning with it.
    if (state.islandGroup) {
        water.material.uniforms['dishRotation'].value = state.islandGroup.rotation.y;
    }
    // Water-only sun elevation: the real sun rides the horizon, so the
    // water reflects it at a grazing angle that lands the glint on the
    // far rim where nobody sees it. Lifting the WATER'S private copy of
    // the sun to 0.60 elevation drags the mirror path back across the
    // visible sea — the trail every above-water framing should show.
    // (This is exactly the "second sun only the water can see" trick.)
    const wsd = water.material.uniforms['sunDirection'].value;
    const glintElev = (typeof window.__glintElev === 'number') ? window.__glintElev : 0.60;
    wsd.set(SUN_DIR.x, glintElev, SUN_DIR.z).normalize();

    // Update underwater light rays. They get the WATER's lifted sun,
    // not the raw horizon-level SUN_DIR: the beam strength gate is
    // smoothstep(-0.3, 0.8, sunElev), and at the real elevation (~0)
    // the shafts ran at ~1/8 intensity — every beam preset looked like
    // nothing was happening.
    if (window._lightRays) {
        window._lightRays.uniforms.uTime.value = tw;
        window._lightRays.uniforms.uSunDir.value.set(SUN_DIR.x, glintElev, SUN_DIR.z);
    }
    if (window._caustics && window._causticsMesh && window._causticsMesh.visible) {
        const cu = window._caustics.uniforms;
        const cdt = Math.min(Math.max(t - (_lastCausticT || t), 0), 0.1);
        _lastCausticT = t;
        cu.uTime.value = tw;
        // Island-LOCAL sun (not world SUN_DIR): the caustic disc lives
        // inside the spinning islandGroup, so a world-space direction
        // made its bright hemisphere migrate around the dish, drifting
        // fully out of phase with the terrain terminator in ~3 minutes.
        if (window._terrain && window._terrain.sunUniform) {
            cu.uSunDir.value.copy(window._terrain.sunUniform.value);
        }
        // Integrate pattern drift INCREMENTALLY (dir * dt). The old
        // dir * absolute-time form, with a rotating local sun, made the
        // accumulated offset spiral — an accelerating rotating light
        // sweep around the dish that built up into flicker.
        const sd = cu.uSunDir.value;
        const len = Math.hypot(sd.x, sd.z) || 1;
        const sx = sd.x / len, sz = sd.z / len;
        cu.uDrift1.value.x += sx * 0.034 * cdt;
        cu.uDrift1.value.y += sz * 0.034 * cdt;
        cu.uDrift2.value.x -= sz * 0.023 * cdt;
        cu.uDrift2.value.y -= sx * 0.023 * cdt;
    }
    // Edge water column: island-local sun azimuth only (the wall shader
    // is deliberately time-free — it can never flicker).
    if (window._edgeColumn) {
        if (window._terrain && window._terrain.sunUniform) {
            const s = window._terrain.sunUniform.value;
            window._edgeColumn.uniforms.uSunXZ.value.set(s.x, s.z);
        }
    }
    // Ocean surface particles — gentle drift on water plane.
    // Skipped while launch-hidden: no reason to run 3000 sin/cos per
    // frame into an invisible buffer.
    if (window._oceanParticles && window._oceanParticles.mesh && window._oceanParticles.mesh.visible) {
        const op = window._oceanParticles;
        const pp = op.positions;
        for (let i = 0; i < op.count; i++) {
            // Gentle XZ drift (wind-like)
            pp[i * 3]     += Math.sin(t * op.speeds[i] + op.phases[i]) * 0.002;
            pp[i * 3 + 2] += Math.cos(t * op.speeds[i] * 0.7 + op.phases[i]) * 0.002;
            // Subtle vertical bob — stays just below surface
            pp[i * 3 + 1] = OCEAN_LEVEL - 0.02 + Math.sin(t * op.speeds[i] * 1.5 + op.phases[i]) * 0.01;
        }
        op.geo.attributes.position.needsUpdate = true;
    }

    // Reflection-only foam animation — three types.
    // Skipped while launch-hidden (see terrain.js fPts.visible).
    if (window._foam && window._foam.types && window._foam.mesh && window._foam.mesh.visible) {
        const f = window._foam;
        const pos = f.geo.attributes.position.array;
        for (let i = 0; i < f.count; i++) {
            const type = f.types[i];
            const spd = f.speeds[i];
            const ph = f.phases[i];

            if (type === 0) {
                // Shore: tight XZ jitter
                pos[i*3]   += Math.sin(t * spd * 3 + ph) * 0.002;
                pos[i*3+2] += Math.cos(t * spd * 2.5 + ph) * 0.002;
                pos[i*3+1] = OCEAN_LEVEL + 0.12 + Math.sin(t * spd + ph) * 0.02;
            } else if (type === 1) {
                // Rim: same jitter as shore — tight XZ + vertical bob
                pos[i*3]   += Math.sin(t * spd * 3 + ph) * 0.002;
                pos[i*3+2] += Math.cos(t * spd * 2.5 + ph) * 0.002;
                pos[i*3+1] = OCEAN_LEVEL + 0.12 + Math.sin(t * spd + ph) * 0.02;
            }
        }
        f.geo.attributes.position.needsUpdate = true;
    }

    // Peak foam shimmer — tiny sparkles on seabed high points
    if (window._peakFoam) {
        const pf = window._peakFoam;
        const pp = pf.positions;
        for (let i = 0; i < pf.count; i++) {
            pp[i * 3 + 1] += Math.sin(t * 1.5 + pf.phases[i]) * 0.001;
        }
        pf.geo.attributes.position.needsUpdate = true;
    }

    // Rim foam animation — subtle lapping at glass edge
    if (window._rimFoam) {
        const rf = window._rimFoam;
        const rp = rf.positions;
        for (let i = 0; i < rf.count; i++) {
            const angle = rf.angles[i];
            const phase = rf.phases[i];
            const speed = rf.speeds[i];
            const radialWave = Math.sin(t * speed + phase) * 0.08;
            const r = OCEAN_RADIUS - 0.2 + radialWave;
            rp[i * 3]     = Math.cos(angle) * r;
            rp[i * 3 + 2] = Math.sin(angle) * r;
            rp[i * 3 + 1] = OCEAN_LEVEL + 0.01 + Math.sin(t * speed * 1.2 + phase) * 0.03;
        }
        rf.geo.attributes.position.needsUpdate = true;
    }

    // Rim bubbles — rise along dish edge.
    // Skipped while launch-hidden (see terrain.js bubMesh.visible).
    if (window._rimBubbles && window._rimBubbles.mesh && window._rimBubbles.mesh.visible) {
        const rb = window._rimBubbles;
        const bp = rb.positions;
        for (let i = 0; i < rb.count; i++) {
            bp[i * 3 + 1] += rb.speeds[i] * 0.016;
            bp[i * 3] += Math.sin(t * 1.5 + rb.phases[i]) * 0.002;
            bp[i * 3 + 2] += Math.cos(t * 1.2 + rb.phases[i]) * 0.002;
            if (bp[i * 3 + 1] > OCEAN_LEVEL - 0.15) {
                const srcIdx = Math.floor(i / rb.perVent);
                const src = rb.sources[srcIdx];
                bp[i * 3]     = src.x * 0.95 + (Math.random() - 0.5) * 0.3;
                bp[i * 3 + 1] = src.y;
                bp[i * 3 + 2] = src.z * 0.95 + (Math.random() - 0.5) * 0.3;
            }
        }
        rb.geo.attributes.position.needsUpdate = true;
    }

    // Lava bottom shader time + pulse sync
    if (window._lavaBottom) {
        window._lavaBottom.uniforms.uTime.value = tw;
        if (state.terrainPulseUniform) {
            window._lavaBottom.uniforms.uPulse.value = state.terrainPulseUniform.value;
        }
        // Eruption drive: volcano.js publishes its glow multiplier
        // (1 = quiet, ~2.8 = peak burst) — remap to 0..1 for the veins.
        window._lavaBottom.uniforms.uErupt.value =
            Math.max(0, Math.min(1, ((window._volcanoGlow || 1) - 1) / 1.6));
    }
    // Underside caustic hint animation
    if (window._undersideMat) {
        window._undersideMat.uniforms.uTime.value = tw;
    }
}
