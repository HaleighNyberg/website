// Render loop — calls all update functions each frame
import * as THREE from 'three';
import { state, SUN_WORLD_POSITION, OCEAN_LEVEL, OCEAN_RADIUS } from './config.js?v=real18';
import { updateScene } from './lighting.js?v=real18';
import { updateOcean } from './ocean.js?v=real18';
import { updateGlassEnv } from './glass.js?v=real18';
import { updateFly, updateDragPhysics } from './controls.js?v=real18';
import { updateRain, updateVolcanicEffects } from './effects.js?v=real18';
import { updateVolcano } from './volcano.js?v=real18';
import { updateZones, isApproachActive } from './zones.js?v=real18';
import { tickWeather } from './weather.js?v=real18';
import { applyStormLighting } from './stormLighting.js?v=real18';

// --- Weather cross-fade constants ---
// Clear-weather anchors match the values set at cloud/fog init time.
// Storm targets push the deck toward inky overcast: coverage maxes out,
// cells fatten, sun punch through the canopy collapses, sky/ground
// ambient flattens to cold slate + near-black, absorption flattens so
// the base doesn't stay blue — it actually goes dark.
const _weatherScratchSky    = new THREE.Color();
const _weatherScratchGnd    = new THREE.Color();
const _weatherScratchAbs    = new THREE.Vector3();
const _weatherScratchRainC  = new THREE.Color();
const _weatherScratchWaterS = new THREE.Color();
const _weatherScratchWaterW = new THREE.Color();
const CLEAR_CLOUD_SKY      = new THREE.Color(0.30, 0.44, 0.66);
// Mid-slate, not inky. Keeps enough brightness on the sky-lit side of
// each cell so cumulonimbus volume reads — silver edges stay visible
// instead of collapsing into a flat black lid.
const STORM_CLOUD_SKY      = new THREE.Color(0.26, 0.30, 0.36);
const CLEAR_CLOUD_GND      = new THREE.Color(0.06, 0.10, 0.16);
// Ocean-navy under-shadow. Dark enough to read as storm base, cool
// enough that rain-column undersides still tint blue instead of black.
const STORM_CLOUD_GND      = new THREE.Color(0.04, 0.06, 0.10);
// Absorption: clear leaves blue surviving deepest (1.05) so bottoms read
// cool. Storm still crushes transmission, but we back off from the
// opaque-brick 2.35/2.55/2.75 so internal cell structure is visible
// and blue survives just enough for cool-under cell reads.
const CLEAR_ABSORPTION     = new THREE.Vector3(0.72, 0.78, 1.05);
const STORM_ABSORPTION     = new THREE.Vector3(1.25, 1.40, 1.70);
// Rain tint steels toward slate-blue under storm so heads still read
// against the dark deck without veering toward "snow white".
const CLEAR_RAIN_COLOR     = new THREE.Color(0x9fb6d4);
const STORM_RAIN_COLOR     = new THREE.Color(0x708aa6);
// Water.js specular/diffuse "sun color" — cooling kills the warm
// highlight on the chop so the ocean reads overcast.
// Was (1.0, 1.0, 1.0). The pure-white reflection of the sun on the
// water surface, transmitted through the glass dish at grazing angles,
// produced a right-to-left flash across the dish's bottom edge during
// the Connect→Home traversal. Cream tone matches js/ocean.js's
// initial sunColor.
const CLEAR_WATER_SUN      = new THREE.Color(0.612, 0.557, 0.459);
const STORM_WATER_SUN      = new THREE.Color(0.34, 0.40, 0.50);
// Water body color — clear dish is near-black navy; storm pulls it to a
// darker slate so the surface reads heavier under the dim deck.
const CLEAR_WATER_COLOR    = new THREE.Color(0x061e2e);
const STORM_WATER_COLOR    = new THREE.Color(0x041018);

// smoothstep(0..1) shoulder so sliding feels punchy in the middle
// without snapping at the extremes.
function _wSmooth(t) {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
}

// Clear-baseline snapshots: we capture init-time values from the cloud
// uniforms the first frame they exist. Any other module that tunes phase
// or sun-intensity at init gets respected — we only lerp between the
// captured baseline and the storm target, never stomp clear-weather.
let _cloudBaseline = null;

