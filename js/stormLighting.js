// Storm-weather lighting cross-fade. Drives sun/hemi/ambient/rim between
// their captured clear-weather values and a peak-storm palette on a 0..1
// weather parameter (window._weather.t). A localized PointLight "strike"
// lamp handles lightning — NOT a global intensity pump. The sun + rim
// are directional sources behind the deck and must not flash.
//
// Does NOT touch fog, clouds, or rain — those are the main thread's job.

import * as THREE from 'three';
import { state, TERRAIN_HEIGHT, OCEAN_LEVEL } from './config.js?v=real16';

// --- Peak-storm targets. Clear-weather anchors are captured at runtime. ---
const STORM_SUN_COLOR   = new THREE.Color(0.58, 0.62, 0.72); // cool grey-blue
const STORM_HEMI_SKY    = new THREE.Color(0.18, 0.21, 0.27); // slate
const STORM_HEMI_GROUND = new THREE.Color(0.008, 0.012, 0.02); // inky
const STORM_AMB_COLOR   = new THREE.Color(0.10, 0.13, 0.20); // deep blue shift
const STORM_RIM_COLOR   = new THREE.Color(0.28, 0.34, 0.44); // cool steel

// Intensity multipliers at t=1 (applied to captured baseline values).
// Moderate dimming only: the storm's mood comes from the cool slate
// COLOR shift + the heavier cloud shadow, not from crushing the whole
// dish into darkness. The day/night terminator on the island must
// read the same in every weather state — the deck blocks some light,
// it does not switch the sun off.
// Raised twice by owner review (0.55 era -> 0.68 -> 0.80): the island
// must stay clearly readable at full storm — the DARKNESS of a storm
// should come from the near-black deck overhead, not from starving
// the terrain lights.
const STORM_SUN_MUL  = 0.80;
const STORM_HEMI_MUL = 0.82;
const STORM_AMB_MUL  = 0.82;
const STORM_RIM_MUL  = 0.72;

// Cloud geometry — used to place the strike inside the cloud volume.
// CLOUD_Y is the volume centre; CLOUD_HEIGHT is its vertical extent.
// These match effects.js init values (TERRAIN_HEIGHT + 3.5, 5.4). If
// window._cloud.mesh is available we read the live position instead.
const CLOUD_Y_FALLBACK   = TERRAIN_HEIGHT + 3.5;
const CLOUD_HEIGHT       = 5.4;
const CLOUD_HALF_EXTENT  = 12; // horizontal sample margin (vol is ±14)

// Strike palette — cool-blue bolt, warm-plasma core on peak sub-flash,
// near-white for the occasional "close hit" variant.
const FLASH_BLUE   = new THREE.Color(0.75, 0.85, 1.00);
const FLASH_WHITE  = new THREE.Color(0.95, 0.96, 1.00);
const FLASH_PLASMA = new THREE.Color(1.00, 0.90, 0.72);
// Sky-side hemi sympathy tint — the strike backlights the cloud deck
// so the sky-half of the hemi light briefly pulses cool.
const FLASH_HEMI_TINT = new THREE.Color(0.80, 0.90, 1.05);

// Per-strike intensity envelope. PointLight intensity is unit-less in
// vanilla THREE r170 (non-physicallyCorrectLights mode the scene uses),
// so these are tuned empirically against the scene scale. Distance of
// 150u so the whole island reads the flash from above, but the connect
// zone at y≈113 and beyond sees it fall off naturally.
const STRIKE_PEAK_INTENSITY = 1200; // at pump=1.0
const STRIKE_DISTANCE       = 150;
const STRIKE_DECAY          = 1.5;  // inverse-square-ish but softer

// --- State ---
let _baseline = null;
let _prefersReducedMotion = false;
let _strikeLight = null;
// Bolt geometry: a BufferGeometry of LINE SEGMENT pairs rebuilt per
// strike. The main channel is a midpoint-displacement fractal (kinks
// at every scale, like a real stepped leader) and 2-3 shorter BRANCH
// channels fork off partway down. Two LineSegments share the buffer —
// a thin hot core stacked with a wider glow for the two-tone look;
// UnrealBloom turns the core into a visible streak.
const BOLT_MAX_VERTS = 220; // main (32 segs) + up to 3 branches
let _boltGeo = null;
let _boltCoreMat = null;
let _boltGlowMat = null;
let _boltCore = null;
let _boltGlow = null;
const _boltStart = new THREE.Vector3();
const _boltEnd = new THREE.Vector3();

