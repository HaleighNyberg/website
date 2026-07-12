// Main entry point
import * as THREE from 'three';
import { state } from './config.js?v=real18';
import { initScene } from './scene.js?v=real18';
import { initLighting } from './lighting.js?v=real18';
import { initTerrain } from './terrain.js?v=real18';
import { initOcean } from './ocean.js?v=real18';
import { initGlass } from './glass.js?v=real18';
import { initEffects } from './effects.js?v=real18';
import { initControls } from './controls.js?v=real18';
import { initZones, setApproachActive } from './zones.js?v=real18';
import { startAnimateLoop } from './animate.js?v=real18';
import { startApproach } from './loadingApproach.js?v=real18';
import { initEasterEggs } from './easterEggs.js?v=real18';
import { isReviewerActive, initReviewerUI, setReviewerActive } from './reviewer.js?v=real18';
import { FEATURES } from './features.js?v=real18';
import { initAudio } from './audio.js?v=real18';
import { initAudioViz } from './audioViz.js?v=real18';
import { resolveDailyParams, renderDailyLabel } from './dailyPlanet.js?v=real18';
import { initTerminal } from './terminal.js?v=real18';
import { initWeatherUI } from './weather.js?v=real18';
import { initVolcano } from './volcano.js?v=real18';
import { captureBaseline as captureStormBaseline } from './stormLighting.js?v=real18';
import { initChromePanel } from './chromePanel.js?v=real18';
import { renderContent } from './content.js?v=real18';

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

// Type the hero statement in character-by-character once the main layer
// reveals. The $ prompt and blinking cursor are CSS pseudo-elements, so
// this only drives the text between them; reduced-motion users get the
// full line at once.
function typeHeroStatement() {
    const el = document.querySelector('.home-hero__statement');
    if (!el || el.dataset.typed) return;
    el.dataset.typed = '1';
    const full = el.textContent;
    const reduce = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    el.textContent = '';
    let i = 0;
    (function step() {
        el.textContent = full.slice(0, i);
        if (i++ < full.length) {
            // Jittered cadence so it reads like typing, not a metronome.
            setTimeout(step, 26 + Math.random() * 32);
        }
    })();
}

// --- No Man's Sky–style warp load-in ---
// The intro holds far out in deep space at warp (js/warp.js star-streaks)
// while textures download — the island never zooms until it's fully loaded.
// A mono HUD readout shows real progress; on ready it drops out of warp and
// swoops into the home framing over a complete world. (js/loadingApproach.js)
setApproachActive(true);
// Hide the content overlay (incl. the zone blueprint grid) during the flight
// so no site UI leaks over the galaxy; revealScene() lifts it.
document.documentElement.classList.add('intro-active');
startAnimateLoop();

// Real asset-ready signal. Every TextureLoader reports to the default
// manager; loadHeightmap registers the heightmaps; the deferred gateway uses
// a private manager so it can't hold this. onLoad fires once the first-view
// assets are all in; onProgress drives the HUD percentage.
let _assetsReady = false;
let _loadPct = 0;
THREE.DefaultLoadingManager.onProgress = (url, loaded, total) => {
    if (total) _loadPct = Math.max(_loadPct, Math.min(99, Math.round((loaded / total) * 100)));
};
THREE.DefaultLoadingManager.onLoad = () => { _assetsReady = true; _loadPct = 100; };
// Safety net: never wait past this even if a load never resolves.
setTimeout(() => { _assetsReady = true; }, 24000);

// Skip the flight (snap straight home) for returning visitors, reduced-motion
// users, and data-saver connections; ?intro=1 forces the full flight.
const _forceIntro = new URLSearchParams(location.search).get('intro') === '1';
let _introSeen = false;
try { _introSeen = localStorage.getItem('introSeen') === '1'; } catch (e) {}
const _reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const _saveData = !!(navigator.connection && navigator.connection.saveData);
const _skipIntro = _forceIntro ? false : (_introSeen || _reduceMotion || _saveData);

