// loadingApproach.js - galactic-transit load-in (layer-isolated).
//
// The intro never shows the island until its textures are fully loaded,
// and the whole journey is REAL camera translation through one rigid
// space: from the first frame the camera genuinely flies down the
// approach axis, past a world-fixed corridor of stars (transit.js) and
// through a raymarched interstellar medium (corridor.js), under the real
// destination skybox. There is no streamed medium and no parked cruise -
// every parallax cue on screen is true relative motion, consistent by
// depth, because it is all rendered from the camera's actual position.
//
// The load takes an unknown time, so the flight cannot start a fixed
// distance out. Instead the camera departs from the FURTHEST the journey
// could ever need (cruise speed × the load failsafe, plus the braking
// distance) and flies at constant cruise speed until the assets land.
// At that moment one rigid splice drops us into island space: camera and
// corridor jump forward TOGETHER by the surplus distance. Only the
// view-locked skybox and the corridor are visible, and both are
// invariant under the shared shift, so the spliced frame is
// pixel-identical to the one before it - no visible seam, ever. From
// there the brake is a pure continuation: the camera decelerates over
// the real remaining distance and lands exactly on the establishing
// pose. (If the failsafe fires, the surplus is ~zero and the splice is a
// no-op.)
//
//   Phase 1 (cruise): real flight at cruise speed. Only the skybox, the
//     corridor stars and the medium render - the entire main scene is
//     hidden - while the island's textures download. FOV widened for
//     speed. The destination star is not visible at warp.
//   Phase 2 (decel): once every texture + heightmap has landed
//     (opts.isReady) the GPU is warmed (renderer.compile), the splice
//     fires, and the camera brakes from cruise speed to rest exactly at
//     the establishing pose. Everything follows the one real speed: the
//     corridor streaks shorten and dim with the true displacement, the
//     medium thins away (braking is entering the system's wind-cleared
//     cavity), the route's point stars thin out as the destination's
//     REAL star shell emerges into the far plane with true parallax -
//     we physically arrive among the neighborhood - and the destination
//     is ONE COMPLETE OBJECT at every visible instant - disc, halos and
//     rays together, never an assembly sequence ("just have it be
//     there"). During cruise it sits beyond the far plane and is clipped
//     - naturally invisible. It enters the frustum at the splice ~8.4k
//     units out, held at zero by a distance-driven extinction ramp, then
//     brightens and grows purely by the real approach.
//   Phase 3 (zoom): the brake does NOT end at rest - it exits the
//     establishing pose still gliding at LAND_SPEED, and the swing home
//     inherits that exact velocity. One unbroken motion from cruise to
//     the final landing; the only true stop of the whole journey is the
//     settle onto the home pose. The flight layer is retired at the
//     handoff - at a few percent of cruise speed the corridor is already
//     dark by physics (streak length and brightness both ride real
//     motion), so the retirement has nothing visible left to remove.
//
// Layer isolation is why nothing from the main scene bleeds through the
// travel, and why the island is only ever seen fully textured.

import * as THREE from 'three';
import { state } from './config.js';
import { initTransit, TRANSIT_LAYER } from './transit.js';

// Establishing pose: far and high, framing the whole system (star + distant
// dish + orbit ring) - the shot the brake comes to rest on.
const ESTABLISH_POS  = new THREE.Vector3(150, 128, 1120);
const ESTABLISH_LOOK = new THREE.Vector3(2, 6, -2);

// Home zone target (must match ZONE_ORDER[0] in zones.js).
const HOME_POS  = new THREE.Vector3(84, 33, 78);
const HOME_LOOK = new THREE.Vector3(2, 5, -4);

// Unit flight direction. ESTABLISH_POS, ESTABLISH_LOOK and every cruise
// position are collinear, so lookAt(ESTABLISH_LOOK) yields the same
// orientation all the way down the axis - the flight is a pure dolly.
const DIR = new THREE.Vector3().subVectors(ESTABLISH_LOOK, ESTABLISH_POS).normalize();

const BASE_FOV    = 45;
const TRANSIT_FOV = 58;      // widened at speed - the velocity cue

