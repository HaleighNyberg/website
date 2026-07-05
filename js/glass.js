import * as THREE from 'three';
import { state, OCEAN_RADIUS, WALL_THICK } from './config.js?v=real17';

export function initGlass() {
    const { islandGroup } = state;

    // Unified glass material — museum-quality borosilicate look.
    // Real physical glass: transmission ~1.0, low roughness, ior 1.5,
    // clearcoat for the wet-polished surface micro-reflection, and a
    // tiny cool attenuation tint for thickness-based color absorption.
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        // Hard ceiling ~0.03: the transmission pass samples its screen
        // buffer at a mip level driven by roughness, and the mip chain
        // box-blurs the HDR sun disc into NESTED SQUARES on the rim
        // (live-bisected: roughness 0 = clean crescent glint, 0.06 =
        // squares). Below ~0.04 the mip LOD stays at the sharp base
        // level. The old 0.06 rationale (segmented highlight chain vs
        // frost band) is superseded by this stronger constraint.
        roughness: 0.025,
        metalness: 0.0,
        transparent: true,
        opacity: 1.0,                  // transmission handles see-through; opacity must be 1
        transmission: 1.0,
        // 0.35 (was 1.0): thickness drives the screen-space refraction
        // displacement, and at 1.0 the wall duplicated its backdrop
        // shifted OUTWARD — the seabed appeared to continue past where
        // the glass should stop it. 0.35 matches the real wall gauge
        // (0.55u shell seen at typical angles) and pins the refracted
        // image to the truth.
        thickness: 0.35,
        ior: 1.5,
        // Crisp wet-polish layer: this is most of what makes real glass
        // read as glass — a sharp bright top-surface reflection riding
        // over the clear transmission. 0.25/0.18 was so soft the shell
        // read as acrylic; 0.85/0.06 blew the sun-side rim into a hot
        // blob. 0.35/0.14 gives a defined sun-side sheen arc.
        // 0.45/0.11 (was 0.35/0.14): a wetter, tighter polish layer —
        // the sheen arc reads more like museum glass under gallery light.
        clearcoat: 0.45,
        clearcoatRoughness: 0.11,
        // 0: the base-layer direct-light specular painted a pair of
        // camera-following hotspots on the rim (halving it to 0.22
        // earlier only dimmed them). The wet sheen comes from the env
        // map + clearcoat; the sun's sparkle lives on the water.
        specularIntensity: 0.0,
        specularColor: new THREE.Color(0xffffff),
        // Soda-lime green-cyan, not near-white: the classic "that's real
        // glass" tell is the edge tint — light that travels a LONG path
        // through the material (rim, lip, edge-on walls) goes visibly
        // green-cyan while short face-on paths stay clear. Iron content
        // does this in every real petri dish and window pane.
        attenuationColor: new THREE.Color(0.62, 0.86, 0.80),
        // 3.0 is the physical value for display glass: tinted depth at
        // grazing angles, clear face-on. It was crushed to 0.4 for a
        // while as a bloom band-aid (bright objects behind the dish
        // bloomed into white spots) — that thresholding artifact came
        // from bloom running on an un-tonemapped display-space buffer.
        // Bloom now thresholds in scene-linear HDR, so the band-aid is
        // reverted. If a hot spot ever reappears through the far wall,
        // fix the bloom threshold, not this.
        // 1.5 (from 2.2): compensates the thinner transmission thickness
        // above so the soda-lime edge tint keeps the same visual depth.
        attenuationDistance: 1.5,
        depthWrite: false,
        // FrontSide: the lathe dish is a watertight closed solid with
        // true outward normals on every face (outer wall out, inner wall
        // toward the water). DoubleSide existed for the old single-skin
        // GLB, and its per-face normal guessing was why the shell never
        // felt aware of its own inner vs outer surface.
        side: THREE.FrontSide,
        // 0.95: with the live cube capture feeding it, the environment
        // reflection is the glass's second realism pillar (nebula, sun,
        // orbit lines sliding across the shell as the camera moves).
        // 0.8 read matte; 1.15 over-brightened the sun-side wall.
        envMapIntensity: 0.95,
        // Skip fog. Transmission materials sample a refracted view of
        // the backdrop; fog applied to that lookup paints the dish a
        // chalky blue-grey under storm weather.
        fog: false,
    });

    // Underwater reflection kill: light reaching SUBMERGED glass has
    // already been filtered through metres of water, so the wall below
    // the waterline must not sparkle with bright sky reflections — that
    // sparkle was the "weird lights" at the seabed-glass bottom seam.
    // Fade env + clearcoat specular to a whisper below y ~ 0.65 (the
    // water surface); the above-water lip keeps its full sheen.
    glassMat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', '#include <common>\nvarying float vGlassWY;')
            .replace('#include <worldpos_vertex>',
                '#include <worldpos_vertex>\nvGlassWY = (modelMatrix * vec4(transformed, 1.0)).y;');
        shader.fragmentShader = shader.fragmentShader
            .replace('#include <common>', '#include <common>\nvarying float vGlassWY;')
            .replace('#include <lights_fragment_end>', [
                '#include <lights_fragment_end>',
                'float glassAbove = smoothstep(0.05, 0.72, vGlassWY);',
                'reflectedLight.indirectSpecular *= mix(0.05, 1.0, glassAbove);',
                'reflectedLight.directSpecular *= mix(0.10, 1.0, glassAbove);',
                '#ifdef USE_CLEARCOAT',
                'clearcoatSpecularIndirect *= mix(0.05, 1.0, glassAbove);',
                'clearcoatSpecularDirect *= mix(0.10, 1.0, glassAbove);',
                '#endif',
            ].join('\n'));
    };

    // Optional dispersion (chromatic refraction) — three.js r170 supports it.
    // Guarded so older builds silently ignore it.
    if ('dispersion' in glassMat) {
        // Chromatic edge fringing where light crosses thick glass —
        // subtle but a strong "real glass" cue at the rim. 0.18 (was
        // 0.12): the wider fringe also SCALES the dish up — big optics
        // split light more visibly than trinket glass.
        glassMat.dispersion = 0.18;
    }
    // Whisper of thin-film iridescence: precision optical glass throws
    // faint oil-sheen colors at grazing angles. Kept far below "soap
    // bubble" — it should register subliminally, not read as an effect.
    if ('iridescence' in glassMat) {
        glassMat.iridescence = 0.12;
        glassMat.iridescenceIOR = 1.3;
        glassMat.iridescenceThicknessRange = [120, 400];
    }

    // Baked studio PMREM as the first-frame fallback; replaced by the
    // live cube capture below as soon as it renders.
    if (state._envTexture) {
        glassMat.envMap = state._envTexture;
        glassMat.needsUpdate = true;
    }

    state.glassMat = glassMat;

    // --- Live environment capture ---
    // The dish used to reflect a baked 32x16 gray gradient with two fake
    // highlights. This CubeCamera sits at the dome center and captures
    // the real surroundings (nebula, sun, moon, gateway, orbit lines) so
    // the reflections track what is actually in the sky. Refreshed at
    // ~12 Hz from animate.js via updateGlassEnv() with the island group
    // hidden: the glass must not reflect its own interior (feedback),
    // and hiding the group also keeps the Water mirror pass from
    // re-rendering once per cube face.
    // 1024 (was 512, was 256): at the current near-mirror roughness
    // (0.025) the rim reflects mip 0 texels directly, and 512 still put
    // visibly SQUARE texels across the sun's hotspot on the top and
    // bottom lips. Refresh stays amortized at one face per frame so the
    // cost is fill only.
    const cubeRT = new THREE.WebGLCubeRenderTarget(1024, {
        type: THREE.HalfFloatType,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
    });
    const cubeCam = new THREE.CubeCamera(0.5, 2000, cubeRT);
    // The moon lives on layer 4 (kept out of the water mirror); the
    // capture must opt in or the dish's reflections never include it.
    cubeCam.layers.enable(4);
    cubeCam.position.set(0, 4, 0);
    state.scene.add(cubeCam);
    state._glassCubeCam = cubeCam;
    state._glassCubeRT = cubeRT;

    // --- Procedural petri dish (replaces petri_dish.glb) ---
    // The GLB was a 1026-vertex single-skin shell: too coarse for a
    // 64-unit dish (the lip highlight resolved its facets as segments),
    // no distinct inner/outer surface (DoubleSide transmission guessed
    // normals per face), and its floor at y=-2.55 interpenetrated the
    // seabed plane at y=-2.4 (visible clipping seam at the bottom edge).
    // This lathe is a WATERTIGHT closed cross-section — outer wall,
    // rounded lip, inner wall, inner floor, outer bottom — so every
    // face has a true outward normal and the material can run FrontSide
    // like real solid glass. Footprint matches the GLB (r=32.1, lip at
    // y=1.2) but the floor now wraps UNDER the seabed (-3.35) so
    // nothing intersects.
    const R_OUT = 32.1;         // outer wall radius (GLB match)
    const WALL_T = 0.55;        // wall thickness — massive-scale dish
    const R_IN = R_OUT - WALL_T;
    const LIP_Y = 1.2;          // rim apex (GLB match)
    const IN_FLOOR_Y = -2.8;    // inner glass floor: below seabed's -2.4
    const OUT_FLOOR_Y = IN_FLOOR_Y - WALL_T;
    const pts = [];
    // Outer bottom: center -> rim, gentle sag for a blown-glass base.
    pts.push(new THREE.Vector2(0.001, OUT_FLOOR_Y));
    pts.push(new THREE.Vector2(14, OUT_FLOOR_Y + 0.02));
    pts.push(new THREE.Vector2(24, OUT_FLOOR_Y + 0.10));
    pts.push(new THREE.Vector2(29.5, OUT_FLOOR_Y + 0.32));
    // Rounded outer bottom corner up into the outer wall.
    pts.push(new THREE.Vector2(31.4, OUT_FLOOR_Y + 0.62));
    pts.push(new THREE.Vector2(R_OUT, OUT_FLOOR_Y + 1.35));
    // Outer wall.
    pts.push(new THREE.Vector2(R_OUT, LIP_Y - 0.55));
    // Rounded lip: outer shoulder -> apex -> inner shoulder.
    pts.push(new THREE.Vector2(R_OUT - 0.04, LIP_Y - 0.18));
    pts.push(new THREE.Vector2(R_OUT - WALL_T / 2, LIP_Y));
    pts.push(new THREE.Vector2(R_IN + 0.04, LIP_Y - 0.18));
    // Inner wall.
    pts.push(new THREE.Vector2(R_IN, LIP_Y - 0.55));
    pts.push(new THREE.Vector2(R_IN, IN_FLOOR_Y + 0.75));
    // Rounded inner floor corner and floor back to center.
    pts.push(new THREE.Vector2(R_IN - 1.3, IN_FLOOR_Y + 0.18));
    pts.push(new THREE.Vector2(28.5, IN_FLOOR_Y + 0.06));
    pts.push(new THREE.Vector2(14, IN_FLOOR_Y));
    pts.push(new THREE.Vector2(0.001, IN_FLOOR_Y));
    const dishGeo = new THREE.LatheGeometry(pts, 192);
    dishGeo.computeVertexNormals();
    const dishMesh = new THREE.Mesh(dishGeo, glassMat);
    dishMesh.renderOrder = 10;
    // Glass lives exclusively on layer 2 so we can exclude specific
    // lights (the moonLight DirectionalLight) from producing a specular
    // glint on it. Layer 1 is reserved by Water.js's mirrorCamera for
    // reflection-only objects — glass there would appear inside the
    // water reflection as a nested refraction mess at the rim.
    dishMesh.layers.set(2);
    // Feed the dish walls into the GTAO G-buffer so the glass-meets-
    // water contact ring reads grounded.
    dishMesh.userData.aoInclude = true;
    islandGroup.add(dishMesh);
}

