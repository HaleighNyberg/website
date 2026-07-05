import * as THREE from 'three';
import { state } from './config.js?v=real9';

// Volcano eruption sequence. Palette-locked to the existing lava pool /
// molten underside (0xff5020 family) so an eruption reads as the same
// magma system waking up, not a bolted-on particle demo. Restraint is
// the design goal: one eruption is a ~17 s arc — a slow crater-glow
// buildup, a burst of incandescent ejecta with a dark ash column, then
// a long cooling tail. No screen shake, no global light pump; the sun
// and the rest of the scene are untouched.
//
// Triggers: window.eruptVolcano() fires one on demand; an internal
// timer also fires one every few minutes (skipped under
// prefers-reduced-motion). initVolcano() from main.js after terrain,
// updateVolcano(dt) from the animate loop.

const EMBER_COUNT = 220;
const ASH_COUNT   = 90;

const BUILD_S = 3.5;
const ERUPT_S = 6.5;
const WANE_S  = 7.0;

const PHASE_IDLE = 0, PHASE_BUILD = 1, PHASE_ERUPT = 2, PHASE_WANE = 3;

// Ember color ramp, hot to cold. Matches the pool shader's white-orange
// core -> deep red rim so ejecta reads as the same melt.
const EMBER_HOT  = new THREE.Color(1.00, 0.86, 0.55);
const EMBER_MID  = new THREE.Color(1.00, 0.32, 0.10);
const EMBER_COLD = new THREE.Color(0.24, 0.04, 0.01);
// Ash matches the crater-ring rock (dark warm brown, never pure black).
const ASH_LIT  = new THREE.Color(0.16, 0.11, 0.09);
const ASH_DARK = new THREE.Color(0.05, 0.035, 0.03);

