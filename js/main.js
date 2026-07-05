// Main entry point
import { state } from './config.js?v=real11';
import { initScene } from './scene.js?v=real11';
import { initLighting } from './lighting.js?v=real11';
import { initTerrain } from './terrain.js?v=real11';
import { initOcean } from './ocean.js?v=real11';
import { initGlass } from './glass.js?v=real11';
import { initEffects } from './effects.js?v=real11';
import { initControls } from './controls.js?v=real11';
import { initZones, setApproachActive } from './zones.js?v=real11';
import { startAnimateLoop } from './animate.js?v=real11';
import { startApproach } from './loadingApproach.js?v=real11';
import { initEasterEggs } from './easterEggs.js?v=real11';
import { isReviewerActive, initReviewerUI } from './reviewer.js?v=real11';
import { FEATURES } from './features.js?v=real11';
import { initAudio } from './audio.js?v=real11';
import { initAudioViz } from './audioViz.js?v=real11';
import { resolveDailyParams, renderDailyLabel } from './dailyPlanet.js?v=real11';
import { initTerminal } from './terminal.js?v=real11';
import { initWeatherUI } from './weather.js?v=real11';
import { initVolcano } from './volcano.js?v=real11';
import { captureBaseline as captureStormBaseline } from './stormLighting.js?v=real11';
import { initChromePanel } from './chromePanel.js?v=real11';
import { renderContent } from './content.js?v=real11';

// Populate the publications and projects lists before any zone activates,
// so the staggered reveal sees fully-built mount points. Runs in both the
// full 3D view and the reduced (no-WebGL) reviewer view.
renderContent();