// Cross-fade cloud uniforms, water, rain tint, and wind based on weather.
// wt is the raw smoothed 0..1; ws is smoothstep(wt) for perceptually
// gentler shoulders. Keeps audio-bass density pump intact.
function applyWeatherToScene(wt, ws) {
    // --- Clouds ---
    if (window._cloud && window._cloud.mat && window._cloud.mat.uniforms) {
        const u = window._cloud.mat.uniforms;
        if (!_cloudBaseline) {
            _cloudBaseline = {
                coverage:     u.coverage     ? u.coverage.value     : 0.72,
                densityScale: u.densityScale ? u.densityScale.value : 3.5,
                sunIntensity: u.sunIntensity ? u.sunIntensity.value : 9.2,
            };
        }
        const cb = _cloudBaseline;
        // Coverage runs from a CLOUDLESS sky at the clear end of the
        // slider (0, not the old baseline 0.72) through broken cumulus
        // to heavy overcast. 0.88 cap leaves cell boundaries readable
        // (full-1.0 overcast reads as a featureless lid). The 0.65
        // exponent front-loads the buildup so the hazy band already
        // shows real puffs instead of nothing until mid-slider.
        u.coverage.value     = 0.88 * Math.pow(Math.min(1, ws / 0.85), 0.65);
        // Density: cells fatten but don't go opaque-brick. 5.2 keeps
        // enough light transmission through thinner zones that volume
        // and cell structure stay visible.
        u.densityScale.value = cb.densityScale + ws * (5.2  - cb.densityScale);
        // Sun punch through the canopy dims, but we keep 3.8 (vs the
        // old 1.6) so silver lining on cell edges and internal density
        // variation read. Without this the whole deck flattens.
        u.sunIntensity.value = cb.sunIntensity + ws * (3.8  - cb.sunIntensity);
        // Ambient palette flattens toward slate + near-black.
        _weatherScratchSky.lerpColors(CLEAR_CLOUD_SKY, STORM_CLOUD_SKY, ws);
        _weatherScratchGnd.lerpColors(CLEAR_CLOUD_GND, STORM_CLOUD_GND, ws);
        u.skyColor.value.copy(_weatherScratchSky);
        u.groundColor.value.copy(_weatherScratchGnd);
        // Absorption: lerp channel-wise so blue stops surviving and the
        // base goes actually dark instead of staying blue-tinted.
        if (u.absorption) {
            _weatherScratchAbs.copy(CLEAR_ABSORPTION)
                              .lerp(STORM_ABSORPTION, ws);
            u.absorption.value.copy(_weatherScratchAbs);
        }
        // Wind phase: INTEGRATED in the main loop (state._windT) so
        // slider drags change speed smoothly instead of teleporting
        // the deck.
        if (u.uWindT) u.uWindT.value = (state._windT || 0) % 36000;
        // Storm decks swallow their own scattered light (dark bruised
        // gray at full storm).
        if (u.uStormDark) u.uStormDark.value = ws;
    }

    // --- Cloud shadow disc matches the cloud wind so the shadow pattern
    //     tracks its caster under gale-force drift. ---
    if (window._cloudShadow && window._cloudShadow.mat) {
        const su = window._cloudShadow.mat.uniforms;
        if (su.uWindT) su.uWindT.value = (state._windT || 0) % 36000;
        // Storm darkens the shadow so the terrain + water read visibly
        // shaded, not just tinted. Storm gain cut (0.38 -> 0.18): the
        // full-coverage shadow disc was the REAL reason the island went
        // too dark at peak storm — it multiplied the whole dish on top
        // of the already-dimmed lights.
        if (su.uStrength) su.uStrength.value = 0.38 + ws * 0.18;
        if (su.uCoverage && window._cloud) {
            su.uCoverage.value = window._cloud.mat.uniforms.coverage.value;
        }
    }

    // --- Rain tint ---
    if (window._rain && window._rain.mat && window._rain.mat.uniforms.uColor) {
        _weatherScratchRainC.lerpColors(CLEAR_RAIN_COLOR, STORM_RAIN_COLOR, ws);
        window._rain.mat.uniforms.uColor.value.copy(_weatherScratchRainC);
        // Expose storm t so updateRain() can thicken + lengthen streaks,
        // speed them up, and steepen the wind tilt on the billboard.
        window._rain.stormT = ws;
    }

    // --- Water: sun tint + body color + distortion + wave speed ---
    if (state.water && state.water.material && state.water.material.uniforms) {
        const wu = state.water.material.uniforms;
        // Quadratic ramp: the grey storm-sea look belongs to the top of
        // the slider. Linear ws had the ocean already churning grey at
        // hazy, which read as "too active" long before any storm.
        const wsSea = ws * ws;
        if (wu.sunColor) {
            _weatherScratchWaterS.lerpColors(CLEAR_WATER_SUN, STORM_WATER_SUN, wsSea);
            wu.sunColor.value.copy(_weatherScratchWaterS);
        }
        if (wu.waterColor) {
            _weatherScratchWaterW.lerpColors(CLEAR_WATER_COLOR, STORM_WATER_COLOR, wsSea);
            wu.waterColor.value.copy(_weatherScratchWaterW);
        }
        // Distortion: calmer at 3.2, choppier surface at 6.0 under storm.
        if (wu.distortionScale) wu.distortionScale.value = 3.2 + wsSea * 2.8;
        // Do NOT touch wu.size — shrinking the normal tile reads as the
        // camera zooming in on the water (tighter wavelets = apparent
        // scene scale change), not as choppier waves.
    }

    // Scene fog intentionally OFF. The island is small (~12u radius)
    // and the camera sits close; any FogExp2 density heavy enough to
    // read as weather also fogged the dish + terrain into a chalky
    // blue-grey. Storm mood now comes from the cloud deck darkening,
    // cloud shadow pattern, rain, water reaction, wind, lighting
    // cross-fade, and lightning strobes.
    if (state.scene && state.scene.fog) {
        state.scene.fog = null;
    }

    // Bloom strength is written once per frame by the canonical
    // underwater/above-water block further down. It reads window._weather
    // to pull storm strength on top of the camera-y check so we don't
    // double-write the uniform.
}

