// starShell.js — the destination system's stellar neighborhood as REAL 3D
// points.
//
// The stars used to live in the skybox shader and "resolved" at arrival
// via a uniform. Now they are actual objects on a deterministic shell
// around the system. At rest they read like the old sky — same cool-white
// tint, the same three-population brightness spread, gaussian cores —
// and between zones they carry a whisper of true parallax. During the
// load-in flight they are simply too far to see; as the camera brakes
// into the neighborhood they emerge with genuine parallax and we stop
// AMONG them. Nothing resolves, nothing completes at the stop — the
// arrival is physical.
//
// Layout is seeded, not Math.random(): the resting sky must be the same
// sky on every visit.

import * as THREE from 'three';
import { ACES_INVERSE_GLSL } from './shaderChunks.js';

// Deterministic PRNG (mulberry32) with a fixed seed.
function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const SEED = 481207;

// Three populations, matched to the old skybox layers: a dense dim far
// field (texture, not punctate), a mid field, and sparse bright feature
// stars nearest the system. size = on-screen pixels at REF_DIST.
// Pushed OUT and thinned (owner, 2026-07-12): the old 2.6-7k radii read
// as a small SPHERE of stars hugging the system on approach — a snow
// globe around the sun. Stars must feel far apart and far away.
const POPS = [
    { count:  900, rMin: 6200, rMax: 8300, size: 2.0, bMin: 0.10, bMax: 0.30 },
    { count:  380, rMin: 4800, rMax: 6200, size: 2.6, bMin: 0.22, bMax: 0.55 },
    { count:   90, rMin: 3600, rMax: 4800, size: 3.4, bMin: 0.45, bMax: 0.80 },
];

const VERT = /* glsl */`
    attribute float aSize;
    attribute float aBright;
    varying float vBright;
    varying float vFade;
    uniform float uPxr;
    void main() {
        vBright = aBright;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = length(mv.xyz);
        // Emergence with approach: invisible until the camera is near
        // enough (fully out before the 9000 far plane, so no star can
        // ever pop at the clip boundary), full inside the neighborhood.
        // The window sits just inside the pushed-out shell (rMax 8300):
        // the outermost stars carry a touch of distance dimming at rest.
        vFade = 1.0 - smoothstep(8100.0, 8850.0, dist);
        // Perspective point size: authored pixels at the reference
        // distance, growing as the camera closes.
        gl_PointSize = aSize * uPxr * (6000.0 / max(dist, 1.0));
        gl_Position = projectionMatrix * mv;
    }
`;

const FRAG = /* glsl */`
    precision highp float;
    varying float vBright;
    varying float vFade;
    uniform float uPulse;

    ${ACES_INVERSE_GLSL}

    void main() {
        // Gaussian core, same footprint philosophy as the old shader's
        // exp(-r2*150) stars: a 2-3px gradient that antialiases naturally.
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d) * 4.0;
        float core = exp(-r2 * 3.2) * (1.0 - smoothstep(0.7, 1.0, r2));
        float a = core * vBright * vFade * (1.0 + uPulse * 1.6);
        if (a < 0.004) discard;
        // Authored star color (display sRGB) through the shared inverse.
        vec3 col = displayToSceneLinear(vec3(0.78, 0.86, 1.00) * min(a, 0.85));
        gl_FragColor = vec4(col, 1.0);
    }
`;

/**
 * @param {THREE.Scene} scene
 * @param {number} pixelRatio — renderer pixel ratio (point sizes are in
 *   device pixels).
 * @returns {THREE.Points}
 */
