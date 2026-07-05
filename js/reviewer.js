// Reviewer mode — press R (or click the bottom-right toggle) to collapse the
// 3D scene and render all zones as a single stacked column. Content lives in
// one place; this is a view, not a second HTML file.
//
// Two entry paths:
//   1. localStorage['reviewer'] === '1' — opt-in from a prior visit, OR auto-
//      set by scene.js on WebGL context-creation failure.
//   2. Key "R" (no modifiers, not inside an input) — toggles state and reloads.
//
// The feature flag gates only the keyboard shortcut. The toggle button + the
// localStorage-driven activation are always live so the WebGL-fail fallback
// works even when the flag is off.

import { FEATURES } from './features.js?v=real11';

const KEY = 'reviewer';

export function isReviewerActive() {
    try { return localStorage.getItem(KEY) === '1'; }
    catch { return false; }
}

export function setReviewerActive(on) {
    try {
        if (on) localStorage.setItem(KEY, '1');
        else    localStorage.removeItem(KEY);
    } catch {}
    location.reload();
}

const ZONE_INDEX_TO_ID = [
    'zone-default', 'zone-about', 'zone-research', 'zone-publications',
    'zone-connect',
];

function wireReviewerNav() {
    const items = document.querySelectorAll('.section-nav--masthead .section-nav__item');
    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            const idx = parseInt(item.dataset.zone, 10);
            const targetId = ZONE_INDEX_TO_ID[idx];
            const target = targetId && document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                items.forEach(it => it.classList.remove('active'));
                item.classList.add('active');
            }
        }, true);
    });
}

export function initReviewerUI() {
    const active = isReviewerActive();
    if (active) {
        document.documentElement.classList.add('reviewer-mode');
        wireReviewerNav();
    }

    if (FEATURES.reviewerMode) {
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'r' && e.key !== 'R') return;
            if (e.target instanceof Element && e.target.matches('input, textarea, [contenteditable]')) return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            setReviewerActive(!isReviewerActive());
        });
    }

    const btn = document.createElement('button');
    btn.id = 'reviewer-toggle';
    btn.type = 'button';
    btn.textContent = active ? 'exit reader view' : 'reader view';
    btn.addEventListener('click', () => setReviewerActive(!isReviewerActive()));
    btn.style.opacity = '0';
    document.body.appendChild(btn);
    requestAnimationFrame(() => requestAnimationFrame(() => { btn.style.opacity = ''; }));
}