// Reviewer mode: skip all 3D init when active (opt-in via press-R or set
// automatically on WebGL context-creation failure). The toggle button is
// still attached so the user can exit back to the 3D view.
if (isReviewerActive()) {
    try { initReviewerUI(); } catch (e) { console.warn('reviewer UI init failed', e); }
    const loader = document.getElementById('loading-screen');
    if (loader) loader.remove();
    const header = document.getElementById('site-header');
    if (header) header.classList.add('revealed');
} else {

// --- Wordmark character reveal ---
(function initWordmarkReveal() {
    const h1 = document.querySelector('#site-header h1.display--hero');
    if (!h1) return;
    const text = h1.textContent;
    h1.innerHTML = [...text].map((ch, i) =>
        ch === ' ' ? ' ' : `<span class="char" style="--char-i:${i}">${ch}</span>`
    ).join('');
})();

// --- Parallax shift on zone titles ---
(function initZoneParallax() {
    const zones = document.querySelectorAll('.zone');
    zones.forEach((zone) => {
        zone.addEventListener('scroll', () => {
            zone.style.setProperty('--scroll-y', zone.scrollTop + 'px');
        }, { passive: true });
    });
})();

// Init order matters — each module populates the shared state
try { resolveDailyParams(); } catch (e) { console.warn('daily planet resolve failed', e); }
initScene();
initLighting();
// Capture clear-weather light values so the storm cross-fade has a
// faithful anchor for t=0. Must run AFTER initLighting() so the refs exist.
try { captureStormBaseline(); } catch (e) { console.warn('storm baseline capture failed', e); }
initTerrain();
initOcean();
initGlass();
initEffects();
initVolcano();
initControls();
initZones();

// --- Real-Scene Approach ---
// Disable scroll navigation during approach. Camera starts at (0, 120, 600)
// inside the real scene and flies to the home zone over 5s. No temporary
// objects — everything visible is the actual scene geometry.
setApproachActive(true);

// Start the render loop up front so the scene is already drawing (behind
// the still-opaque loader) before the fly-in kicks off.
startAnimateLoop();

// Hold the fly-in until the water ripple map has decoded, so the ocean is
// already rippled on the very first visible frame. Without it the water
// shader samples an empty normal map for a beat and the surface catches
// the reflection as a hard squarish slab before it settles into waves.
// Never stall: a fallback starts the approach even if the texture is slow.
let _approachStarted = false;
function beginApproach() {
    if (_approachStarted) return;
    _approachStarted = true;

    // Make the loading screen transparent so the real scene is visible
    // behind the title card during the approach.
    const loadingScreenInit = document.getElementById('loading-screen');
    if (loadingScreenInit) loadingScreenInit.classList.add('approach-active');

    // Begin the approach animation on the real scene camera
    startApproach(state.camera, state.scene, () => {
    // --- Approach complete: verify scene readiness before revealing ---
    function sceneReady() {
        return !!(state.sunOrb && state.moonOrb && state.gateway && state.water);
    }

    function revealScene() {
        // Re-enable scroll navigation
        setApproachActive(false);

        // Approach over: restore the tight far plane. The 6000u frustum
        // exists only so spaceEnv renders during the fly-in; leaving it
        // active wastes depth precision at the glass/water/seabed
        // contact rings (this reset was documented but never happened).
        // 1600 (was 1000): the sister worlds orbit the star out to
        // ~1450u from the origin and were hard-clipping out of existence
        // on the far half of their orbits. near 0.5 -> 1600 is still a
        // comfortable depth ratio for the contact rings.
        state.camera.far = 1600;
        state.camera.updateProjectionMatrix();

        // Fade out the loading overlay container. The loading title already
        // faded to 0 during the approach (3.2–3.8s), so this transition just
        // drives the container's opacity for a clean DOM cleanup.
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.remove();
            }, { once: true });
            setTimeout(() => {
                if (loadingScreen.parentNode) loadingScreen.remove();
            }, 1200);
        }

        // Reveal in two coordinated waves so the chrome doesn't trickle in
        // element-by-element: the MAIN layer lands together, then the
        // ACCENT utilities together a beat later.
        //
        // Wave 1 — MAIN: the masthead .revealed class fires the per-char
        // wipe on the wordmark and brings in the nav, credential and hero
        // lockup; the section dots and the specimen id come with it.
        setTimeout(() => {
            const header = document.getElementById('site-header');
            if (header) header.classList.add('revealed');
            const dots = document.getElementById('zone-dots');
            if (dots) dots.classList.add('revealed');
            if (FEATURES.dailyPlanet) {
                try { renderDailyLabel(); } catch (e) { console.warn('daily label failed', e); }
            }
            initEasterEggs();
        }, 300);

        // Wave 2 — ACCENT: the bottom-left utility rail (audio, reader-view
        // toggle, weather) and the unified chrome panel that adopts them,
        // all together once the main layer has landed.
        setTimeout(() => {
            if (FEATURES.audio) {
                // Mute toggle replaced by the audio tile in the chrome rail
                // (js/chromePanel.js drives setMuted directly).
                try { initAudio(); initAudioViz(); } catch (e) { console.warn('audio init failed', e); }
                // Terminal disabled — restore by uncommenting:
                // try { initTerminal(); } catch (e) { console.warn('terminal init failed', e); }
            }
            // Discreet reader-view toggle (bottom-right) so the no-WebGL /
            // one-page reading view is reachable as an intentional option.
            try { initReviewerUI(); } catch (e) { console.warn('reviewer UI init failed', e); }
            try { initWeatherUI(); } catch (e) { console.warn('weather UI init failed', e); }
            // Adopt the dynamically-created chrome widgets into the
            // unified panel AFTER their inits have appended them to
            // body. The MutationObserver inside also catches late
            // insertions (e.g. audio-viz unhides on first unmute).
            try { initChromePanel(); } catch (e) { console.warn('chrome panel init failed', e); }
        }, 1200);

        // The scanning text triggers from the dots reveal (inline script in index.html)
    }

    let revealed = false;
    function revealOnce() {
        if (revealed) return;
        revealed = true;
        revealScene();
    }

    if (sceneReady()) {
        revealOnce();
    } else {
        // Poll until all critical objects exist — but never stall forever.
        // If a GLB load or other async init is slow, force reveal after 3s
        // so the viewer isn't stuck staring at a dark screen.
        function pollReady() {
            if (revealed) return;
            if (sceneReady()) revealOnce();
            else requestAnimationFrame(pollReady);
        }
        pollReady();
        setTimeout(revealOnce, 3000);
    }
    });
}

// Kick off the fly-in as soon as the ocean's ripple map is ready (or after
// a short fallback so it never hangs on a slow texture fetch).
if (state.waterNormalsReady) {
    beginApproach();
} else {
    state._onWaterReady = beginApproach;
    setTimeout(beginApproach, 1500);
}

}  // end of full-3D branch (top-of-file reviewer-mode short-circuit)

