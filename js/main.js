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
import { initWeather } from './weather.js?v=real18';
import { initVolcano } from './volcano.js?v=real18';
import { captureBaseline as captureStormBaseline } from './stormLighting.js?v=real18';
import { initChromePanel } from './chromePanel.js?v=real18';
import { renderContent } from './content.js?v=real18';
import { initAdaptiveQuality } from './quality.js?v=real18';

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
THREE.DefaultLoadingManager.onLoad = () => {
    _assetsReady = true;
    _loadPct = 100;
    // Releases the gateway download (lighting.js) — deferred only this far so it
    // never competes with the first-view textures for bandwidth.
    state._firstViewLoaded = true;
    warmShaders();
};
// Safety net: never wait past this even if a load never resolves.
setTimeout(() => {
    if (!_assetsReady) {
        _assetsReady = true;
        state._firstViewLoaded = true;
        warmShaders();
    }
}, 24000);

// Shader-ready signal — the other half of "don't fly until the world is real".
//
// A material's program is not compiled when the object is created; it is
// compiled the first time the object is actually RENDERED. During the deep-space
// hold the island, dish and water are outside the frustum, so they compile at
// the exact moment they come into view — three blocks on the driver
// (getProgramParameter) and the swoop stutters just as the dish appears. The
// warm render under the cover only ever warmed what was on screen at boot.
//
// compileAsync walks the whole graph and builds every program up front, using
// KHR_parallel_shader_compile so the wait happens off the main thread. Then hold
// the warp until it lands, exactly as we already do for textures.
// The warm MUST run with the composer's render target bound. three keys a
// program on, among other things, whether tone mapping is applied — and tone
// mapping is skipped whenever the destination is a render target rather than the
// canvas. The composer renders into a target and never to the canvas, so warming
// with nothing bound compiles the SCREEN variant of every shader: a full set of
// programs the renderer then never uses, while the real ones still compile the
// moment the island swings into view. Bind the target the RenderPass will
// actually use and the warmed programs are the ones we need.
// Runs on asset-ready, NOT at boot: the island's geometry is built inside the
// heightmap decode callback, so at boot those meshes are not in the graph yet
// and there is nothing to compile for them.
let _shadersReady = false;
let _warmed = false;
function warmShaders() {
    if (_warmed) return;
    _warmed = true;
    const done = () => { _shadersReady = true; };
    try {
        const r = state.renderer;
        const target = state.composer ? state.composer.renderTarget1 : null;
        if (target) r.setRenderTarget(target);
        // compile() builds the programs synchronously; compileAsync only defers
        // the WAIT for the driver to finish linking, so the target only has to be
        // bound across this call.
        const pending = r.compileAsync
            ? r.compileAsync(state.scene, state.camera)
            : Promise.resolve(r.compile(state.scene, state.camera));
        if (target) r.setRenderTarget(null);
        pending.then(done, done);
    } catch (e) {
        console.warn('shader warm failed', e);
        done();
    }
}
// Safety net: a driver that never reports link completion must not strand the
// visitor at warp forever.
setTimeout(() => { _shadersReady = true; }, 30000);

// The gateway (lighting.js) now attaches, uploads and compiles during the hold
// rather than after the landing, and reports _gatewayWarm once its fade has
// finished — the fade's last act restores `transparent`, which rebuilds every
// one of its programs. Holding the warp for it keeps the swoop clean.
//
// But it is 2.8 MB, and nobody should sit at warp watching a station download.
// Give it a bounded grace period past the first-view assets; if it misses that,
// stop waiting and let the flight go. lighting.js then holds the station back
// until the landing on its own, so a late arrival can never attach mid-swoop —
// which would be worse than the stutter we are removing.
const _gatewayGrace = () => setTimeout(() => { state._gatewayWarm = true; }, 5000);
if (state._firstViewLoaded) _gatewayGrace();
else {
    const _g = setInterval(() => {
        if (state._firstViewLoaded) { clearInterval(_g); _gatewayGrace(); }
    }, 100);
}

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
        try { initWeather(); } catch (e) { console.warn('weather init failed', e); }
        try { initChromePanel(); } catch (e) { console.warn('chrome panel init failed', e); }
        // Measure the frame rate on the machine actually in front of us and
        // throttle the repeat passes if it is struggling. Never fires on a
        // machine that is coping.
        try { initAdaptiveQuality(); } catch (e) { console.warn('adaptive quality failed', e); }
    }, 1200);
}

// Mono HUD telemetry ("◦ loading N%") plus an escape hatch to the lightweight
// text version. Both appear only if the load actually takes a beat (fast
// connections never see them); driven by the real load percentage; retired
// the moment we drop into the system.
const _hud = document.getElementById('approach-telemetry');
let _hudTick = null;
let _liteLink = null;
// The flight now holds for three things, not one: the textures, the shader warm,
// and the station. The readout has to span all three or it sits at "100%" while
// the visitor is still parked at warp — and the HUD has to appear whenever ANY of
// them is outstanding, not just the textures, or a fast connection gets a silent
// hold with no indicator and no way out.
function _overallPct() {
    let p = Math.round(Math.min(100, _loadPct) * 0.75);   // textures are the bulk of it
    if (_assetsReady) p = Math.max(p, 75);
    if (_shadersReady) p = Math.max(p, 90);
    if (state._gatewayWarm) p = 100;
    return Math.min(p, 100);
}
function _stillHolding() {
    return !(_assetsReady && _shadersReady && state._gatewayWarm);
}
function startHud() {
    if (_skipIntro) return;
    setTimeout(() => {
        if (!_stillHolding()) return;   // everything already in — don't flash any UI
        if (_hud) {
            _hud.classList.add('on');
            _hudTick = setInterval(() => {
                if (_hud) _hud.textContent = '◦ loading ' + _overallPct() + '%';
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
    isReady: () => {
        const ready = _assetsReady && _shadersReady && !!state._gatewayWarm;
        // Tell lighting.js the flight has been let go, so a station that arrives
        // from here on waits for the landing instead of attaching mid-sweep.
        if (ready) state._introReleased = true;
        return ready;
    },
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