// Reveal the finished site once the flight lands.
function revealScene() {
    // Deferred heavyweights (the gateway station) hold their scene
    // insertion on this flag so their GPU uploads can never stutter the
    // flight.
    state._introDone = true;
    setApproachActive(false);
    document.documentElement.classList.remove('intro-active');
    try { localStorage.setItem('introSeen', '1'); } catch (e) {}
    // The far plane stays at 9000: the resting sky's star shell
    // (starShell.js) is real geometry out to ~7000, so the deep-space
    // frustum is now permanent, not intro-only.
    state.camera.far = 9000;
    state.camera.updateProjectionMatrix();

    // MAIN wave: masthead wordmark wipe + nav + dots + hero + specimen id.
    setTimeout(() => {
        const header = document.getElementById('site-header');
        if (header) header.classList.add('revealed');
        const dots = document.getElementById('zone-dots');
        if (dots) dots.classList.add('revealed');
        if (FEATURES.dailyPlanet) {
            try { renderDailyLabel(); } catch (e) { console.warn('daily label failed', e); }
        }
        initEasterEggs();
        setTimeout(typeHeroStatement, 700);
    }, 300);

    // ACCENT wave: bottom-left utility rail + unified chrome panel.
    setTimeout(() => {
        if (FEATURES.audio) {
            try { initAudio(); initAudioViz(); } catch (e) { console.warn('audio init failed', e); }
        }
        try { initReviewerUI(); } catch (e) { console.warn('reviewer UI init failed', e); }
        try { initWeatherUI(); } catch (e) { console.warn('weather UI init failed', e); }
        try { initChromePanel(); } catch (e) { console.warn('chrome panel init failed', e); }
    }, 1200);
}

// Mono HUD telemetry ("◦ loading N%") plus an escape hatch to the lightweight
// text version. Both appear only if the load actually takes a beat (fast
// connections never see them); driven by the real load percentage; retired
// the moment we drop into the system.
const _hud = document.getElementById('approach-telemetry');
let _hudTick = null;
let _liteLink = null;
function startHud() {
    if (_skipIntro) return;
    setTimeout(() => {
        if (_assetsReady) return;   // load already done — don't flash any UI
        if (_hud) {
            _hud.classList.add('on');
            _hudTick = setInterval(() => {
                if (_hud) _hud.textContent = '◦ loading ' + _loadPct + '%';
            }, 90);
        }
        // Offer an immediate jump to the reduced text version — for a weak
        // machine or an impatient visitor. It reloads into that view; the
        // 3D never has to finish for them.
        _liteLink = document.createElement('button');
        _liteLink.id = 'skip-to-lite';
        _liteLink.type = 'button';
        _liteLink.textContent = 'skip to text view →';
        _liteLink.addEventListener('click', (e) => {
            e.stopPropagation();
            setReviewerActive(true);
        });
        document.body.appendChild(_liteLink);
        requestAnimationFrame(() => { if (_liteLink) _liteLink.classList.add('on'); });
    }, 700);
}
function stopHud() {
    if (_hudTick) { clearInterval(_hudTick); _hudTick = null; }
    if (_hud) {
        _hud.classList.remove('on');
        setTimeout(() => { if (_hud.parentNode) _hud.remove(); }, 600);
    }
    if (_liteLink) {
        const l = _liteLink; _liteLink = null;
        l.classList.remove('on');
        setTimeout(() => { if (l.parentNode) l.remove(); }, 600);
    }
}
startHud();

// Kick off the flight (sets the camera to the deep-space start), then fade
// the black cover out to reveal it already at warp.
const _flight = startApproach(state.camera, state.scene, revealScene, {
    isReady: () => _assetsReady,
    skip: _skipIntro,
    onDropout: stopHud,
});

// Skip on interaction — click / scroll / any key drops out of warp the moment
// the assets are ready. Listeners self-remove after firing.
if (!_skipIntro && _flight) {
    const _skip = () => {
        _flight.requestSkip();
        window.removeEventListener('pointerdown', _skip);
        window.removeEventListener('wheel', _skip);
        window.removeEventListener('keydown', _skip);
    };
    window.addEventListener('pointerdown', _skip, { passive: true });
    window.addEventListener('wheel', _skip, { passive: true });
    window.addEventListener('keydown', _skip);
}

const _cover = document.getElementById('loading-screen');
if (_cover) {
    // Two chained rAFs: the first render compiles all the flight shaders
    // and can block the main thread for over a second — but the CSS cover
    // fade runs on the compositor and would sail through it, revealing a
    // stale black canvas that then pops to the sky. Waiting for a
    // genuinely painted frame keeps the fade over live pixels.
    requestAnimationFrame(() => requestAnimationFrame(() => {
        _cover.classList.add('fade-out');
        setTimeout(() => { if (_cover.parentNode) _cover.remove(); }, 1000);
    }));
}

}  // end of full-3D branch (top-of-file reviewer-mode short-circuit)