const globalClock = new THREE.Clock();

// Reusable scratch vectors for the sun lens-flare occlusion test. Values
// are undefined outside the current frame — do NOT read across frames.
// Moon lens flare was removed (god rays are now a sun-only effect).
const _sunNDC = new THREE.Vector3();
// Golden-hour grade scratches.
const _toCel = new THREE.Vector3();
const _sunLocal = new THREE.Vector3();
const _v3a = new THREE.Vector3();
const _v3b = new THREE.Vector3();
const _islandQInv = new THREE.Quaternion();

// Audio reactivity: when a sonification is playing the AnalyserNode
// (js/audio.js) gets sampled each frame and split into three bands —
// bass (sun halos + nebula filaments), mids (sky brightness swell),
// treble (starfield shimmer). Smoothed with fast-attack slow-release
// envelopes so the visuals feel breathing-responsive, not jittery.
let _audioBass = 0;
let _audioMid = 0;
let _audioTreble = 0;
const _freqBins = new Uint8Array(128);

function sampleAudio() {
    // Scene-wide audio reactivity disabled — visualizer bars in
    // js/audioViz.js still read the analyser directly. Holding the
    // band values at 0 leaves halos/orb/space-env/clouds/rain at
    // their static baselines.
    _audioBass = 0;
    _audioMid = 0;
    _audioTreble = 0;
    // (Per-frame __audioBandsProbe object allocation removed — nothing
    // ever read it; it was a debug probe left in the hot path.)
}

