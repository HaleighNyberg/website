// loadingApproach.js — Real-scene approach (no fake particles)
//
// Camera starts at (0, 120, 600) — far enough that the dish is a speck,
// close enough that the sun is a visible glow and the orbital ring arc is
// barely perceptible. Flies to the home zone pose (130, 70, 130) lookAt
// (-8, -2, 0) over 5.0 seconds using a single quintic smoothstep (C2
// continuous, zero velocity at both endpoints). Everything the viewer sees
// during the approach is the REAL scene — no temporary objects, no mode
// switch, no "fake to real" seam.
//
// Usage:
//   import { startApproach } from './loadingApproach.js?v=real17';
//   startApproach(camera, scene, () => { /* scene ready */ });

import * as THREE from 'three';

// --- Home zone target (must match ZONE_ORDER[0] in zones.js) ---
const HOME_POS  = new THREE.Vector3(84, 33, 78);
const HOME_LOOK = new THREE.Vector3(2, 5, -4);

// --- Approach start pose ---
const START_POS  = new THREE.Vector3(0, 120, 600);
const START_LOOK = new THREE.Vector3(0, 0, 0);

const DURATION = 5000; // ms
// Approach LOCKED to the classic high fly-in (owner choice). The
// cinematic layer is now the staged build-in (js/buildIn.js): the
// dish, then the island, then the filling ocean materialize during
// the flight.


// --- Title card timing (ms) ---
const TITLE_FADE_IN_START  = 800;
const TITLE_FADE_IN_END    = 1200;
const TITLE_KICKER_START   = 99999; // disabled — credential line is in the masthead now
const TITLE_KICKER_END     = 99999;
const TITLE_FADE_OUT_START = 3200;
const TITLE_FADE_OUT_END   = 3800;

// --- Quintic smoothstep: 6t^5 - 15t^4 + 10t^3 ---
// C2 continuous, zero 1st and 2nd derivative at both endpoints.
function quintic(t) {
    const t3 = t * t * t;
    return t3 * (6 * t * t - 15 * t + 10);
}

// --- Title card DOM orchestration ---
function setupTitleCard() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return null;

    const nameEl    = loadingScreen.querySelector('.loading-name');
    const spinnerEl = loadingScreen.querySelector('.loading-spinner');
    const contentEl = loadingScreen.querySelector('.loading-content');

    if (spinnerEl) spinnerEl.style.display = 'none';

    if (nameEl) {
        // Letter-spacing matches the masthead .display--hero so the post-
        // approach FLIP morph to the top-left is a clean scale+translate
        // rather than an awkward letter-spacing interpolation.
        nameEl.style.cssText = `
            font-size: clamp(36px, 6vw, 72px);
            letter-spacing: 0.055em;
            opacity: 0;
            transition: none;
            text-shadow: 0 0 40px rgba(236, 231, 219, 0.18),
                         0 0 80px rgba(159, 212, 236, 0.1),
                         0 2px 4px rgba(0, 0, 0, 0.9);
        `;
    }

    if (contentEl) {
        contentEl.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            opacity: 1;
        `;
    }

    const kicker = document.createElement('span');
    kicker.className = 'loading-kicker';
    kicker.textContent = 'PhD Candidate \u00B7 Computational Astrobiology';
    kicker.style.cssText = `
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 500;
        font-size: clamp(10px, 1.2vw, 13px);
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: rgba(201, 195, 180, 0.8);
        opacity: 0;
        transition: none;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    `;
    if (contentEl) contentEl.appendChild(kicker);

    return { loadingScreen, nameEl, kicker, contentEl };
}

function updateTitleCard(elements, elapsed) {
    if (!elements) return;
    const { nameEl, kicker } = elements;

    if (nameEl) {
        // Loading title fades in at 0.8s, holds through the approach,
        // fades out at 3.2-3.8s. The masthead wordmark fades in on its
        // own timer in main.js revealScene — no morph.
        if (elapsed < TITLE_FADE_IN_START) {
            nameEl.style.opacity = '0';
        } else if (elapsed < TITLE_FADE_IN_END) {
            const t = (elapsed - TITLE_FADE_IN_START) / (TITLE_FADE_IN_END - TITLE_FADE_IN_START);
            nameEl.style.opacity = String(t * t);
        } else if (elapsed < TITLE_FADE_OUT_START) {
            nameEl.style.opacity = '1';
        } else if (elapsed < TITLE_FADE_OUT_END) {
            const t = (elapsed - TITLE_FADE_OUT_START) / (TITLE_FADE_OUT_END - TITLE_FADE_OUT_START);
            nameEl.style.opacity = String(1 - t);
        } else {
            nameEl.style.opacity = '0';
        }
    }

    if (kicker) {
        if (elapsed < TITLE_KICKER_START) {
            kicker.style.opacity = '0';
        } else if (elapsed < TITLE_KICKER_END) {
            const t = (elapsed - TITLE_KICKER_START) / (TITLE_KICKER_END - TITLE_KICKER_START);
            kicker.style.opacity = String(t * 0.7);
        } else if (elapsed < TITLE_FADE_OUT_START) {
            kicker.style.opacity = '0.7';
        } else if (elapsed < TITLE_FADE_OUT_END) {
            const t = (elapsed - TITLE_FADE_OUT_START) / (TITLE_FADE_OUT_END - TITLE_FADE_OUT_START);
            kicker.style.opacity = String(0.7 * (1 - t));
        } else {
            kicker.style.opacity = '0';
        }
    }
}

/**
 * Start the real-scene approach animation.
 *
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.Scene} scene — unused (kept for API compat)
 * @param {Function} onComplete — called when camera arrives at home zone
 */
// --- Progress bar helpers ---
function getProgressFill() {
    return document.getElementById('loading-progress-fill');
}

function updateProgressBar(fill, elapsed) {
    if (!fill) return;
    // Ramp from 0% to 80% over the first 3 seconds, then hold
    const RAMP_DURATION = 3000;
    const pct = Math.min(80, (elapsed / RAMP_DURATION) * 80);
    fill.style.width = pct + '%';
}

function completeProgressBar(fill) {
    if (!fill) return;
    fill.style.width = '100%';
}

export function startApproach(camera, scene, onComplete) {
    // Set initial camera pose
    camera.position.copy(START_POS);
    camera.lookAt(START_LOOK);

    const titleElements = setupTitleCard();
    const progressFill = getProgressFill();
    const startTime = performance.now();

    // Reusable vectors for per-frame lookAt lerp
    const lerpTarget = new THREE.Vector3();

    function tick() {
        const elapsed = performance.now() - startTime;
        const rawT = Math.min(1.0, elapsed / DURATION);
        const p = quintic(rawT);

        // Interpolate position
        camera.position.lerpVectors(START_POS, HOME_POS, p);

        // Interpolate lookAt target and apply
        lerpTarget.lerpVectors(START_LOOK, HOME_LOOK, p);
        camera.lookAt(lerpTarget);


        // Title card
        updateTitleCard(titleElements, elapsed);

        // Update progress bar
        updateProgressBar(progressFill, elapsed);

        if (rawT < 1.0) {
            requestAnimationFrame(tick);
        } else {
            // Snap to exact final pose
            camera.position.copy(HOME_POS);
            camera.lookAt(HOME_LOOK);


            // Snap progress to 100%
            completeProgressBar(progressFill);

            if (onComplete) onComplete();
        }
    }

    requestAnimationFrame(tick);
}