const MIN_TRANSIT_MS = 2800; // always travel at least this long
const MAX_TRANSIT_MS = 24000;// failsafe: arrive even if a load never resolves
const CRUISE_SPEED   = 2350; // u/s - held constant; the brake starts from it
const RAMP_MS        = 900;  // spool-up from rest at page-open
// Long brake: braking from cruise speed is inherently front-loaded (half
// the distance goes by in the first quarter of the time), so a short brake
// spends all its motion in under a second and the rest reads as sitting
// still. 5.8s keeps the approach visibly closing the whole way down.
const DECEL_MS       = 5800; // braking segment: cruise speed -> glide
const ZOOM_MS        = 3100; // final approach into the home framing
// The brake never reaches zero: it exits the establishing pose at this
// carried speed and the zoom curve inherits it exactly, so the camera is
// in continuous motion from the first frame to the landing at HOME. (The
// old profile hit v=0 at the pose, held a 450ms stop, then eased out from
// v=0 again - the near-stillness totalled ~2s and read as a break.)
const LAND_SPEED     = 170;  // u/s through the establishing pose

// Braking distance for the speed profile V(k) = Vc·P′(k)/2 below: P(1)=1
// exactly (the glide term integrates to zero), so distance = Vc · T / 2.
// The splice always lands the camera exactly this far out, so the brake
// crosses precisely through ESTABLISH_POS.
const D_START = CRUISE_SPEED * (DECEL_MS / 1000) / 2;
// P′(1) = LAND_C makes the brake exit at exactly LAND_SPEED.
const LAND_C = 2 * LAND_SPEED / CRUISE_SPEED;
// Departure distance: the furthest the flight could ever need - a full
// failsafe-length cruise plus the braking run. A faster load just means a
// bigger (still invisible) splice.
const D_TOTAL = D_START + CRUISE_SPEED * (MAX_TRANSIT_MS / 1000);

// The sun is never staged (locked, after every staged
// variant was caught: windowed halos/rays, visibility flips at k
// .80/.85/.55, the uDiscScale growth - ALL read as "loading in"). The
// complete assembly - disc + halos + screen-space ray pass - is gated by
// ONE extinction signal driven by the real camera→sun distance: deep in
// the nebula the star is extinguished; entering the system's cleared
// cavity it brightens; the growth on screen is pure parallax. It enters
// the far plane at the splice (~8.4k out) already at zero - no pop.
// Tightened (the system read "way out in the distance"
// too early): the star resolves across the MIDDLE of the brake, not from
// its first seconds - nothing of the destination is discernible until
// the approach has genuinely closed in.
const SUN_FADE_FAR  = 5200;  // u - fully extinguished (inside the nebula)
const SUN_FADE_NEAR = 2200;  // u - fully clear (inside the cavity)
// The lens-flare pass (god rays + the warm ghost train) is SCREEN-SPACE:
// mid-brake, with the sun still near frame centre, its ghost chain
// stretches across the vista and reads as an artifact. It gets a much
// nearer window - the rays bloom only into the establishing framing,
// the geometry where the resting look was graded.
const FLARE_FADE_FAR  = 3200;
const FLARE_FADE_NEAR = 1900;

function quintic(t) {
    const t3 = t * t * t;
    return t3 * (6 * t * t - 15 * t + 10);
}

// 7th-order smootherstep for the FINAL settle only: same endpoints and
// zero end-slopes as the quintic, but velocity concentrates mid-flight,
// so the last fifth of the zoom glides in at a fraction of the speed.
// Measured on the quintic, deceleration compressed into the final
// ~quarter second and the arrival read as a stop rather than a settle.
function septic(t) {
    const t4 = t * t * t * t;
    return t4 * (35 - 84 * t + 70 * t * t - 20 * t * t * t);
}

function smoothstep(a, b, x) {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
}

// Fraction of the braking distance covered at normalized time k:
// P(k) = 2k − 5k⁴ + 6k⁵ − 2k⁶ + LAND_C·(k³ − k²). Still P(0)=0, P(1)=1
// (the glide term vanishes at both ends), still monotone, still
// front-loaded - half the distance goes by in the first quarter of the
// time. P′(0) = 2 means the brake begins at exactly cruise speed (no seam
// at the splice); P′(1) = LAND_C means it EXITS at LAND_SPEED instead of
// dying to zero - the old profile's last second covered <1% of the
// distance, which is where the "parked before the zoom" read came from.
function decelDist(k) {
    const k2 = k * k;
    const k4 = k2 * k2;
    return 2 * k - 5 * k4 + 6 * k4 * k - 2 * k4 * k2 + LAND_C * (k2 * k - k2);
}

