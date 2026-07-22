// transit.js - rigid corridor starfield for the load-in.
//
// This field is the stellar neighborhood of the ROUTE - real fixed points
// in world space laid through the flight corridor (the destination's own
// neighborhood is the shell in starShell.js). The camera genuinely
// translates past them; each one is drawn as a pure line whose endpoints are
// the star now and the star one shutter-beat ago (its true apparent sweep),
// so streak length and direction are exact motion blur - one uniform shutter
// for the whole field, never sprites with tails, never per-star fakery.
// Screen length falls off with depth by perspective alone, which is the
// rigid-space parallax cue.
//
// Each star has TWO renderings that crossfade by its real apparent
// angular speed (v·r/d²): sweeping past fast, it is a pure motion-blur
// LINE; slow on screen (far away, or near the flight axis ahead), it is a
// dim gaussian POINT - an actual star sitting in the space ahead, exactly
// what the forward view was missing when everything was velocity streaks.
// The line side dies with speed BY PHYSICS (zero length, zero brightness
// at rest); the point side is thinned across the brake via setPointLevel
// as the route field gives way to the destination's real star shell
// (starShell.js) - so nothing of the journey can sit as a dot or streak
// over the arrival. depthTest is on, so once the system reveals, the dish
// and island genuinely occlude the field.
//
// The corridor is endless via recycled cells: a star that falls behind the
// camera respawns far ahead, but every star, while visible, is world-fixed.
// rebase(delta) shifts the whole field rigidly together with a camera
// origin jump (the load-ready splice) - relative geometry, and therefore
// the rendered frame, is unchanged.
//
// (The old destination-beacon sprite is gone: a billboard glare read as a
// flat 2D blob on approach. The sun now emerges purely through its own
// real assembly - halos, god rays, then the disc - gated on the brake
// clock in loadingApproach.js.)

import * as THREE from 'three';

export const TRANSIT_LAYER = 10;

