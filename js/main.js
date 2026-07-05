// Main entry point
import { state } from './config.js?v=real9';
import { initScene } from './scene.js?v=real9';
import { initLighting } from './lighting.js?v=real9';
import { initTerrain } from './terrain.js?v=real9';
import { initOcean } from './ocean.js?v=real9';
import { initGlass } from './glass.js?v=real9';
import { initEffects } from './effects.js?v=real9';
import { initControls } from './controls.js?v=real9';
import { initZones, setApproachActive } from './zones.js?v=real9';
import { startAnimateLoop } from './animate.js?v=real9';
import { startApproach } from './loadingApproach.js?v=real9';
import { initEasterEggs } from './easterEggs.js?v=real9';
import { isReviewerActive, initReviewerUI } from './reviewer.js?v=real9';
import { FEATURES } from './features.js?v=real9';
import { initAudio } from './audio.js?v=real9';
import { initAudioViz } from './audioViz.js?v=real9';
import { resolveDailyParams, renderDailyLabel } from './dailyPlanet.js?v=real9';
import { initTerminal } from './terminal.js?v=real9';
import { initWeatherUI } from './weather.js?v=real9';
import { initVolcano } from './volcano.js?v=real9';
import { captureBaseline as captureStormBaseline } from './stormLighting.js?v=real9';
import { initChromePanel } from './chromePanel.js?v=real9';
import { renderContent } from './content.js?v=real9';

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

// Make the loading screen transparent so the real scene is visible behind
// the title card during the approach.
const loadingScreenInit = document.getElementById('loading-screen');
if (loadingScreenInit) {
    loadingScreenInit.classList.add('approach-active');
}

// Start the render loop BEFORE the approach so the scene draws while flying in
startAnimateLoop();

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

        // Masthead (name + nav) fades in 300ms after approach completion.
        // The .revealed class triggers the per-char clip-path wipe on the
        // wordmark.
        setTimeout(() => {
            const header = document.getElementById('site-header');
            if (header) header.classList.add('revealed');
            initEasterEggs();
        }, 300);

        // 2. Dots + CV button appear 1.5s after masthead
        setTimeout(() => {
            const dots = document.getElementById('zone-dots');
            if (dots) dots.classList.add('revealed');
            if (FEATURES.dailyPlanet) {
                try { renderDailyLabel(); } catch (e) { console.warn('daily label failed', e); }
            }
        }, 1800);

        // 3. Audio + reviewer toggle fade in after the CV button has
        //    finished its flicker-in, so the chrome builds up in a clean
        //    left-column reveal instead of all four elements popping
        //    simultaneously.
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
        }, 2800);

        // 4. The scanning text triggers from the dots reveal (inline script in index.html)
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

}  // end of full-3D branch (top-of-file reviewer-mode short-circuit)