// The route star field empties itself PHYSICALLY during the brake: at the
// splice the corridor stops respawning stars ahead, so every star still in
// view is genuinely overtaken and swept past while the destination shell
// (starShell.js) grows in - no star ever fades or disappears in place.

/**
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.Scene} scene
 * @param {Function} onComplete - called on landing at home
 * @param {{ isReady?: () => boolean, skip?: boolean, onDropout?: () => void }} [opts]
 * @returns {{ requestSkip: () => void }}
 */
export function startApproach(camera, scene, onComplete, opts = {}) {
    const isReady = opts.isReady || (() => true);

    // Returning visitors / reduced-motion / save-data: snap straight home.
    // The permanent nebula volume (built in scene.js, cavity on) is the
    // resting sky - nothing to prepare.
    if (opts.skip) {
        camera.position.copy(HOME_POS);
        camera.lookAt(HOME_LOOK);
        if (onComplete) onComplete();
        return { requestSkip() {} };
    }

    camera.position.copy(ESTABLISH_POS).addScaledVector(DIR, -D_TOTAL);
    camera.lookAt(ESTABLISH_LOOK);

    const field = initTransit(scene, camera, { axis: DIR });
    // The permanent nebula volume (scene.js owns it; animate.js feeds it
    // the camera each frame). During cruise the system's cavity is not yet
    // reached, so it is held off and eased in across the early brake.
    const medium = state._nebulaVol;
    if (medium) medium.setCavityOn(0);
    // The flight happens under the REAL destination sky from the first
    // frame - the skybox is view-locked (no parallax), so it reads as the
    // infinitely distant backdrop it is, and the intro's grade matches the
    // loaded site EXACTLY at every moment. Only the system itself arrives:
    // the sky lives on layer 9 so it (plus the flight layer) shows while
    // the untextured island, dish, orbit ring and sun stay hidden on 0/2/4.
    // One hidden warm render of the FULL scene from the home pose into a
    // tiny offscreen target, while the loading cover is still opaque:
    // this allocates the water-reflection target, builds the shadow map
    // and compiles every lit program NOW - none of it is left to stall
    // the reveal mid-brake. (Textures arrive later and upload spread
    // across the cruise via the warm queue; the flight camera itself
    // can't warm this - at 63k out the whole system is beyond the far
    // plane and renders nothing.)
    if (state.renderer) {
        try {
            const warmRT = new THREE.WebGLRenderTarget(256, 256);
            const warmCam = camera.clone();
            warmCam.position.copy(HOME_POS);
            warmCam.lookAt(HOME_LOOK);
            state.renderer.setRenderTarget(warmRT);
            state.renderer.render(scene, warmCam);
            state.renderer.setRenderTarget(null);
            warmRT.dispose();
        } catch (e) {}
    }
    // Compile EVERY scene program now, in the same covered window: the
    // call's synchronous shader-source burst (~0.4s) is invisible here,
    // and the driver links in parallel while we cruise. (Doing this at
    // load-ready instead put that burst mid-cruise, on screen.) The
    // camera still carries the full layer mask, so the light-gathering
    // pass warms the REAL lit program variants.
    const warmState = { compiled: false };
    if (state.renderer && state.renderer.compileAsync) {
        try {
            Promise.race([
                state.renderer.compileAsync(scene, camera),
                new Promise((r) => { setTimeout(r, 8000); }),
            ]).then(() => { warmState.compiled = true; },
                    () => { warmState.compiled = true; });
        } catch (e) { warmState.compiled = true; }
    } else {
        warmState.compiled = true;
    }

    const savedLayerMask = camera.layers.mask;
    if (state._spaceEnv) state._spaceEnv.layers.enable(9);
    camera.layers.disableAll();
    camera.layers.enable(9);
    camera.layers.enable(TRANSIT_LAYER);
    // The lens flare + DOF are screen-space passes that ignore layers, so
    // the sun's flare and a defocus blur would leak onto the transit.
    // They stay ON for exactly ONE frame - under the still-opaque loading
    // cover - so their programs compile now instead of mid-brake at the
    // reveal (that late compile was a visible stutter); the first cruise
    // tick below turns them off. Their gates are 0, so they contribute
    // nothing to the warm frame either way.
    state._sunGlowGate = 0;
    state._flareGate = 0;
    // The whole sun assembly stays RENDERABLE from the first frame - it
    // is simply too far away to exist on screen (beyond the far plane at
    // cruise) and extinguished (uSunFade/gates 0) when it first enters
    // the frustum at the splice. Nothing is ever hidden or staged.
    // CRITICAL detail: the halo sprites are CHILDREN of sunOrb - never
    // toggle sunOrb.visible to gate anything.
    if (state.sunOrb) {
        state.sunOrb.visible = true;
        if (state.sunOrb.material) {
            state.sunOrb.material.visible = true;
            const u = state.sunOrb.material.uniforms;
            if (u && u.uSunFade) u.uSunFade.value = 0;
            if (u && u.uDiscScale) u.uDiscScale.value = 1;
        }
    }
    // Real establish-pose → sun distance for the extinction ramp.
    const sunEstDist = state._sunWorldPos
        ? ESTABLISH_POS.distanceTo(state._sunWorldPos) : 1577;

    // The orbit-diagram rings would otherwise pop in fully-drawn the moment
    // the main layers reveal; hold them at zero and develop them in
    // mid-brake, like the rest of the destination.
    const islandRingU = state._islandOrbitRing
        && state._islandOrbitRing.material.uniforms.baseOpacity;
    const moonRingMat = state._moonOrbitRing && state._moonOrbitRing.material;
    const islandRingBase = islandRingU ? islandRingU.value : 0;
    const moonRingBase = moonRingMat ? moonRingMat.opacity : 0;
    function setRingLevel(v) {
        if (islandRingU) islandRingU.value = islandRingBase * v;
        if (moonRingMat) moonRingMat.opacity = moonRingBase * v;
    }
    setRingLevel(0);

    // Star-field crossfade: the RESTING drift layers are absent at warp
    // and resolve in across the brake; the CRUISE layers (fast-drifting
    // distant stars, layered by depth) exist only under way and retire
    // across the same window. One signal drives both directions, so the
    // total sky population is continuous through the whole approach.
    function setLayerFade(v) {
        if (!state._skyLayers) return;
        for (const L of state._skyLayers) {
            L.points.material.uniforms.uLayerFade.value = L.cruise ? 1 - v : v;
        }
    }
    setLayerFade(0);

    const pos = new THREE.Vector3();
    const look = new THREE.Vector3();
    const effPos = new THREE.Vector3();
    const _splice = new THREE.Vector3();
    // Accumulated splice offset. The medium samples its volume at
    // (camera.position − rebaseOffset) so the field it renders is
    // continuous across the splice, exactly like the star corridor.
    const rebaseOffset = new THREE.Vector3();
    // The flight runs on its OWN clock, accumulated from clamped frame deltas -
    // not on wall time. Boot compiles the shaders for everything on screen and
    // blocks the main thread for seconds; with a wall clock the camera comes back
    // from that stall having "flown" the whole time it was frozen, and teleports
    // to wherever it should have been. Freeze, then snap. Clamping the delta means
    // a stall costs the flight time, not distance: it resumes exactly where it
    // stopped.
    let last = 0;               // flight-clock ms
    let phase = 'cruise';
    let clock = 0;              // ms of flight actually rendered
    let lastNow = performance.now();
    let phaseStart = 0;         // in flight-clock ms
    const MAX_STEP = 50;        // one stalled frame can never advance more than this
    let skipRequested = false;
    let mainRevealed = false;
    let warmStarted = false;
    let passesWarmed = false;
    const texQueue = [];
    const pendingTex = [];
    let inflightTex = 0;
    let traveled = 0;         // real distance flown at cruise

    function setFov(f) {
        if (Math.abs(camera.fov - f) > 0.01) {
            camera.fov = f;
            camera.updateProjectionMatrix();
        }
    }

    // Camera pose at a given distance-remaining along the flight axis, with
    // a diminishing lateral sway (drift, not shake). The sway is real
    // camera translation too - the near corridor parallaxes against it.
    function poseAt(dRem, sway, elapsed) {
        pos.copy(ESTABLISH_POS).addScaledVector(DIR, -dRem);
        pos.x += Math.sin(elapsed * 0.00028) * 16 * sway;
        pos.y += Math.sin(elapsed * 0.00022 + 1.1) * 9 * sway;
        camera.position.copy(pos);
        camera.lookAt(ESTABLISH_LOOK);
    }

    // One call per frame, after the camera pose is set: the corridor reads
    // its motion straight off the camera. (The nebula volume is fed the
    // splice-corrected camera by animate.js via state._nebulaOffset.)
    function updateFlightField(dt) {
        field.update(dt);
    }

    function revealMainLayers() {
        if (mainRevealed) return;
        mainRevealed = true;
        // Bring the main scene back (exactly the layers it had before the
        // flight) while KEEPING the flight layer + skybox on: from here
        // the system is genuinely approached, not cross-faded in.
        camera.layers.mask = savedLayerMask;
        camera.layers.enable(TRANSIT_LAYER);
        camera.layers.enable(9);
        // Both passes come back gated: the flare contribution is scaled by
        // its gate (0 right now), so nothing snaps on.
        if (state.lensFlarePass) state.lensFlarePass.enabled = true;
        if (state.dofPass) state.dofPass.enabled = true;
    }

    function tick() {
        const wall = performance.now();
        clock += Math.min(wall - lastNow, MAX_STEP);
        lastNow = wall;
        const now = clock;
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const elapsed = now;
        const inPhase = now - phaseStart;

        if (phase === 'cruise') {
            if (!passesWarmed) {
                // One rendered frame (under the opaque cover) was enough
                // to compile the screen-space passes; off until the
                // reveal brings them back, gated.
                passesWarmed = true;
                if (state.lensFlarePass) state.lensFlarePass.enabled = false;
                if (state.dofPass) state.dofPass.enabled = false;
            }
            // Real flight: constant cruise speed after a short spool-up.
            // Every visual - corridor streaks, medium parallax, sky drift -
            // reads off this one genuine displacement.
            const v = CRUISE_SPEED * quintic(Math.min(1, elapsed / RAMP_MS));
            traveled += v * dt;
            const dRem = D_TOTAL - traveled;
            poseAt(dRem, 1, elapsed);

            field.setOpacity(Math.min(1, elapsed / 500));
            updateFlightField(dt);
            setFov(BASE_FOV + (TRANSIT_FOV - BASE_FOV) * quintic(Math.min(1, elapsed / RAMP_MS)));

            // The skip path still floors at the spool-up ramp: the brake
            // profile starts at full cruise speed and FOV, so a splice
            // before the ramp completes would snap both in one frame.
            const ready = (isReady() && elapsed > MIN_TRANSIT_MS)
                || (isReady() && skipRequested && elapsed > RAMP_MS)
                || elapsed > MAX_TRANSIT_MS;

            if (ready && !warmStarted) {
                warmStarted = true;
                // Programs compiled at setup (under the cover); here only
                // the texture uploads remain. Queue every scene texture:
                // they would otherwise all upload on their first visible
                // frame (the reveal) in one long stall. Drained gently
                // below.
                const seen = new Set();
                const consider = (v) => {
                    if (!v || !v.isTexture || v.isRenderTargetTexture || seen.has(v)) return;
                    seen.add(v);
                    // Textures still in flight (the 24s ready-failsafe can
                    // fire before slow downloads finish) go to a pending
                    // list - they are watched each tick and pre-uploaded
                    // on arrival, BEFORE the reveal can sync-decode them
                    // on screen. (Possible only because nothing renders
                    // them during the cruise.)
                    if (v.image) texQueue.push(v);
                    else pendingTex.push(v);
                };
                scene.traverse((o) => {
                    const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
                    for (const m of mats) {
                        for (const key in m) consider(m[key]);
                        if (m.uniforms) {
                            for (const key in m.uniforms) {
                                consider(m.uniforms[key] && m.uniforms[key].value);
                            }
                        }
                    }
                });
                // Drain as an async chain, ONE upload per frame - and
                // decode each image OFF-THREAD first (image.decode()):
                // initTexture on a never-rendered image forces a
                // synchronous decode on the main thread, and the big
                // 2048² maps cost hundreds of ms that way (measured as
                // the surviving mid-cruise hitch). Upload alone is a few
                // ms.
                (function drainNext() {
                    const t = texQueue[texQueue.length - 1];
                    if (!t) return;
                    const proceed = () => {
                        texQueue.pop();
                        try { state.renderer.initTexture(t); } catch (e) {}
                        requestAnimationFrame(drainNext);
                    };
                    if (t.image && typeof t.image.decode === 'function') {
                        t.image.decode().then(proceed, proceed);
                    } else {
                        proceed();
                    }
                })();
            }

            // Late arrivals: when a pending texture's download lands,
            // decode it off-thread and pre-upload immediately - during
            // the cruise nothing renders these, so this is the only
            // moment their upload timing is ours to choose.
            if (warmStarted && pendingTex.length) {
                for (let i = pendingTex.length - 1; i >= 0; i--) {
                    const t = pendingTex[i];
                    if (!t.image) continue;
                    pendingTex.splice(i, 1);
                    inflightTex++;
                    const up = () => {
                        try { state.renderer.initTexture(t); } catch (e) {}
                        inflightTex--;
                    };
                    if (typeof t.image.decode === 'function') t.image.decode().then(up, up);
                    else up();
                }
            }

            // The splice waits until the warm is fully paid (programs
            // linked + every texture decoded and uploaded, including
            // stragglers past the ready-failsafe) so the brake starts
            // with zero deferred GPU work; the hard failsafe still fires
            // if something never resolves.
            const warmReady = warmState.compiled && warmStarted
                && texQueue.length === 0 && pendingTex.length === 0 && inflightTex === 0;
            if (ready && (warmReady || elapsed > MAX_TRANSIT_MS + 12000)) {
                // THE SPLICE: jump camera and corridor forward together by
                // the surplus distance so the brake starts exactly D_START
                // out. Both sides of the jump render the identical frame -
                // the skybox is view-locked and the corridor moves rigidly
                // with the camera - so the seam does not exist on screen.
                // (The camera's own jump lands via the next poseAt.)
                const surplus = dRem - D_START;
                _splice.copy(DIR).multiplyScalar(surplus);
                field.rebase(_splice);
                rebaseOffset.add(_splice);
                // The nebula volume rides the same splice: its camera feed
                // (animate.js) subtracts this offset, and the system's
                // cavity is re-anchored in the corrected coordinates. The
                // cavity itself is still held OFF here and eased in across
                // the early brake - a slow far-field clearing, never a
                // switch.
                if (state._nebulaOffset) state._nebulaOffset.copy(rebaseOffset);
                if (medium) medium.setCavity(effPos.copy(rebaseOffset).negate());
                // From here the route field must empty itself by REAL
                // overtaking: no new stars ahead, every visible star
                // sweeps past and stays behind - nothing fades in place.
                field.setRespawn(false);
                // The camera must land its side of the splice in THIS tick:
                // the render loop is registered ahead of this one, so the
                // next paint happens before the next tick - if the corridor
                // has jumped and the camera hasn't, that paint shows one
                // mismatched frame. Snap the pose now so camera and
                // corridor cross the splice atomically.
                poseAt(D_START, 1, elapsed);
                phase = 'decel';
                // Fresh stamp (not `now`): any long frame in THIS tick
                // must not count as elapsed brake time and fast-forward
                // the camera on the first decel frame.
                phaseStart = clock;
                if (opts.onDropout) opts.onDropout();
            }
            requestAnimationFrame(tick);
            return;
        }

        if (phase === 'decel') {
            // The brake: the camera travels the last D_START units on a
            // quintic speed profile from cruise speed to rest, landing
            // exactly on the establishing pose. One kinematic state drives
            // every visual cue below - the corridor and medium simply
            // render the camera's true motion.
            const k = Math.min(1, inPhase / DECEL_MS);
            const s = 1 - quintic(k);                    // speed fraction
            const trav = decelDist(k);                   // distance fraction covered
            const dRem = D_START * (1 - trav);           // distance remaining

            revealMainLayers();
            poseAt(dRem, s, elapsed);

            // NO fades on the star field: streak length and brightness die
            // with the real speed, and with respawn off the remaining
            // stars are genuinely overtaken (all pre-splice stars sit
            // within 2.9k ahead; the brake covers 6.8k) - the forward view
            // empties by physics while the destination shell grows in.
            // The nebula's cavity eases in across the early brake: the
            // system's clearing develops in the far field long before the
            // camera reaches it - near-field clouds END at the cavity
            // wall, and the nebula beyond it IS the resting sky.
            if (medium) medium.setCavityOn(Math.min(1, k / 0.25));

            // The sun: one complete star, gated by real distance alone.
            // Disc (uSunFade), corona halos (_sunGlowGate) and the
            // screen-space god-ray pass (_flareGate) share ONE extinction
            // signal - the assembly never appears in parts, it is a
            // finished star that brightens as the camera closes and grows
            // by true parallax. (smoothstep here accepts a falling edge.)
            const dSun = dRem + sunEstDist;
            const sunFade = smoothstep(SUN_FADE_FAR, SUN_FADE_NEAR, dSun);
            state._sunGlowGate = sunFade;
            state._flareGate = smoothstep(FLARE_FADE_FAR, FLARE_FADE_NEAR, dSun);
            if (state.sunOrb && state.sunOrb.material) {
                const u = state.sunOrb.material.uniforms;
                if (u && u.uSunFade) u.uSunFade.value = sunFade;
            }
            // Rings are the last thing to resolve - a near-field diagram
            // overlay that only reads once the system is genuinely close
            // (nothing of the destination discernible too early).
            setRingLevel(smoothstep(0.55, 0.95, k));
            // The far star fields resolve across the brake (absent at
            // warp - the deceleration is when the faint
            // background becomes legible).
            setLayerFade(smoothstep(0.25, 0.85, k));

            updateFlightField(dt);
            setFov(BASE_FOV + (TRANSIT_FOV - BASE_FOV) * s);

            if (k >= 1) {
                setFov(BASE_FOV);
                poseAt(0, 0, elapsed);
                if (medium) medium.setCavityOn(1);
                // The camera crosses the establishing pose still gliding
                // at LAND_SPEED - no stop, no beat of stillness. Retire
                // the flight layer at the handoff so nothing can overlay
                // the dish during the swing home: at 7% of cruise speed
                // the corridor is already dark by physics (opacity rides
                // (v/2400)²) and every route star is long since overtaken,
                // so there is nothing visible left to remove.
                camera.layers.disable(TRANSIT_LAYER);
                field.dispose();
                // dSun ≈ sunEstDist « SUN_FADE_NEAR here, so the fade is
                // already exactly 1 - these are the resting values, set
                // explicitly for the post-intro steady state.
                state._sunGlowGate = 1;
                state._flareGate = 1;
                if (state.sunOrb && state.sunOrb.material) {
                    const u = state.sunOrb.material.uniforms;
                    if (u && u.uSunFade) u.uSunFade.value = 1;
                }
                setRingLevel(1);
                setLayerFade(1);
                phase = 'zoom';
                phaseStart = now;
            }
            requestAnimationFrame(tick);
            return;
        }

        // zoom - the island approach, over a fully-loaded world. Every
        // element on screen is already the resting site: this move IS the
        // resting look. The curve inherits the brake's exit velocity
        // exactly: the glide term below has unit slope at t=0 and vanishes
        // (value and slope) by t=1, so the camera swings out of the
        // establishing pose at LAND_SPEED along the flight axis, bows
        // gently onto the home line, and still lands on the quintic's
        // soft settle - the journey's only true stop is at HOME itself.
        const k = Math.min(1, inPhase / ZOOM_MS);
        const e = septic(k);
        const glide = k * (1 - k) * (1 - k) * LAND_SPEED * (ZOOM_MS / 1000);
        pos.lerpVectors(ESTABLISH_POS, HOME_POS, e).addScaledVector(DIR, glide);
        look.lerpVectors(ESTABLISH_LOOK, HOME_LOOK, e);
        camera.position.copy(pos);
        camera.lookAt(look);

        if (k < 1) {
            requestAnimationFrame(tick);
        } else {
            camera.position.copy(HOME_POS);
            camera.lookAt(HOME_LOOK);
            if (onComplete) onComplete();
        }
    }

    requestAnimationFrame(tick);
    return { requestSkip() { skipRequested = true; } };
}