let _emberSys = null;
let _ashSys = null;
let _flashLight = null;
let _phase = PHASE_IDLE;
let _phaseT = 0;
let _autoTimer = 200 + Math.random() * 200; // first auto eruption in 3-7 min
let _particlesLive = false; // any ember/ash alive — gates idle work
let _craterY = 4.8;
let _spawnCarryE = 0, _spawnCarryA = 0;
const _scratchColor = new THREE.Color();
const PRM = typeof window !== 'undefined' && window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Soft radial sprite so points read as glowing blobs, not squares.
function makeSpriteTexture(edgeSoftness) {
    const s = 64;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(edgeSoftness, 'rgba(255,255,255,0.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

// One particle system: Points with per-particle size / alpha / color.
// PointsMaterial can't fade particles individually, so a tiny shader
// carries the attributes. Positions integrate on the CPU (~300 total
// particles at 60 fps is noise next to the rain system).
function makeSystem(count, texture, blending) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const alpha = new Float32Array(count);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
    const mat = new THREE.ShaderMaterial({
        uniforms: { map: { value: texture } },
        vertexShader: `
            attribute vec3 aColor;
            attribute float aSize;
            attribute float aAlpha;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vAlpha = aAlpha;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = aSize * (1300.0 / max(1.0, -mv.z));
                gl_Position = projectionMatrix * mv;
            }`,
        fragmentShader: `
            uniform sampler2D map;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                float a = texture2D(map, gl_PointCoord).a * vAlpha;
                if (a < 0.004) discard;
                gl_FragColor = vec4(vColor, a);
            }`,
        blending: blending,
        transparent: true,
        depthWrite: false,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    pts.renderOrder = 8;
    // Layer 0 on purpose: the water mirror renders layers 0+1, so the
    // ejecta glow reflects on the ocean like the lava pool does.
    return {
        mesh: pts, geo,
        pos, col, size, alpha,
        vel: new Float32Array(count * 3),
        life: new Float32Array(count),      // remaining seconds; <=0 dead
        maxLife: new Float32Array(count),
        count,
    };
}

export function initVolcano() {
    const { islandGroup } = state;
    if (!islandGroup) return;

    _emberSys = makeSystem(EMBER_COUNT, makeSpriteTexture(0.25), THREE.AdditiveBlending);
    _ashSys   = makeSystem(ASH_COUNT, makeSpriteTexture(0.55), THREE.NormalBlending);
    _emberSys.geo.getAttribute('aAlpha').array.fill(0);
    _ashSys.geo.getAttribute('aAlpha').array.fill(0);
    islandGroup.add(_emberSys.mesh);
    islandGroup.add(_ashSys.mesh);

    // Eruption lamp: same hue family as the pool light but with reach,
    // so the burst paints the upper cone + nearby water. Kept INVISIBLE
    // while idle — a visible PointLight is evaluated per-fragment by
    // every lit material in range even at intensity 0, and this one
    // covers most of the dish. The visibility flip costs one shader
    // permutation swap at eruption start, masked by the slow buildup.
    _flashLight = new THREE.PointLight(0xff6428, 0.0, 26, 2.0);
    _flashLight.position.set(0, _craterY + 0.6, 0);
    _flashLight.visible = false;
    islandGroup.add(_flashLight);

    window._volcanoGlow = 1.0;
    window.eruptVolcano = triggerEruption;
}

function triggerEruption() {
    if (_phase !== PHASE_IDLE) return false;
    // Live crater height (terrain load positions the pool asynchronously).
    if (state.lavaPool && state.lavaPool.mesh) {
        _craterY = state.lavaPool.mesh.position.y;
    }
    _flashLight.position.y = _craterY + 0.6;
    _phase = PHASE_BUILD;
    _phaseT = 0;
    return true;
}

function spawnEmber(sys) {
    const i = findDead(sys);
    if (i < 0) return;
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.22;
    sys.pos[i*3]   = Math.cos(a) * r;
    sys.pos[i*3+1] = _craterY + 0.15;
    sys.pos[i*3+2] = Math.sin(a) * r;
    // Cone of arcs: mostly up, moderate lateral throw.
    const va = Math.random() * Math.PI * 2;
    const lat = 0.35 + Math.random() * 1.15;
    sys.vel[i*3]   = Math.cos(va) * lat;
    sys.vel[i*3+1] = 2.2 + Math.random() * 2.2;
    sys.vel[i*3+2] = Math.sin(va) * lat;
    sys.maxLife[i] = 1.8 + Math.random() * 1.7;
    sys.life[i] = sys.maxLife[i];
    sys.size[i] = 2.2 + Math.random() * 2.4;
}

function spawnAsh(sys) {
    const i = findDead(sys);
    if (i < 0) return;
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.3;
    sys.pos[i*3]   = Math.cos(a) * r;
    sys.pos[i*3+1] = _craterY + 0.3;
    sys.pos[i*3+2] = Math.sin(a) * r;
    sys.vel[i*3]   = (Math.random() - 0.5) * 0.35;
    sys.vel[i*3+1] = 0.85 + Math.random() * 0.6;
    sys.vel[i*3+2] = (Math.random() - 0.5) * 0.35;
    sys.maxLife[i] = 5.5 + Math.random() * 3.0;
    sys.life[i] = sys.maxLife[i];
    sys.size[i] = 4.5 + Math.random() * 3.5;
}

function findDead(sys) {
    for (let i = 0; i < sys.count; i++) if (sys.life[i] <= 0) return i;
    return -1;
}

export function updateVolcano(dt) {
    if (!_emberSys) return;
    dt = Math.min(dt, 0.05);

    // Auto eruptions DISABLED for launch (owner call: the eruption is
    // optional spectacle and reads less photoreal than the base scene).
    // window.eruptVolcano() still fires one on demand, and setting
    // window._volcanoAuto = true restores the lazy cadence.
    if (_phase === PHASE_IDLE && !PRM && window._volcanoAuto) {
        _autoTimer -= dt;
        if (_autoTimer <= 0) {
            _autoTimer = 240 + Math.random() * 240;
            triggerEruption();
        }
    }

    // --- Phase machine drives glow, light, and spawn rates ---
    let glow = 1.0, lamp = 0.0, emberRate = 0, ashRate = 0;
    if (_phase !== PHASE_IDLE) _phaseT += dt;
    if (_phase === PHASE_BUILD) {
        const k = Math.min(1, _phaseT / BUILD_S);
        glow = 1.0 + k * k * 1.6;                  // slow simmer up
        lamp = k * k * 1.2;
        emberRate = k * 6;                          // sputter
        if (_phaseT >= BUILD_S) { _phase = PHASE_ERUPT; _phaseT = 0; }
    } else if (_phase === PHASE_ERUPT) {
        const k = Math.min(1, _phaseT / ERUPT_S);
        const burst = 1.0 - k * 0.45;               // strongest at onset
        glow = 2.6 * burst + 0.4;
        // Organic flicker on the lamp, never strobing.
        lamp = (7.0 + Math.sin(_phaseT * 23.0) * 1.3 + Math.sin(_phaseT * 7.3) * 0.9) * burst;
        emberRate = 52 * burst;
        ashRate = 11 * burst;
        if (_phaseT >= ERUPT_S) { _phase = PHASE_WANE; _phaseT = 0; }
    } else if (_phase === PHASE_WANE) {
        const k = Math.min(1, _phaseT / WANE_S);
        const ease = (1 - k) * (1 - k);
        glow = 1.0 + ease * 1.4;
        lamp = ease * 1.6;
        emberRate = ease * 4;
        if (_phaseT >= WANE_S) { _phase = PHASE_IDLE; _phaseT = 0; }
    }

    window._volcanoGlow = glow;
    if (_flashLight) {
        _flashLight.intensity = lamp;
        _flashLight.visible = lamp > 0.01;
    }
    if (state.lavaPool && state.lavaPool.light) {
        state.lavaPool.light.intensity = 0.5 * glow;
    }

    // --- Spawning (fractional-rate accumulators) ---
    _spawnCarryE += emberRate * dt;
    while (_spawnCarryE >= 1) { spawnEmber(_emberSys); _spawnCarryE -= 1; _particlesLive = true; }
    _spawnCarryA += ashRate * dt;
    while (_spawnCarryA >= 1) { spawnAsh(_ashSys); _spawnCarryA -= 1; _particlesLive = true; }

    // Idle short-circuit: with no phase running and no particle alive
    // there is nothing to integrate — and, more importantly, nothing to
    // re-upload. The unconditional needsUpdate below was pushing all 8
    // attribute buffers to the GPU every frame for a dormant system.
    if (_phase === PHASE_IDLE && !_particlesLive) return;

    // --- Integrate embers: gravity arcs, hot->cold color, die on water ---
    let anyAlive = false;
    const e = _emberSys;
    for (let i = 0; i < e.count; i++) {
        if (e.life[i] <= 0) { e.alpha[i] = 0; continue; }
        anyAlive = true;
        e.life[i] -= dt;
        e.vel[i*3+1] -= 2.6 * dt;
        e.pos[i*3]   += e.vel[i*3]   * dt;
        e.pos[i*3+1] += e.vel[i*3+1] * dt;
        e.pos[i*3+2] += e.vel[i*3+2] * dt;
        if (e.pos[i*3+1] < 0.7) e.life[i] = 0;      // quenched at sea level
        const t = Math.max(0, e.life[i] / e.maxLife[i]);   // 1 fresh, 0 dead
        if (t > 0.6) _scratchColor.lerpColors(EMBER_MID, EMBER_HOT, (t - 0.6) / 0.4);
        else _scratchColor.lerpColors(EMBER_COLD, EMBER_MID, t / 0.6);
        e.col[i*3] = _scratchColor.r; e.col[i*3+1] = _scratchColor.g; e.col[i*3+2] = _scratchColor.b;
        e.alpha[i] = Math.min(1, t * 2.5);
    }

    // --- Integrate ash: buoyant rise, expansion, soft in/out fade ---
    const s = _ashSys;
    for (let i = 0; i < s.count; i++) {
        if (s.life[i] <= 0) { s.alpha[i] = 0; continue; }
        anyAlive = true;
        s.life[i] -= dt;
        s.vel[i*3+1] = Math.max(0.25, s.vel[i*3+1] - 0.06 * dt);
        s.pos[i*3]   += s.vel[i*3]   * dt;
        s.pos[i*3+1] += s.vel[i*3+1] * dt;
        s.pos[i*3+2] += s.vel[i*3+2] * dt;
        const age = 1 - s.life[i] / s.maxLife[i];          // 0 fresh, 1 dead
        s.size[i] += dt * 1.5;                              // column billows
        const fade = Math.min(age / 0.18, 1) * (1 - Math.pow(age, 2.2));
        s.alpha[i] = fade * 0.34;
        _scratchColor.lerpColors(ASH_LIT, ASH_DARK, age);
        s.col[i*3] = _scratchColor.r; s.col[i*3+1] = _scratchColor.g; s.col[i*3+2] = _scratchColor.b;
    }

    _particlesLive = anyAlive;
    for (const sys of [e, s]) {
        sys.geo.attributes.position.needsUpdate = true;
        sys.geo.attributes.aColor.needsUpdate = true;
        sys.geo.attributes.aSize.needsUpdate = true;
        sys.geo.attributes.aAlpha.needsUpdate = true;
    }
}