let _envFace = 0;

// Refresh the live glass environment capture — AMORTIZED: exactly ONE
// cube face per frame, round-robin. The earlier whole-cube refresh
// (6 extra scene renders in one frame, every 2nd-5th frame) produced
// alternating heavy/light frame times — visible JUDDER on the bright
// dish-edge glint and the moving island texture. One face per frame is
// a constant small cost, so frame pacing stays flat, and the full cube
// still refreshes every 6 frames (~10 Hz at 60 fps) — faster than the
// old 12 Hz stepping AND smooth.
export function updateGlassEnv() {
    const cam = state._glassCubeCam;
    if (!cam || !state.renderer || !state.scene) return;

    const { islandGroup, glassMat, renderer, scene } = state;
    const rt = state._glassCubeRT;
    const prevVisible = islandGroup.visible;
    islandGroup.visible = false;

    // Child cameras inherit the CubeCamera's transform via the scene
    // graph — no manual positioning needed.
    const faceCam = cam.children[_envFace];
    const prevTarget = renderer.getRenderTarget();
    const prevXr = renderer.xr.enabled;
    renderer.xr.enabled = false;
    // Mipmaps only after the last face lands (mirrors CubeCamera.update).
    const gen = rt.texture.generateMipmaps;
    rt.texture.generateMipmaps = _envFace === 5 ? gen : false;
    renderer.setRenderTarget(rt, _envFace);
    renderer.render(scene, faceCam);
    rt.texture.generateMipmaps = gen;
    renderer.setRenderTarget(prevTarget);
    renderer.xr.enabled = prevXr;
    _envFace = (_envFace + 1) % 6;

    islandGroup.visible = prevVisible;

    // Swap the baked fallback for the live capture after the first render.
    if (glassMat && glassMat.envMap !== rt.texture) {
        glassMat.envMap = rt.texture;
        glassMat.needsUpdate = true;
    }
}