// Lightning state machine. `flashQueue` holds scheduled sub-flash times in
// seconds from now; `decayUntil` is the tail where we ease back to zero.
// `strikeColor` is the tint picked for the current strike and held across
// its sub-flash chain (the bolt is one object, not a sequence of bolts).
const _lightning = {
    nextStrikeIn: 3 + Math.random() * 5, // seconds until first strike check
    flashQueue: [],    // array of {at, peak} — at is elapsed-relative seconds
    decayUntil: 0,     // elapsed-relative seconds
    peak: 0,           // current pump amount (0..1 nominal, can >1 briefly)
    elapsed: 0,        // local accumulator, independent of animate.js clock
    strikeColor: new THREE.Color(0.80, 0.90, 1.00),
    plasmaOnPeak: false, // whether this strike gets a warm core on peak
};

// Scratch colors so lerpColors doesn't allocate per frame.
const _cSun   = new THREE.Color();
const _cHemiS = new THREE.Color();
const _cHemiG = new THREE.Color();
const _cAmb   = new THREE.Color();
const _cRim   = new THREE.Color();
const _cStrike = new THREE.Color();

/** Snapshot current light values as the clear-weather (t=0) anchor. Call
 *  once after initLighting() has populated state.*Light refs. Safe to call
 *  multiple times — only the first snapshot sticks. */
