// corridor.js — THE nebula: a world-space raymarched volume, everywhere,
// forever.
//
// There is no painted nebula and no baked nebula. The backdrop
// (spaceEnv.js) is a static void gradient; ALL nebula structure is this
// volume, marched from the camera's real position every frame — during
// the flight AND at rest. Because the march origin is the actual camera,
// translation produces true parallax inside the clouds: near filaments
// sweep past faster than far ones during the approach, and at rest the
// nebula shifts gently as the camera moves between zones — the same
// physical presence the stars have. The per-frame cost is BELOW the old
// painted fBm sky, so permanence is free.
//
// It renders with NORMAL alpha blending (not additive), so dense regions
// genuinely veil the stars behind them; depthTest stays ON, so the dish
// and island physically occlude it (the nebula is behind the system).
//
// The destination system sits inside a CLEARED CAVITY carved into the
// density field (a star system blows a cavity into its local medium) —
// braking into the system is physically leaving the clouds: near-field
// density ends at the cavity wall while the surrounding nebula stays in
// view at distance. That surrounding view IS the resting sky.
//
// Grain control (the "staticky" fix): march jitter is interleaved
// gradient noise (Jimenez IGN — blue-noise-like error distribution, the
// industry-standard volumetric dither) cycled per frame on the golden
// ratio, so the residual grain decorrelates frame to frame and averages
// away instead of sitting on the screen as a frozen pattern.

import * as THREE from 'three';
import { TRANSIT_LAYER } from './transit.js';
import { ACES_INVERSE_GLSL } from './shaderChunks.js';

const VERT = /* glsl */`
    varying vec3 vDir;
    void main() {
        // Camera-locked sphere at the far plane — same trick as spaceEnv.
        vDir = normalize(position);
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_Position.z = gl_Position.w;
    }
`;

function frag(steps) {
    return /* glsl */`
    precision highp float;
    varying vec3 vDir;
    // Rebase-corrected camera position: continuous across the load-ready
    // origin jump, so the sampled volume never skips.
    uniform vec3  uCamPos;
    // Global density envelope (a safety knob; 1 in normal operation).
    uniform float uAmount;
    // The system's cleared cavity, in the same rebase-corrected coords.
    // uCavityOn is continuous 0..1: held at 0 during cruise (the clearing
    // hasn't been reached), eased to 1 across the early brake, 1 at rest.
    uniform vec3  uCavityC;
    uniform float uCavityOn;
    // Audio: bass swells the nebula emission, like the old sky did.
    uniform float uPulse;
    // Temporal jitter phase (golden-ratio cycled per frame).
    uniform float uFrame;

    float hash13(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float vnoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n000 = hash13(i + vec3(0,0,0));
        float n100 = hash13(i + vec3(1,0,0));
        float n010 = hash13(i + vec3(0,1,0));
        float n110 = hash13(i + vec3(1,1,0));
        float n001 = hash13(i + vec3(0,0,1));
        float n101 = hash13(i + vec3(1,0,1));
        float n011 = hash13(i + vec3(0,1,1));
        float n111 = hash13(i + vec3(1,1,1));
        float nx00 = mix(n000, n100, f.x);
        float nx10 = mix(n010, n110, f.x);
        float nx01 = mix(n001, n101, f.x);
        float nx11 = mix(n011, n111, f.x);
        float nxy0 = mix(nx00, nx10, f.y);
        float nxy1 = mix(nx01, nx11, f.y);
        return mix(nxy0, nxy1, f.z);
    }

    // 4 octaves — the fine structure the 3-octave version lacked.
    float fbm(vec3 p) {
        float a = 0.5;
        float s = 0.0;
        for (int i = 0; i < 4; i++) {
            s += a * vnoise(p);
            p = p * 2.03 + vec3(11.3, 7.7, 3.1);
            a *= 0.5;
        }
        return s;
    }

    // Interleaved gradient noise (Jimenez) — screen-space blue-noise-like
    // dither for the march offset.
    float ign(vec2 px) {
        return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715))));
    }

    // Palette — the authored filament families (teal / purple / pink).
    const vec3 tealCol = vec3(0.150, 0.360, 0.520);
    const vec3 purpCol = vec3(0.330, 0.150, 0.540);
    const vec3 pinkCol = vec3(0.540, 0.190, 0.400);
    const vec3 deepCol = vec3(0.070, 0.180, 0.340);

    ${ACES_INVERSE_GLSL}

    const int   STEPS     = ${steps};
    const float T_NEAR    = 120.0;   // march start (world units from camera)
    const float T_FAR     = 7000.0;  // march end — the resting sky's depth
    const float INV_SCALE = 1.0 / 1400.0; // world units -> noise units
    // Extinction coefficient per world unit at density 1. Opacity per
    // segment is 1 - exp(-SIGMA * density * segmentLength): a real optical
    // depth integral, so the accumulated look is INDEPENDENT of the step
    // count.
    const float SIGMA = 0.00042;
    // Broad ambient nebula body under the filaments.
    const float AMBIENT = 0.22;
    // The system's wind-blown cavity: density zero inside R0, full beyond
    // R1. The star shell (2600-7000) is embedded in the cloud deck.
    const float CAVITY_R0 = 1900.0;
    const float CAVITY_R1 = 2700.0;

    void main() {
        vec3 dir = normalize(vDir);
        // Temporally-cycled IGN jitter: the grain pattern changes every
        // frame and averages away at display rates.
        float j = fract(ign(gl_FragCoord.xy) + uFrame);
        vec3 acc = vec3(0.0);
        float A = 0.0;
        for (int i = 0; i < STEPS; i++) {
            // ft^2 biases samples toward the camera — the near medium
            // carries the fastest parallax, so it gets the resolution.
            float ft0 = (float(i) + j) / float(STEPS);
            float ft1 = (float(i) + 1.0 + j) / float(STEPS);
            float t   = mix(T_NEAR, T_FAR, ft0 * ft0);
            float seg = mix(T_NEAR, T_FAR, min(ft1, 1.0) * min(ft1, 1.0)) - t;
            vec3 wp = uCamPos + dir * t;
            vec3 p = wp * INV_SCALE;
            // Filaments with real dark gaps, over a broad ambient body,
            // gathered into passing banks.
            float fil  = smoothstep(0.44, 0.80, fbm(p));
            float base = AMBIENT * smoothstep(0.30, 0.75, vnoise(p * 0.19 + vec3(4.0, 17.0, 8.0)));
            float bank = smoothstep(0.26, 0.62, vnoise(p * 0.33 + vec3(9.1, 3.7, 27.0)));
            float dens = (base + fil) * bank;
            // Thin right at the camera so nothing hard-clips the near
            // plane as it sweeps past.
            dens *= smoothstep(T_NEAR, 620.0, t);
            // The cleared cavity around the destination system.
            dens *= mix(1.0, smoothstep(CAVITY_R0, CAVITY_R1, length(wp - uCavityC)), uCavityOn);
            if (dens > 0.002) {
                // Hue continents, teal <-> purple with a pink lift on the
                // densest warm cores; the ambient body stays deep blue.
                float h = vnoise(p * 0.21 + vec3(31.0, 7.0, 19.0));
                vec3 c = mix(tealCol, purpCol, smoothstep(0.30, 0.75, h));
                c = mix(c, pinkCol, 0.35 * smoothstep(0.62, 0.95, h));
                c = mix(deepCol, c, clamp(fil / max(base + fil, 1e-3), 0.0, 1.0));
                float a = (1.0 - exp(-SIGMA * dens * seg)) * uAmount;
                acc += (1.0 - A) * a * c;
                A += (1.0 - A) * a;
            }
        }
        if (A < 0.004) discard;
        vec3 col = acc / max(A, 1e-4);
        col *= 1.0 + uPulse * 0.45;
        col = displayToSceneLinear(col);
        gl_FragColor = vec4(col, A);
    }
`;
}

