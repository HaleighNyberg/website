// Daily planet: deterministic per-day variations to non-load-bearing scene
// parameters. The audit-constrained scope (see plan §Feature 7) excludes
// everything that would break zone camera composition — sun position,
// moon orbit, shadow frustum, ORB_RADIUS, SUN_DIR, any camera pose.
//
// Within those limits we tint rim/hemisphere light, vary corona opacity
// multipliers, and nudge the terrain pulse tempo. Everything is resolved
// once at startup and cached on the window so lighting.js and effects.js
// can read without dragging in this module.

import * as THREE from 'three';
import { mulberry32, dayOfYearSeed, pick, lerp } from './prng.js?v=real18';
import { FEATURES } from './features.js?v=real18';

const RIM_PALETTE = [
    0xb4d2ee,
    0xc8d8e8,
    0xa8c6e0,
    0xd2dde8,
    0xbdd1e4,
];

const HEMI_SKY_PALETTE = [
    0x2a4c6e,
    0x244864,
    0x2e5276,
    0x1f4060,
    0x26466a,
];

const HEMI_GROUND_PALETTE = [
    0x080c10,
    0x0b0f14,
    0x0a0c0e,
    0x0c1218,
    0x090d12,
];

export function resolveDailyParams() {
    if (!FEATURES.dailyPlanet) return null;

    const reducedMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seed = reducedMotion ? 42 : dayOfYearSeed();
    const rng = mulberry32(seed);

    const params = {
        seed,
        rimColor:     pick(rng, RIM_PALETTE),
        hemiSky:      pick(rng, HEMI_SKY_PALETTE),
        hemiGround:   pick(rng, HEMI_GROUND_PALETTE),
        sunCoronaMul: lerp(0.9, 1.15, rng()),
        moonCoronaMul: lerp(0.85, 1.2, rng()),
        pulseScale:   lerp(0.8, 1.25, rng()),
        label:        formatLabel(seed),
    };

    window.__DAILY_PARAMS = params;
    return params;
}

// Specimen id shown in the hero — a G-catalogue style tag, rolled fresh
// each time the island is regenerated.
function specimenId() {
    return 'G2026' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
}

function formatLabel(seed) {
    return specimenId();
}

export function getDailyColor(kind) {
    const p = window.__DAILY_PARAMS;
    if (!p) return null;
    const key = { rim: 'rimColor', hemiSky: 'hemiSky', hemiGround: 'hemiGround' }[kind];
    if (!key) return null;
    return new THREE.Color(p[key]);
}

export function getDailyScalar(kind, fallback = 1) {
    const p = window.__DAILY_PARAMS;
    if (!p) return fallback;
    return p[kind] ?? fallback;
}

export function renderDailyLabel() {
    const p = window.__DAILY_PARAMS;
    if (!p) return;
    // Only populate the inline slot inside the masthead credential — if
    // that slot isn't present, do nothing. The fallback floating chip
    // used to collide with the audio visualizer, so it's gone.
    const inline = document.getElementById('daily-label-inline');
    if (!inline) return;
    inline.textContent = p.label;
    // Click the specimen id to regenerate the island + roll a new id.
    inline.style.cursor = 'pointer';
    inline.style.pointerEvents = 'auto';
    inline.title = 'regenerate island';
    if (!inline.dataset.regenWired) {
        inline.dataset.regenWired = '1';
        inline.addEventListener('click', () => {
            try { if (window.__regenIsland) window.__regenIsland(); } catch {}
            p.label = specimenId();
            inline.textContent = p.label;
        });
    }
}