export function initStarShell(scene, pixelRatio) {
    const rand = mulberry32(SEED);
    const total = POPS.reduce((n, p) => n + p.count, 0);
    const pos = new Float32Array(total * 3);
    const size = new Float32Array(total);
    const bright = new Float32Array(total);

    let i = 0;
    for (const p of POPS) {
        for (let n = 0; n < p.count; n++, i++) {
            // Uniform direction (Marsaglia), radius within the band.
            let x, y, s;
            do { x = rand() * 2 - 1; y = rand() * 2 - 1; s = x * x + y * y; } while (s >= 1 || s === 0);
            const f = 2 * Math.sqrt(1 - s);
            const r = p.rMin + rand() * (p.rMax - p.rMin);
            pos[i * 3 + 0] = x * f * r;
            pos[i * 3 + 1] = (1 - 2 * s) * r;
            pos[i * 3 + 2] = y * f * r;
            size[i] = p.size * (0.8 + rand() * 0.45);
            bright[i] = p.bMin + rand() * (p.bMax - p.bMin);
        }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aBright', new THREE.BufferAttribute(bright, 1));

    const mat = new THREE.ShaderMaterial({
        uniforms: {
            uPulse: { value: 0 },
            uPxr:   { value: pixelRatio || 1 },
        },
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
        toneMapped: false,
        fog: false,
    });

    const shell = new THREE.Points(geo, mat);
    shell.frustumCulled = false;
    // Between the nebula backdrop (-1000) and the flight medium (-998):
    // the medium's banks veil these stars as they sweep past.
    shell.renderOrder = -999;
    shell.name = 'starShell';
    // Visible both at rest (layer 0) and during the flight (layer 9,
    // alongside the skybox) — during cruise it is simply too far to see.
    shell.layers.enable(9);
    scene.add(shell);
    return shell;
}

// ---------------------------------------------------------------------
// DEEP FIELD — the genuinely infinite background as CRISP points.
//
// Baked stars in the equirect far map were rejected ("PSX-style blur"):
// the 4096×2048 texture is magnified ~6× on a 4K panel and bilinear
// filtering guarantees soft blobs. Stars are therefore GEOMETRY ONLY —
// fixed-pixel-size points on a view-locked sphere. The view translation
// is cancelled in the vertex shader (same trick as the spaceEnv sky), so
// the field shows zero parallax: physically correct for stars at
// effectively infinite distance, pin-sharp at any resolution, present
// during the whole flight AND at rest. The soft nebulosity stays in the
// baked map, where softness is what distance actually looks like.

// THREE drift layers (owner: "more layers between us and the deep field")
// — a continuous parallax ramp between the corridor's real stars and the
// deepest background. Each layer is view-locked geometry that carries
// k × the real (splice-corrected) camera motion: k encodes its effective
// distance, so nearer layers slide visibly faster at cruise. Brightness
// overshoots because the volumetric nebula in front veils the fields
// (physically right — stars seen through the medium).
// Two families of layers, crossfaded across the brake (uLayerFade):
// - resting layers (thinned; stars sparse and far apart) are held at
//   zero during the cruise and resolve in as the camera slows into the
//   neighborhood; they simply ARE the resting sky thereafter (default 1
//   on skip visits and outside the intro).
// - cruise layers carry MUCH larger drift fractions — distant stars
//   that visibly sweep by at warp (1.5-6°/s), layered by depth behind
//   the streaking route stars — and retire across the brake as the
//   resting fields take over (default 0 outside the intro: they exist
//   only under way). A few hundred extra points per layer: one cheap
//   draw call each, no measurable cost.
const DEEP_LAYERS = [
    { seed: 902411, k: 0.025, radius: 8500, order: -999.5, pops: [   // deepest (rest)
        { count: 1700, sMin: 1.2, sMax: 1.8, bMin: 0.10, bMax: 0.30 },
        { count:  400, sMin: 1.7, sMax: 2.4, bMin: 0.20, bMax: 0.50 },
        { count:  110, sMin: 2.3, sMax: 3.2, bMin: 0.42, bMax: 0.75 },
    ] },
    { seed: 611203, k: 0.07, radius: 8200, order: -999.45, pops: [   // mid (rest)
        { count:  420, sMin: 1.5, sMax: 2.4, bMin: 0.15, bMax: 0.45 },
        { count:  120, sMin: 2.0, sMax: 3.0, bMin: 0.35, bMax: 0.65 },
    ] },
    { seed: 337719, k: 0.15, radius: 7900, order: -999.4, pops: [    // near-mid (rest)
        { count:  170, sMin: 2.0, sMax: 3.0, bMin: 0.25, bMax: 0.60 },
        { count:   55, sMin: 2.6, sMax: 3.6, bMin: 0.40, bMax: 0.72 },
    ] },
    { seed: 118831, k: 0.10, radius: 8500, order: -999.5, cruise: true, pops: [
        { count:  700, sMin: 1.2, sMax: 2.0, bMin: 0.10, bMax: 0.35 },
    ] },
    { seed: 745529, k: 0.22, radius: 8200, order: -999.45, cruise: true, pops: [
        { count:  450, sMin: 1.6, sMax: 2.6, bMin: 0.15, bMax: 0.45 },
    ] },
    { seed: 264018, k: 0.40, radius: 7900, order: -999.4, cruise: true, pops: [
        { count:  250, sMin: 2.0, sMax: 3.2, bMin: 0.20, bMax: 0.55 },
    ] },
];

const DEEP_VERT = /* glsl */`
    attribute float aSize;
    attribute float aBright;
    attribute float aTint;
    varying float vBright;
    varying float vTint;
    uniform float uPxr;
    uniform vec3 uEyeDrift;
    void main() {
        vBright = aBright;
        vTint = aTint;
        // The field is VERY far, not infinite: it carries a small
        // fraction of the real (splice-corrected) camera translation —
        // animate.js feeds uEyeDrift = corrected eye × K. Over the whole
        // cruise the background drifts a couple of degrees, so every
        // star in the sky moves when we move (owner: nothing may sit
        // dead-still at warp); at rest the zone moves are far too small
        // to read, and the seeded pattern stays the same sky.
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * vec4(position - uEyeDrift, 1.0);
        gl_Position = projectionMatrix * mv;
        // Fixed on-screen size — crispness is the whole point.
        gl_PointSize = aSize * uPxr;
    }
`;

const DEEP_FRAG = /* glsl */`
    precision highp float;
    varying float vBright;
    varying float vTint;
    uniform float uLayerFade;

    ${ACES_INVERSE_GLSL}

    void main() {
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d) * 4.0;
        float core = exp(-r2 * 3.2) * (1.0 - smoothstep(0.7, 1.0, r2));
        float a = core * vBright * uLayerFade;
        if (a < 0.004) discard;
        // Cool-white to warm-white spread, authored display sRGB, capped
        // under the bloom knee (same 0.85 budget as the shell stars) —
        // background stars never bloom.
        vec3 tint = mix(vec3(0.72, 0.82, 1.00), vec3(1.00, 0.90, 0.74), vTint);
        vec3 col = displayToSceneLinear(tint * min(a, 0.80));
        gl_FragColor = vec4(col, 1.0);
    }
`;

/**
 * @param {THREE.Scene} scene
 * @param {number} pixelRatio
 * @returns {Array<{points: THREE.Points, k: number}>} — animate.js feeds
 *   each layer's uEyeDrift with (corrected camera) × k every frame.
 */
export function initDeepField(scene, pixelRatio) {
    const layers = [];
    for (let li = 0; li < DEEP_LAYERS.length; li++) {
        const L = DEEP_LAYERS[li];
        const rand = mulberry32(L.seed);
        const total = L.pops.reduce((n, p) => n + p.count, 0);
        const pos = new Float32Array(total * 3);
        const size = new Float32Array(total);
        const bright = new Float32Array(total);
        const tint = new Float32Array(total);

        let i = 0;
        for (const p of L.pops) {
            for (let n = 0; n < p.count; n++, i++) {
                let x, y, s;
                do { x = rand() * 2 - 1; y = rand() * 2 - 1; s = x * x + y * y; } while (s >= 1 || s === 0);
                const f = 2 * Math.sqrt(1 - s);
                pos[i * 3 + 0] = x * f * L.radius;
                pos[i * 3 + 1] = (1 - 2 * s) * L.radius;
                pos[i * 3 + 2] = y * f * L.radius;
                size[i] = p.sMin + rand() * (p.sMax - p.sMin);
                // Power-law-ish brightness in each band: most stars faint.
                const t = rand();
                bright[i] = p.bMin + (p.bMax - p.bMin) * t * t;
                tint[i] = rand();
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
        geo.setAttribute('aBright', new THREE.BufferAttribute(bright, 1));
        geo.setAttribute('aTint', new THREE.BufferAttribute(tint, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uPxr: { value: pixelRatio || 1 },
                uEyeDrift: { value: new THREE.Vector3() },
                // Rest layers exist by default; cruise layers exist only
                // while the flight drives the crossfade.
                uLayerFade: { value: L.cruise ? 0 : 1 },
            },
            vertexShader: DEEP_VERT,
            fragmentShader: DEEP_FRAG,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: true,
            toneMapped: false,
            fog: false,
        });

        const field = new THREE.Points(geo, mat);
        field.frustumCulled = false;
        // Above the sky sphere (-1000), below the shell (-999) and the
        // flight medium (-998): banks and shell stars draw over them.
        field.renderOrder = L.order;
        field.name = 'deepField' + li;
        field.layers.enable(9);
        scene.add(field);
        layers.push({ points: field, k: L.k, cruise: !!L.cruise });
    }
    return layers;
}