/**
 * The permanent nebula volume. Created once at scene init; animate.js
 * feeds it the rebase-corrected camera position every frame.
 * @param {THREE.Scene} scene
 * @param {{ steps?: number }} [opts] — march samples per pixel (12 default,
 *   8 for lowPower machines).
 */
export function initCorridor(scene, opts = {}) {
    const geo = new THREE.SphereGeometry(1, 32, 16);
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            uCamPos:   { value: new THREE.Vector3() },
            uAmount:   { value: 1 },
            uCavityC:  { value: new THREE.Vector3(0, 0, 0) },
            uCavityOn: { value: 1 },
            uPulse:    { value: 0 },
            uFrame:    { value: 0 },
        },
        vertexShader: VERT,
        fragmentShader: frag(opts.steps || 12),
        side: THREE.BackSide,
        transparent: true,
        // depthTest ON: the sphere sits exactly at the far plane, so any
        // real geometry occludes it — the nebula is physically behind the
        // system and can never film over it.
        depthTest: true,
        depthWrite: false,
        toneMapped: false,
        fog: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    // Above the void backdrop (-1000) AND the star shell (-999): the
    // medium sits between the camera and most of the neighborhood, so its
    // banks genuinely veil the distant stars.
    mesh.renderOrder = -998;
    mesh.name = 'nebulaVolume';
    // Permanent sky: visible at rest (layer 0) and during the flight
    // (layer 9, alongside the void backdrop and the star shell).
    mesh.layers.enable(9);
    scene.add(mesh);

    let frame = 0;
    return {
        // Feed the camera (minus the intro's splice offset, so the sampled
        // volume is continuous across the load-ready jump). Called once
        // per frame (animate.js); also advances the temporal jitter phase.
        update(camPos, offset) {
            const u = mat.uniforms.uCamPos.value;
            u.copy(camPos);
            if (offset) u.sub(offset);
            frame = (frame + 1) & 1023;
            mat.uniforms.uFrame.value = (frame * 0.6180339887) % 1;
        },
        setAmount(a) {
            mat.uniforms.uAmount.value = a;
            mesh.visible = a > 0.002;
        },
        // Anchor the system's cavity (rebase-corrected coords).
        setCavity(effCenter) {
            mat.uniforms.uCavityC.value.copy(effCenter);
        },
        // Continuous 0..1: 0 during cruise (the clearing hasn't been
        // reached), eased in across the early brake, 1 at rest.
        setCavityOn(a) {
            mat.uniforms.uCavityOn.value = a;
        },
        setPulse(a) {
            mat.uniforms.uPulse.value = a;
        },
        dispose() {
            scene.remove(mesh);
            geo.dispose();
            mat.dispose();
        },
    };
}