export function startAnimateLoop() {
    function animate() {
        requestAnimationFrame(animate);
        const dt = globalClock.getDelta();
        const elapsed = globalClock.elapsedTime;
        window._elapsed = elapsed; // expose for controls.js

        // Static sun, orbiting moon, water, effects
        updateScene(elapsed);

        // Audio reactivity — sun halos + orb scale pulse with bass,
        // starfield brightness pulses with treble.
        sampleAudio();
        if (state._sunHaloMat) {
            // Outer corona: 0.06 baseline -> 0.55 peak. The low baseline
            // is load-bearing — it keeps the outer halo as a distinct
            // ring around the tighter inner halo around the photosphere
            // orb. Raising the baseline blurs the three layers into one
            // soft blob instead of three readable rings.
            state._sunHaloMat.opacity = 0.06 + _audioBass * 0.55;
        }
        if (state._sunHaloInnerMat) {
            // Inner halo: 0.14 baseline -> 0.80 peak. Tight corona
            // sitting between the orb and the outer halo.
            state._sunHaloInnerMat.opacity = 0.14 + _audioBass * 0.70;
        }
        if (state.sunOrb) {
            // Orb scale pulses 1.0 -> 1.22 on bass hits — visibly breathes.
            const s = 1.0 + _audioBass * 0.22;
            state.sunOrb.scale.setScalar(s);
        }
        if (state._spaceEnv && state._spaceEnv.material && state._spaceEnv.material.uniforms) {
            const u = state._spaceEnv.material.uniforms;
            if (u.uStarPulse)   u.uStarPulse.value   = _audioTreble;
            if (u.uNebulaPulse) u.uNebulaPulse.value = _audioBass;
            if (u.uSkyPulse)    u.uSkyPulse.value    = _audioMid;
        }

        // Rotate island centerpiece — slow turntable about Y axis.
        // Clamp dt to avoid visible jumps from frame-time spikes (tab
        // switch, GC pause, compositor stall). 0.05 = 20fps floor.
        const dtClamped = Math.min(dt, 0.05);
        // 0.008 (was 0.018): the turntable rate is the carrier frequency
        // of every rotation-driven shading beat (grid facets, AO moiré,
        // glint twinkle all pulse at rotation x feature-pitch). Slower
        // than halving it drops those beats from flicker range (~2.5 Hz)
        // to a slow living shimmer — and a more stately turn reads
        // BIGGER, which suits the massive-scale dish.
        state.islandGroup.rotation.y += 0.008 * dtClamped;

        // World-space sun direction for materials whose varyings are in
        // world coordinates (islet underwater downwelling).
        if (window.__sunDirW && state.SUN_DIR) {
            window.__sunDirW.value.copy(state.SUN_DIR);
        }

        updateFly(dt);
        updateDragPhysics(dt);
        updateOcean();
        updateGlassEnv(elapsed);

        // --- Weather cross-fade ---
        // window._weather.smoothed is the eased 0..1 used by every
        // consumer. Drive cloud uniforms, rain, fog, and lights off it.
        tickWeather(dt);
        const wt = (window._weather && window._weather.smoothed) || 0;
        const ws = _wSmooth(wt);
        // Integrated cloud wind phase: speed scales with storm, phase
        // accumulates — dragging the slider changes VELOCITY smoothly
        // instead of teleporting the deck pattern.
        state._windT = (state._windT || 0) + Math.min(dt, 0.05) * (1.0 + ws * 3.0);
        applyStormLighting(window._weather?.t ?? 0, dt);
        applyWeatherToScene(wt, ws);

        // Rain: bass adds a pulse, weather gates total amount. Below
        // wt≈0.10 the rain dies entirely so a sunny slider reads as
        // actually sunny — no stray drops under clear sky. Intensity
        // climbs past 1.0 at peak storm so streaks really saturate.
        if (window._rain) {
            const rainGate = Math.max(0, (wt - 0.08) / 0.92);
            const stormBoost = 1.0 + ws * 0.85;   // 1.0 → 1.85 under storm
            window._rain.enabled = rainGate > 0.01;
            window._rain.intensity = (0.55 + _audioBass * 0.35) * rainGate * stormBoost;
        }
        updateRain(dt, elapsed);
        updateVolcanicEffects(dt);
        updateVolcano(dt);

        // Zone detection — spatial content based on camera position
        updateZones(state.camera);

        // --- Underwater bloom dampening ---
        // Below the ocean surface the sun's directional light hits the
        // underside of the water + caustic disc hard, producing a
        // screen-dominating bright hemisphere that UnrealBloom amplifies
        // into a solid white mask. Halve bloom strength any time the camera
        // dips below OCEAN_LEVEL. Restored above water so the rest of the
        // scene reads the same as before.
        if (state.bloomPass) {
            // Underwater halves bloom (see above). Storm weather also
            // pulls it down — a heavy cloud deck shouldn't read as a
            // bright hemisphere. ws is the smoothed weather fade.
            const wsBloom = _wSmooth((window._weather && window._weather.smoothed) || 0);
            // Base 0.24 (was 0.6): owner-tuned to a restrained glow —
            // this is the shipped look.
            const above = 0.24 * (1 - wsBloom * 0.55);
            state.bloomPass.strength = state.camera.position.y < OCEAN_LEVEL ? 0.072 : above;
        }

        // --- Lens flare: static sun + orbiting moon ---
        // Same rendering pipeline runs during the fly-in and at rest,
        // so the load is seamless with the settled view (no snap-on of
        // effects at landing). The tight occlusion test below handles
        // sun-behind-island cases at any camera distance.
        //
        // World-direction gate: the pass stays enabled whenever the sun
        // is in front of the camera (frontDot > 0), so the screen-wide
        // warm wash from mLs() f1..f6 anchors the scene regardless of
        // whether the sun disc itself is in the frustum. Only the
        // screen-position-dependent lens artifacts (ghosts/streaks/glare)
        // fade out as the sun crosses the NDC overscan edge.
        if (state.lensFlarePass) {
            const u = state.lensFlarePass.uniforms;
            // FROZEN clock: the flare shader animates on iTime — rotating
            // ghost wheels, hue-cycling lobes, a swinging starburst — and
            // those sweeps crossing the dish read as an oscillating blue
            // pulse over the island/ocean (A/B: disabling this pass
            // stabilized consecutive frames completely). A real camera's
            // flare is static for a static sun; the artifacts still track
            // the sun's slow orbital drift via lensPosition.
            u.iTime.value = 41.7;

            if (state.sunOrb) {
                const sunPos = state.sunOrb.position;
                const camPos = state.camera.position;

                // World-space "is the sun in front of the camera?" check.
                // Cheaper and more robust than the NDC z<1 test for poses
                // where the sun is glancingly behind the camera.
                const toSunWorld = _v3a.subVectors(sunPos, camPos).normalize();
                const camFwd = state.camera.getWorldDirection(_v3b);
                const frontDot = toSunWorld.dot(camFwd);

                if (frontDot <= 0) {
                    u.enabled.value = false;
                } else {
                    // Project for screen position. lensPosition is allowed
                    // to drift outside [-1,1] so the f1..f6 warm lobes in
                    // mLs() decay naturally with distance instead of
                    // snapping when the orb crosses the NDC edge.
                    const sunNDC = _sunNDC.copy(sunPos).project(state.camera);

                    // Smooth on-screen factor: 1 inside the [-1,1] box, 0
                    // at the 1.2 overscan edge, smooth between. Drives the
                    // ghosts/streaks/glare lobes that legitimately depend
                    // on the bright body being in the optical path.
                    const edge = Math.max(Math.abs(sunNDC.x), Math.abs(sunNDC.y));
                    const onScreen = Math.max(0, Math.min(1, (1.2 - edge) / 0.2));

                    // Occlusion test: distance from origin to the line camera→sun.
                    // The dish + island form a roughly spherical mass centered at
                    // the origin (radius ~12 for the island core, ~32 for the
                    // dish rim). The previous test projected onto y=0.6 only,
                    // which silently failed for any side view where the camera's
                    // y was close to the ocean level. A point-to-line distance
                    // works from every angle.
                    const toSun = _toCel.subVectors(sunPos, camPos);
                    const sunDist = toSun.length();
                    toSun.divideScalar(sunDist);
                    // Param along the ray closest to origin
                    const tClose = -camPos.dot(toSun);
                    let vis = 1.0;
                    if (tClose > 0 && tClose < sunDist) {
                        // Closest point on ray
                        const cx = camPos.x + toSun.x * tClose;
                        const cy = camPos.y + toSun.y * tClose;
                        const cz = camPos.z + toSun.z * tClose;
                        const closeDist = Math.sqrt(cx*cx + cy*cy + cz*cz);
                        // Tight occlusion: only kill the flare when the line of
                        // sight passes through the actual mountain peak. The
                        // dish glass + island flanks no longer attenuate, so
                        // the research/publications poses keep their god rays.
                        const occR = 2.0;  // mountain summit cap
                        const fadeR = 8.0; // island peak diameter
                        if (closeDist < occR) {
                            vis = 0.0;
                        } else if (closeDist < fadeR) {
                            vis = (closeDist - occR) / (fadeR - occR);
                        }
                    }

                    // Pass stays enabled whenever the sun is in front of
                    // the camera. The screen-wide warm wash (f1..f6 in
                    // mLs) reads even when the sun is well off-screen,
                    // which is the whole point of this fix — it's what
                    // anchors the "atmospheric" feel in side-on poses.
                    u.enabled.value = true;
                    u.lensPosition.value.set(sunNDC.x, sunNDC.y);
                    u.opacity.value = 1.0 - vis * 0.25;
                    u.colorGain.value.set(35, 15, 6);
                    // Ghost/streak/glare lobes fade with onScreen — they
                    // are the physical lens artifacts that require the
                    // bright body to actually be in the optical path.
                    u.glareSize.value = 0.06 * vis * onScreen;
                    u.flareSize.value = 0.002 * vis * onScreen;
                    u.secondaryGhosts.value = onScreen;
                    u.aditionalStreaks.value = onScreen;

                    // Occlusion fully kills the flare (sun behind mountain).
                    if (vis <= 0.0) {
                        u.enabled.value = false;
                    }
                }
            } else {
                u.enabled.value = false;
            }
        }

        // Cloud volume update — camera-relative origin each frame, sun
        // direction transformed into islandGroup local space (the group
        // slowly spins around Y so a world-space sun would swim across
        // the clouds), drift time, and audio density bump so the deck
        // swells with bass hits.
        if (window._cloud) {
            const u = window._cloud.mat.uniforms;
            u.cameraPos.value.copy(state.camera.position);
            u.uTime.value = elapsed;
            u.frame.value = (u.frame.value + 1) % 1024;
            if (state.SUN_DIR && state.islandGroup) {
                _islandQInv.copy(state.islandGroup.quaternion).invert();
                _sunLocal.copy(state.SUN_DIR).applyQuaternion(_islandQInv).normalize();
                u.sunDirLocal.value.copy(_sunLocal);
                // Terrain day/night split shares the same island-local sun.
                if (window._terrain && window._terrain.sunUniform) {
                    window._terrain.sunUniform.value.copy(_sunLocal);
                }
            }
            u.uDensityMul.value = 1.0 + _audioBass * 0.45;
        }

        // Cloud shadow disc mirrors the cloud drift + audio density
        // so the shadow pattern stays locked to the cloud it's cast by.
        if (window._cloudShadow) {
            const su = window._cloudShadow.mat.uniforms;
            su.uTime.value = elapsed;
            su.uDensityMul.value = 1.0 + _audioBass * 0.45;
            // Sun-projected offset: shadows land down-sun of the deck,
            // so we sample the cloud field up-sun of each ground point.
            // The physically-true offset for this sun elevation would
            // slide the whole pattern off the disc, so its length is
            // clamped to a readable fraction of the radius (art call:
            // enough lateral shift to break the directly-underneath
            // look while the shadow stays under its cloud field).
            if (su.uSunOffset && window._cloud && state.SUN_DIR && state.islandGroup) {
                const dy = window._cloud.mesh.position.y -
                           window._cloudShadow.mesh.position.y;
                const k = dy / Math.max(_sunLocal.y, 0.2);
                let ox = _sunLocal.x * k, oz = _sunLocal.z * k;
                const mag = Math.hypot(ox, oz);
                const maxOff = su.uRadius.value * 0.35;
                if (mag > maxOff) { ox *= maxOff / mag; oz *= maxOff / mag; }
                su.uSunOffset.value.set(ox, oz);
            }
        }

        // Update film grain time
        if (state.grainPass) state.grainPass.uniforms.time.value = elapsed;

        state.composer.render();
    }
    animate();
}