// Soft gaussian dot for the corridor stars' point rendering - the same
// footprint philosophy as the shell stars: a small gradient core, no ring.
function pointTexture() {
    const S = 64, c = document.createElement('canvas');
    c.width = c.height = S;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    g.addColorStop(0.00, 'rgba(255,255,255,1)');
    g.addColorStop(0.30, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.65, 'rgba(255,255,255,0.10)');
    g.addColorStop(1.00, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    return new THREE.CanvasTexture(c);
}

// Corridor-star tints: dim cool whites - never bright enough to read as
// skybox stars.
const LINE_TINTS = [
    [0.62, 0.68, 0.78], [0.55, 0.64, 0.78], [0.68, 0.72, 0.80],
    [0.50, 0.58, 0.72], [0.72, 0.74, 0.80],
];

const COUNT  = 320;
const FAR    = -2850;  // spawn depth ahead of the camera (corridor-local z)
const SPREAD = 600;    // fresh stars enter scattered this far beyond FAR
const NEAR   = 40;     // retire once this far behind the camera
const RADIUS = 640;    // corridor cross-section around the flight axis
// One shutter for the whole field: streak length per unit of real per-frame
// travel. Uniform across stars - per-star length variation would break the
// single-rigid-space read.
const EXPOSURE = 1.6;
const MAX_LEN  = 230;  // cap so a stalled frame can't paint the sky
// Apparent-motion reference: a star earns full streak brightness at this
// apparent angular speed (v·r/d²). Below it the line dims toward a faint
// drift. Calibrated to match the previously accepted brightness distribution at
// cruise speed (its r/z² reference × 2350 u/s).
const APP_REF = 1.4;
// Point-side brightness at zero apparent motion. The crossfade keeps every
// star either a dim point or a streak - never a bright parked dot.
const POINT_BASE = 0.42;
const POINT_SIZE = 9;   // world-ish units, sizeAttenuation on

/**
 * @param {THREE.Scene} scene
 * @param {THREE.PerspectiveCamera} camera
 * @param {{ axis?: THREE.Vector3 }} [opts]
 *   axis - unit flight direction; fixes the corridor's orientation in
 *          world space.
 */
export function initTransit(scene, camera, opts = {}) {
    // ---- Corridor starfield ------------------------------------------------
    // World-FIXED group (rotation maps local -z onto the flight axis); the
    // camera flies through it. Star positions live in corridor-local coords.
    const group = new THREE.Group();
    group.frustumCulled = false;
    if (opts.axis) {
        group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), opts.axis);
    } else {
        group.quaternion.copy(camera.quaternion);
    }
    scene.add(group);
    const invQuat = group.quaternion.clone().invert();

    // Fixed star positions (corridor-local) + per-star tint.
    const px = new Float32Array(COUNT);
    const py = new Float32Array(COUNT);
    const pz = new Float32Array(COUNT);
    const bTint = new Float32Array(COUNT * 3);
    // Line vertex buffers (head + tail per star).
    const sPos = new Float32Array(COUNT * 6);
    const sCol = new Float32Array(COUNT * 6);

    const camLocal = new THREE.Vector3();
    function updateCamLocal() {
        camLocal.copy(camera.position).sub(group.position).applyQuaternion(invQuat);
    }

    // Stars spawn on a disc around the CAMERA's corridor-local lateral
    // position (the flight axis does not pass through the group origin).
    function spawn(i, anywhere) {
        const ang = Math.random() * Math.PI * 2;
        const r = (0.12 + 0.88 * Math.sqrt(Math.random())) * RADIUS;
        px[i] = camLocal.x + Math.cos(ang) * r;
        py[i] = camLocal.y + Math.sin(ang) * r;
        pz[i] = camLocal.z + (anywhere
            ? FAR + Math.random() * (NEAR - FAR)
            : FAR - Math.random() * SPREAD);
        const t = LINE_TINTS[(Math.random() * LINE_TINTS.length) | 0];
        bTint[i * 3 + 0] = t[0]; bTint[i * 3 + 1] = t[1]; bTint[i * 3 + 2] = t[2];
        // Tail vertex stays black - the streak fades head -> black, so
        // there is no discrete head point to read as a comet.
        sCol[i * 6 + 3] = 0; sCol[i * 6 + 4] = 0; sCol[i * 6 + 5] = 0;
    }
    updateCamLocal();
    for (let i = 0; i < COUNT; i++) spawn(i, true);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
    const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
        // depthTest ON: during the flight nothing else renders, and from
        // the reveal onward the dish/island genuinely occlude the field -
        // no line can ever draw over the system.
        depthTest: true,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    lines.frustumCulled = false;
    lines.renderOrder = 998;
    lines.layers.set(TRANSIT_LAYER);
    group.add(lines);

    // ---- Point rendering (the slow side of the crossfade) -------------------
    const pPos = new Float32Array(COUNT * 3);
    const pCol = new Float32Array(COUNT * 3);
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
    const pointTex = pointTexture();
    const pointMat = new THREE.PointsMaterial({
        map: pointTex,
        size: POINT_SIZE,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false, depthTest: true,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    points.frustumCulled = false;
    points.renderOrder = 997;
    points.layers.set(TRANSIT_LAYER);
    group.add(points);

    let opacity = 0;       // global fade (ramp-in at flight start)
    let streakLevel = 1;   // safety multiplier (1 in normal operation)
    let pointLevel = 1;    // safety multiplier (1 in normal operation)
    let respawn = true;    // off from the splice: the route field must EMPTY
                           // itself by real overtaking - no star may fade
    let prevZ = null;      // camera corridor-z last frame

    function update(dt) {
        updateCamLocal();
        if (prevZ === null) prevZ = camLocal.z;
        // Real per-frame travel, read straight off the camera. Computed in
        // group-local space, so a rebase (camera + group shifted together)
        // contributes exactly nothing - only true relative motion counts.
        const move = prevZ - camLocal.z;
        prevZ = camLocal.z;
        const speed = dt > 0 ? move / dt : 0;
        const speedK = Math.min(1, speed / 2400);
        const len = Math.min(MAX_LEN, move * EXPOSURE);

        for (let i = 0; i < COUNT; i++) {
            // With respawn off (from the splice), overtaken stars simply
            // stay behind the camera: the field ahead thins out because
            // the camera REALLY passes its last stars - the physical
            // hand-over to the destination shell, with no fades.
            if (respawn && pz[i] - camLocal.z > NEAR) spawn(i, false);
            const x = px[i], y = py[i], z = pz[i];
            // True motion blur: tail is where the star's image was one
            // shutter ago for a camera translating along -z.
            sPos[i * 6 + 0] = x; sPos[i * 6 + 1] = y; sPos[i * 6 + 2] = z;
            sPos[i * 6 + 3] = x; sPos[i * 6 + 4] = y; sPos[i * 6 + 5] = z - len;
            // Crossfade by real apparent angular speed v·r/d²: sweeping
            // stars are motion-blur lines, slow ones (distant, or near
            // the flight axis ahead) are dim points - real stars sitting
            // in the space in front of us. One physical parallax
            // gradient; at v = 0 the line side is dark. r includes the
            // camera's lateral sway, so even the drift wobble parallaxes
            // truthfully.
            const rx = x - camLocal.x, ry = y - camLocal.y;
            const r = Math.sqrt(rx * rx + ry * ry);
            const dz = Math.max(60, camLocal.z - z);
            const g = Math.min(1, (speed * r / (dz * dz)) / APP_REF);
            const a = g * g * (3 - 2 * g);
            sCol[i * 6 + 0] = bTint[i * 3 + 0] * a;
            sCol[i * 6 + 1] = bTint[i * 3 + 1] * a;
            sCol[i * 6 + 2] = bTint[i * 3 + 2] * a;
            // Point side: complement of the streak factor, plus a depth
            // fade so fresh spawns materialize gently out of the deep
            // instead of popping in at the spawn plane. The final factor
            // keeps a genuinely motionless star (dead ahead on the axis)
            // barely-there - nothing may read as a parked dot at
            // warp - and lets it brighten as soon as it visibly drifts.
            const pd = 1 - Math.min(1, Math.max(0, (dz - 1900) / 900));
            const pa = POINT_BASE * (1 - a) * (0.35 + 0.65 * pd) * (0.22 + 0.78 * g);
            pPos[i * 3 + 0] = x; pPos[i * 3 + 1] = y; pPos[i * 3 + 2] = z;
            pCol[i * 3 + 0] = bTint[i * 3 + 0] * pa;
            pCol[i * 3 + 1] = bTint[i * 3 + 1] * pa;
            pCol[i * 3 + 2] = bTint[i * 3 + 2] * pa;
        }
        lineGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.color.needsUpdate = true;
        lineMat.opacity = speedK * speedK * 0.4 * opacity * streakLevel;
        lines.visible = lineMat.opacity > 0.003 && len > 0.01;
        pointGeo.attributes.position.needsUpdate = true;
        pointGeo.attributes.color.needsUpdate = true;
        pointMat.opacity = opacity * pointLevel;
        points.visible = pointMat.opacity > 0.003;
    }

    // The load-ready splice: the camera origin jumps forward and the whole
    // corridor jumps rigidly with it. Relative geometry is untouched, so
    // the rendered frame is pixel-identical across the jump.
    function rebase(delta) {
        group.position.add(delta);
    }

    function setOpacity(a) { opacity = a; }
    function setStreakLevel(a) { streakLevel = a; }
    function setPointLevel(a) { pointLevel = a; }
    function setRespawn(v) { respawn = v; }

    function dispose() {
        scene.remove(group);
        lineGeo.dispose();
        lineMat.dispose();
        pointGeo.dispose();
        pointMat.dispose();
        pointTex.dispose();
    }

    return { update, rebase, setOpacity, setStreakLevel, setPointLevel, setRespawn, dispose };
}