export function captureBaseline() {
    if (_baseline) return;
    const { sunLight, hemiLight, ambLight, rimLight, scene } = state;
    if (!sunLight || !hemiLight || !ambLight) return; // init not done yet

    _baseline = {
        sun:    { color: sunLight.color.clone(),    intensity: sunLight.intensity    },
        hemiS:  hemiLight.color.clone(),
        hemiG:  hemiLight.groundColor.clone(),
        hemiI:  hemiLight.intensity,
        amb:    { color: ambLight.color.clone(),    intensity: ambLight.intensity    },
        rim:    rimLight
            ? { color: rimLight.color.clone(), intensity: rimLight.intensity }
            : null,
    };

    // Lazily spawn the strike lamp. One light, reused across strikes —
    // we just reposition + retint it. Starts dark.
    if (scene && !_strikeLight) {
        _strikeLight = new THREE.PointLight(
            0xc0d8ff, 0, STRIKE_DISTANCE, STRIKE_DECAY
        );
        _strikeLight.position.set(0, CLOUD_Y_FALLBACK, 0);
        _strikeLight.castShadow = false; // shadow map stays owned by sun
        scene.add(_strikeLight);
    }

    // Lazily spawn the bolt line pair. Shared geometry; two materials
    // render back-to-back — wide glow first (renderOrder 14), then
    // hot core (renderOrder 15) so the core reads as a bright spine
    // inside the glow.
    if (scene && !_boltCore) {
        const positions = new Float32Array(BOLT_MAX_VERTS * 3);
        _boltGeo = new THREE.BufferGeometry();
        _boltGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        _boltGeo.setDrawRange(0, 0); // nothing drawn until a strike fires

        _boltGlowMat = new THREE.LineBasicMaterial({
            color: 0x6eb0ff,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        _boltGlow = new THREE.LineSegments(_boltGeo, _boltGlowMat);
        _boltGlow.renderOrder = 14;
        _boltGlow.frustumCulled = false;

        _boltCoreMat = new THREE.LineBasicMaterial({
            color: 0xf4f8ff,
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        _boltCore = new THREE.LineSegments(_boltGeo, _boltCoreMat);
        _boltCore.renderOrder = 15;
        _boltCore.frustumCulled = false;

        scene.add(_boltGlow);
        scene.add(_boltCore);
    }

    if (window.matchMedia) {
        _prefersReducedMotion =
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
}

/** Smoothstep 0..1 for gentler shoulder at both ends of the fade. */
function _smooth(t) {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
}

/** Rebuild the bolt polyline from cloud base (start) to ocean surface
 *  (end). Jitters each interior vertex perpendicular to the main axis
 *  with tapered amplitude (wider in the middle, tight at the endpoints)
 *  so the bolt reads as a crooked channel rather than a straight line. */
function _regenBoltPath(start, end) {
    if (!_boltGeo) return;
    const pos = _boltGeo.attributes.position.array;
    // Axis from start to end, plus a stable perpendicular basis so the
    // deflection lives in a plane the camera can see.
    const axis = new THREE.Vector3().subVectors(end, start);
    const axisLen = axis.length();
    axis.divideScalar(axisLen || 1);
    // Perpendicular #1: reject axis off a world-x probe, then y probe
    // as fallback if the axis was colinear with x.
    const perp1 = new THREE.Vector3(1, 0, 0);
    perp1.addScaledVector(axis, -axis.dot(perp1));
    if (perp1.lengthSq() < 1e-4) perp1.set(0, 1, 0);
    perp1.normalize();
    const perp2 = new THREE.Vector3().crossVectors(axis, perp1).normalize();

    // --- Fractal channel: recursive midpoint displacement ---
    // Kinks exist at EVERY scale (a per-vertex jitter only has one
    // frequency and reads as a hand-drawn squiggle). Amplitude halves
    // per level, exactly like a stepped leader's self-similar path.
    const mainPts = [start.clone()];
    (function displace(p0, p1, depth, amp) {
        if (depth === 0) { mainPts.push(p1.clone()); return; }
        const mid = p0.clone().add(p1).multiplyScalar(0.5);
        mid.addScaledVector(perp1, (Math.random() * 2 - 1) * amp);
        mid.addScaledVector(perp2, (Math.random() * 2 - 1) * amp * 0.6);
        displace(p0, mid, depth - 1, amp * 0.52);
        displace(mid, p1, depth - 1, amp * 0.52);
    })(start, end, 5, axisLen * 0.11);

    // --- Branches: 2-3 short forks off the upper-middle channel ---
    const branches = [];
    const nBranch = 2 + ((Math.random() * 2) | 0);
    for (let b = 0; b < nBranch; b++) {
        const at = 6 + ((Math.random() * (mainPts.length * 0.45)) | 0);
        const root = mainPts[Math.min(at, mainPts.length - 2)];
        const len = axisLen * (0.14 + Math.random() * 0.16);
        const side = Math.random() < 0.5 ? -1 : 1;
        const tip = root.clone()
            .addScaledVector(axis, len * 0.6)
            .addScaledVector(perp1, side * len * (0.5 + Math.random() * 0.5))
            .addScaledVector(perp2, (Math.random() * 2 - 1) * len * 0.3);
        const bPts = [root.clone()];
        (function displace(p0, p1, depth, amp) {
            if (depth === 0) { bPts.push(p1.clone()); return; }
            const mid = p0.clone().add(p1).multiplyScalar(0.5);
            mid.addScaledVector(perp1, (Math.random() * 2 - 1) * amp);
            mid.addScaledVector(perp2, (Math.random() * 2 - 1) * amp * 0.6);
            displace(p0, mid, depth - 1, amp * 0.52);
            displace(mid, p1, depth - 1, amp * 0.52);
        })(root, tip, 3, len * 0.18);
        branches.push(bPts);
    }

    // --- Pack polylines into the LineSegments pair buffer ---
    let v = 0;
    function pushPolyline(pts) {
        for (let i = 0; i < pts.length - 1 && v + 2 <= BOLT_MAX_VERTS; i++) {
            pos[v * 3] = pts[i].x; pos[v * 3 + 1] = pts[i].y; pos[v * 3 + 2] = pts[i].z;
            v++;
            pos[v * 3] = pts[i + 1].x; pos[v * 3 + 1] = pts[i + 1].y; pos[v * 3 + 2] = pts[i + 1].z;
            v++;
        }
    }
    pushPolyline(mainPts);
    for (const bPts of branches) pushPolyline(bPts);

    _boltGeo.setDrawRange(0, v);
    _boltGeo.attributes.position.needsUpdate = true;
    _boltGeo.computeBoundingSphere();
}

/** Pick a tint for this strike. Mostly cool-blue, sometimes near-white
 *  (close hit), rare warm-plasma peak flag set independently. */
function _pickStrikeColor(outColor) {
    const r = Math.random();
    if (r < 0.25) {
        outColor.copy(FLASH_WHITE);
    } else {
        // Cool-blue with small jitter toward white so repeat strikes
        // don't all read identical.
        const k = Math.random() * 0.35;
        outColor.copy(FLASH_BLUE).lerp(FLASH_WHITE, k);
    }
}

/** Schedule a new lightning strike: 3-5 sub-flashes within ~200ms, then a
 *  0.7-1.4s decay tail. Strike rarity scales with weather t. Also picks a
 *  fresh position + tint for the strike — these stay fixed across the
 *  sub-flash chain (one bolt, many flicker frames). */
function _scheduleStrike(t) {
    const subs = 3 + ((Math.random() * 3) | 0);          // 3..5 — more strobe
    const windowMs = 90 + Math.random() * 130;           // 90..220ms
    for (let i = 0; i < subs; i++) {
        _lightning.flashQueue.push({
            at:   _lightning.elapsed + (Math.random() * windowMs) / 1000,
            peak: 0.70 + Math.random() * 0.55,           // fuller sub-flash
        });
    }
    // Tighter decay — so successive sub-flashes strobe cleanly instead of
    // bleeding into one long glow.
    _lightning.decayUntil = _lightning.elapsed + 0.7 + Math.random() * 0.7;

    // Mean interval shrinks as t approaches 1. At t=1 ≈ 2.5-5s (busy sky),
    // at t=0.7 ≈ 9-16s (rare).
    const tClamp = Math.max(0.7, Math.min(1, t));
    const rarity = (1 - tClamp) / 0.3;   // 0 at t=1, 1 at t=0.7
    const mean = 3.5 + rarity * 10.5;    // seconds
    // Exponential interval (Poisson process).
    _lightning.nextStrikeIn = -Math.log(1 - Math.random()) * mean;

    // Per-strike variety: fresh tint, coin flip for warm-plasma core
    // on peak sub-flash (~25% of strikes).
    _pickStrikeColor(_lightning.strikeColor);
    _lightning.plasmaOnPeak = Math.random() < 0.25;

    // TARGET-first strike placement: real lightning prefers the tallest
    // conductor — 70% of strikes hit the ISLAND, the rest open sea near
    // it. The channel then starts INSIDE the cloud body above the
    // target (centre to +0.15h), so the bolt's top is swallowed by the
    // volume and it visibly emerges from the deck instead of dangling
    // free at the cloud edge.
    if (_boltGeo && _strikeLight) {
        const land = Math.random() < 0.7;
        const tr = land ? Math.sqrt(Math.random()) * 5.5 : 8 + Math.random() * 4;
        const ta = Math.random() * Math.PI * 2;
        const tx = Math.cos(ta) * tr;
        const tz = Math.sin(ta) * tr;
        const ty = land ? (tr < 2.5 ? 2.6 : 1.1) : OCEAN_LEVEL;
        _boltEnd.set(tx, ty, tz);

        const cloudY = (window._cloud && window._cloud.mesh)
            ? window._cloud.mesh.position.y
            : CLOUD_Y_FALLBACK;
        _boltStart.set(
            tx + (Math.random() * 2 - 1) * 2.2,
            cloudY + CLOUD_HEIGHT * (Math.random() * 0.20 - 0.05),
            tz + (Math.random() * 2 - 1) * 2.2
        );
        _strikeLight.position.copy(_boltStart);
        _regenBoltPath(_boltStart, _boltEnd);
    }
}

/** Advance lightning sim, return additive intensity pump in [0, ~1.2]. */
function _advanceLightning(t, dt) {
    if (t <= 0.7) { _lightning.peak = 0; return 0; }
    if (_prefersReducedMotion) return 0;
    if (window._weather?.suppressLightning) return 0;

    _lightning.elapsed += dt;
    _lightning.nextStrikeIn -= dt;
    if (_lightning.nextStrikeIn <= 0) _scheduleStrike(t);

    // Pop any sub-flashes whose time has come; keep the max peak active.
    let target = 0;
    const q = _lightning.flashQueue;
    for (let i = q.length - 1; i >= 0; i--) {
        if (_lightning.elapsed >= q[i].at) {
            if (q[i].peak > target) target = q[i].peak;
            q.splice(i, 1);
        }
    }

    // Fast attack to target, slow decay afterwards. Peak eases to zero by
    // decayUntil. Two-stage envelope so sub-flashes re-trigger cleanly.
    if (target > _lightning.peak) {
        _lightning.peak = target;
    } else {
        const tailLeft = Math.max(0, _lightning.decayUntil - _lightning.elapsed);
        const k = tailLeft > 0 ? Math.min(1, dt / tailLeft) : 1;
        _lightning.peak *= 1 - k;
        if (_lightning.peak < 0.002) _lightning.peak = 0;
    }
    return _lightning.peak;
}

/** Cross-fade lights toward storm at weather t, plus optional lightning.
 *  Must be called every frame. dt is seconds since last frame. */
export function applyStormLighting(t, dt) {
    if (!_baseline) captureBaseline();
    if (!_baseline) return;
    const { sunLight, hemiLight, ambLight, rimLight } = state;

    const k = _smooth(t);
    const b = _baseline;

    // Colors — lerp clear→storm on the scratch buffers, assign.
    _cSun.lerpColors(b.sun.color, STORM_SUN_COLOR, k);
    _cHemiS.lerpColors(b.hemiS, STORM_HEMI_SKY, k);
    _cHemiG.lerpColors(b.hemiG, STORM_HEMI_GROUND, k);
    _cAmb.lerpColors(b.amb.color, STORM_AMB_COLOR, k);

    // Intensities — lerp baseline toward baseline*mul. Keep hemi never fully
    // black; the mul floors handle that.
    const sunI  = b.sun.intensity * (1 - k * (1 - STORM_SUN_MUL));
    const hemiI = b.hemiI          * (1 - k * (1 - STORM_HEMI_MUL));
    const ambI  = b.amb.intensity  * (1 - k * (1 - STORM_AMB_MUL));

    // Advance the lightning sim. pump is 0..~1.2; it drives the strike
    // PointLight directly plus a small sky-sympathy pulse on hemi + amb.
    // No pump on sun or rim — those are directional sources that would
    // not brighten on a real lightning strike (sun is behind the deck,
    // rim is a backside fill).
    const pump = _advanceLightning(t, dt || 0);

    // Sun: pure storm lerp. No flash component.
    sunLight.color.copy(_cSun);
    sunLight.intensity = sunI;

    // Hemi: storm lerp, plus a TINY cool pulse on the sky half during a
    // strike. The strike lamp does the real lighting — this is just the
    // bounce off the cloud deck interior as the bolt illuminates it.
    const hemiPulse = Math.min(1, pump * 0.55);
    _cHemiS.lerp(FLASH_HEMI_TINT, hemiPulse * 0.30);
    hemiLight.color.copy(_cHemiS);
    hemiLight.groundColor.copy(_cHemiG);
    hemiLight.intensity = hemiI + b.hemiI * pump * 0.15;

    // Ambient: same story — small sympathy pulse only. The big
    // illumination comes from the point light throwing directional light
    // at surfaces facing the strike.
    _cAmb.lerp(FLASH_HEMI_TINT, hemiPulse * 0.20);
    ambLight.color.copy(_cAmb);
    ambLight.intensity = ambI + b.amb.intensity * pump * 0.10;

    // Rim: pure storm lerp. No flash component — a backside rim light
    // pumping on a front-hemisphere strike reads wrong.
    if (rimLight && b.rim) {
        _cRim.lerpColors(b.rim.color, STORM_RIM_COLOR, k);
        rimLight.color.copy(_cRim);
        rimLight.intensity = b.rim.intensity * (1 - k * (1 - STORM_RIM_MUL));
    }

    // Strike lamp — the actual directional bit. Peak intensity scales
    // with the pump, color uses the per-strike tint (plus a warm core
    // on the peak sub-flash IF this strike was flagged for it).
    if (_strikeLight) {
        if (pump > 0.001) {
            _cStrike.copy(_lightning.strikeColor);
            if (_lightning.plasmaOnPeak) {
                // Warm core mixes in near the sub-flash peak only —
                // pump^2 keeps the warmth off the decay tail.
                const coreMix = Math.min(1, pump * pump * 0.9);
                _cStrike.lerp(FLASH_PLASMA, coreMix * 0.35);
            }
            _strikeLight.color.copy(_cStrike);
            _strikeLight.intensity = pump * STRIKE_PEAK_INTENSITY;
        } else {
            _strikeLight.intensity = 0;
        }
    }

    // Bolt polyline — visible only during a strike. Core reads as a
    // thin hot-white spine, glow reads as the cool-blue halo around
    // it. Both fade with the pump envelope. UnrealBloom picks up the
    // bright additive core and bleeds it into a visible streak.
    if (_boltCore && _boltGlow) {
        if (pump > 0.01) {
            _boltCore.visible = true;
            _boltGlow.visible = true;
            // Core opacity is near-full on peak sub-flash, glow sits
            // lower but wider (conceptually — thickness comes from
            // bloom, not linewidth, which WebGL ignores).
            _boltCoreMat.opacity = Math.min(1.0, 0.65 + pump * 0.55);
            _boltGlowMat.opacity = Math.min(0.95, 0.35 + pump * 0.60);
            _boltGlowMat.color.copy(_lightning.strikeColor);
        } else {
            _boltCore.visible = false;
            _boltGlow.visible = false;
        }
    }
}
