// Zone system — scroll-driven navigation with smooth camera transitions
import * as THREE from 'three';
import { state } from './config.js?v=real13';

// --- Ordered zone sequence (scroll order) ---
// EDITORIAL LAYOUT: Every non-home zone has a 40% right-side content
// column, so the 3D scene composes within the LEFT 60% of the viewport.
// The subject (island + dish) must therefore render roughly at 30%
// viewport width (the center of the left 60%), not at 50%. To achieve
// this, each lookAt is offset in the camera's local +right direction
// from the island origin — pushing the subject LEFT in frame while
// keeping the camera itself close to its previous pose. The default
// (home) zone stays full-width and is left unchanged.
// See docs/SCENE_GRAPH.md for the pose table.
const ZONE_ORDER = [
    {
        name: 'default',
        // 3/4 high hero — shows dish, mountain, sun+flare, orbital rings.
        camera: { x: 84, y: 33, z: 78 },
        lookAt: { x: 2, y: 5, z: -4 },
        orbit: { minDist: 40, maxDist: 320, minPolar: 0.3, maxPolar: 1.6 },
    },
    {
        name: 'about',
        // Top-down, island biased right
        camera: { x: 19, y: 159, z: -22 },
        lookAt: { x: 10, y: 0, z: -25 },
        orbit: { minDist: 40, maxDist: 200, minPolar: 0.05, maxPolar: 0.6 },
    },
    {
        name: 'research',
        // Close-up 3/4 view
        camera: { x: 17, y: 6, z: 15 },
        lookAt: { x: -18, y: 3, z: -20 },
        orbit: { minDist: 10, maxDist: 120, minPolar: 0.3, maxPolar: 1.6 },
    },
    {
        name: 'publications',
        // Side-on dramatic view
        camera: { x: 64, y: 6, z: -9 },
        lookAt: { x: -35, y: 0, z: -18 },
        orbit: { minDist: 20, maxDist: 130, minPolar: 0.5, maxPolar: 2.0 },
    },
    {
        name: 'connect',
        // CONNECT — under-dish, looking up through the glass (was the
        // Toolkit pose). The previous far-pullback view was removed at
        // user request.
        camera: { x: 81, y: -28, z: -40 },
        lookAt: { x: -11, y: 6, z: -20 },
        orbit: { minDist: 30, maxDist: 130, minPolar: 0.5, maxPolar: 2.2 },
    },
];

// --- Internal state ---
let _currentIndex = 0;
let _currentZone = null;
let _zoneElements = {};
let _isTransitioning = false;
let _scrollCooldown = false;

// --- Approach gate: blocks all scroll/keyboard/touch zone navigation ---
let _approachActive = false;
export function setApproachActive(active) { _approachActive = active; }
export function isApproachActive() { return _approachActive; }

// Camera animation
let _animating = false;
let _animStart = 0;
let _animDuration = 900; // ms — computed per-transition based on distance
const ANIM_DURATION_MIN = 700;  // ms — floor for very short moves
const ANIM_DURATION_MAX = 2200; // ms — cap for longest traversals
const ANIM_DURATION_SCALE = 5.5; // ms per unit of camera distance
let _fromPos = new THREE.Vector3();
let _toPos = new THREE.Vector3();
let _fromLook = new THREE.Vector3();
let _toLook = new THREE.Vector3();
let _currentLookAt = new THREE.Vector3(2, 5, -4); // must match ZONE_ORDER[0].lookAt

// Easing — cubic ease-in-out (no overshoot, no spring)
function easeInOut(t) {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// --- Zone activation/deactivation ---
function _activateZone(name) {
    if (_currentZone === name) return;

    // Deactivate current zone
    if (_currentZone && _zoneElements[_currentZone]) {
        _zoneElements[_currentZone].classList.remove('zone--active');
        // Reset scroll parallax custom property
        _zoneElements[_currentZone].style.removeProperty('--scroll-y');
    }

    _currentZone = name;

    // Hide the scanning text when leaving home zone
    const scanMsg = document.getElementById('home-typed-msg');
    if (scanMsg) scanMsg.style.opacity = name === 'default' ? '' : '0';

    // Activate new zone after crossfade gap
    if (name && _zoneElements[name]) {
        setTimeout(() => {
            if (_currentZone === name && _zoneElements[name]) {
                _zoneElements[name].classList.add('zone--active');

                // Set stagger indices on zone body children
                const body = _zoneElements[name].querySelector('.zone__body');
                if (body) {
                    Array.from(body.children).forEach((child, i) => {
                        child.style.setProperty('--stagger-index', i);
                    });
                }
            }
            _isTransitioning = false;
        }, 80); // short settle gap — camera has overshot and returned by now
    } else {
        _isTransitioning = false;
    }
}

// --- Animate camera to a zone ---
function _goToZone(index) {
    if (_approachActive) return; // Block during loading approach
    if (index < 0 || index >= ZONE_ORDER.length) return;
    if (_isTransitioning || _animating) return;

    _isTransitioning = true;
    _currentIndex = index;
    const zone = ZONE_ORDER[index];

    // OrbitControls permanently disabled — scroll handles navigation

    // Store start/end positions
    _fromPos.copy(state.camera.position);
    _toPos.set(zone.camera.x, zone.camera.y, zone.camera.z);
    _fromLook.copy(_currentLookAt);
    _toLook.set(zone.lookAt.x, zone.lookAt.y, zone.lookAt.z);

    // Duration: distance-proportional, clamped
    const moveDist = _fromPos.distanceTo(_toPos);
    _animDuration = Math.round(
        Math.max(ANIM_DURATION_MIN, Math.min(ANIM_DURATION_MAX, moveDist * ANIM_DURATION_SCALE))
    );

    _animStart = performance.now();
    _animating = true;

    // Deactivate current zone immediately (fade out)
    if (_currentZone && _zoneElements[_currentZone]) {
        _zoneElements[_currentZone].classList.remove('zone--active');
    }
}

// --- Night zone check ---
function _getNightFactor() {
    if (state.SUN_DIR) {
        const y = state.SUN_DIR.y;
        if (y < -0.3) return 1.0;
        if (y < -0.05) return (-0.05 - y) / 0.25;
    }
    return 0;
}

// --- Progress indicator update ---
function _updateProgress() {
    const fill = document.getElementById('zone-progress-fill');
    const label = document.getElementById('zone-progress-label');
    if (fill && label) {
        const pct = ((_currentIndex + 1) / ZONE_ORDER.length) * 100;
        fill.style.height = pct + '%';
        label.textContent = (_currentIndex + 1) + '/' + ZONE_ORDER.length;
    }
}

// --- Public API ---

export function initZones() {
    // Cache DOM references
    const names = ['default', 'research', 'publications', 'about', 'connect', 'night'];
    for (const name of names) {
        _zoneElements[name] = document.getElementById(`zone-${name}`);
    }

    // CV/Resume tab switching — class-only, styling lives in zones.css
    const cvTabs = document.querySelectorAll('.cv-tab');
    cvTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.stopPropagation();
            const target = tab.dataset.tab;
            cvTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.querySelectorAll('.cv-content').forEach(c => c.classList.remove('cv-content--active'));
            const content = document.getElementById('tab-' + target);
            if (content) content.classList.add('cv-content--active');
        });
    });

    // Scroll listener — wheel advances zone ONLY when the cursor is in
    // open space (over the 3D canvas). If the wheel event targets a
    // content panel, the home terminal, or any scrollable overlay, the
    // event is left alone for the native scroll. This kills the "scroll
    // past the end of content and fall through to next zone" behavior.
    let _scrollAccum = 0;
    const SCROLL_THRESHOLD = 80;
    window.addEventListener('wheel', (e) => {
        if (_animating || _isTransitioning) {
            _scrollAccum = 0;
            return;
        }

        // Short-circuit: wheel inside a content panel, the terminal, or
        // any scrollable overlay -> zone nav never fires, even if the
        // panel has no more content to scroll. Matches the zone itself
        // (not just .zone__body) so the zone's outer padding doesn't
        // leak clicks through. Also matches #site-header so scrolling
        // over the masthead doesn't swap POV.
        if (e.target instanceof Element) {
            if (e.target.closest(
                '.zone, .home-terminal, .audio-viz, .cv-viewer, ' +
                '.reviewer-footer, .reviewer-hero, .editor-panel, ' +
                '.cv-details, #site-header, #reviewer-toggle, ' +
                '.audio-toggle, #cv-btn-fixed, #audio-viz'
            )) {
                _scrollAccum = 0;
                return;
            }
        }

        _scrollAccum += e.deltaY;

        if (Math.abs(_scrollAccum) < SCROLL_THRESHOLD) return;

        const direction = _scrollAccum > 0 ? 1 : -1;
        _scrollAccum = 0;

        // Wrap-around: scrolling past the last zone loops back to home,
        // and scrolling up from home loops to the last zone. The dampened
        // altitude bump in updateZones() keeps long traversals from
        // arcing the camera into an awkward overhead pose.
        if (direction > 0) {
            _goToZone((_currentIndex + 1) % ZONE_ORDER.length);
        } else {
            _goToZone((_currentIndex - 1 + ZONE_ORDER.length) % ZONE_ORDER.length);
        }
    }, { passive: true });

    // Touch/swipe support for mobile
    let _touchStartY = 0;
    let _touchStartTime = 0;
    const SWIPE_THRESHOLD = 50;
    const SWIPE_TIME_LIMIT = 400; // ms
    window.addEventListener('touchstart', (e) => {
        _touchStartY = e.touches[0].clientY;
        _touchStartTime = performance.now();
    }, { passive: true });
    window.addEventListener('touchend', (e) => {
        if (_animating) return;
        const deltaY = _touchStartY - e.changedTouches[0].clientY;
        const elapsed = performance.now() - _touchStartTime;
        if (elapsed > SWIPE_TIME_LIMIT) return;
        if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;
        if (deltaY > 0) {
            _goToZone((_currentIndex + 1) % ZONE_ORDER.length);
        } else {
            _goToZone((_currentIndex - 1 + ZONE_ORDER.length) % ZONE_ORDER.length);
        }
    }, { passive: true });

    // Section nav — click labels to jump to zone
    const navItems = document.querySelectorAll('.section-nav__item');
    navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const idx = parseInt(item.dataset.zone, 10);
            if (!isNaN(idx) && idx < ZONE_ORDER.length) {
                _goToZone(idx);
            }
        });
    });

    // Keyboard arrow support
    window.addEventListener('keydown', (e) => {
        if (e.target instanceof Element && e.target.matches('input, textarea, [contenteditable]')) return;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            if (!_animating) _goToZone(Math.min(_currentIndex + 1, ZONE_ORDER.length - 1));
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            if (!_animating) _goToZone(Math.max(_currentIndex - 1, 0));
        }
    });

    // Explore hint timing is driven from main.js revealScene() — not here.
    // See the approach onComplete callback for the coordinated reveal chain.

    // Activate default zone on load
    _currentIndex = 0;
    setTimeout(() => {
        _activateZone('default');
        _updateProgress();
    }, 600);
}

// --- Connect-zone cinematic orbit ---
// When the camera is settled in the Connect zone, follow the moon's
// orbit at a trailing offset so the moon stays visible (bottom-right
// quadrant) and the camera always frames the dish. Smoothly blends in
// from wherever the static animation landed so the transition into
// orbit doesn't snap.
const CONNECT_ORBIT_R = 330;
const CONNECT_ORBIT_Y = 110;
// Trailing offset (radians, CW behind the moon). With camera at angle
// `moonAngle - TRAIL` and lookAt at the dish, the moon worldPos lands
// in the camera's right-front view-space quadrant → bottom-right of frame.
const CONNECT_TRAIL_OFFSET = 0.85;
const CONNECT_LOOK = new THREE.Vector3(0, 8, 0);
let _connectBlend = 0;              // 0..1 ease from static pose into orbit
let _connectFromPos = new THREE.Vector3();
let _connectFromLook = new THREE.Vector3();
let _connectBlendStartT = 0;
const CONNECT_BLEND_DURATION = 1.6; // seconds to ease into orbit

export function updateZones(camera) {
    // Handle camera animation
    if (_animating) {
        const elapsed = performance.now() - _animStart;
        const t = Math.min(1, elapsed / _animDuration);
        const eased = easeInOut(t);

        // Camera position: linear lerp between from and to, with easing
        camera.position.lerpVectors(_fromPos, _toPos, eased);

        // Altitude bump: parabolic Y offset peaking at t=0.5
        // Proportional to XZ distance so short moves get small bumps,
        // capped at 10u so long traversals (e.g. Connect → Home) don't
        // arc the camera into a weird overhead pose mid-transition.
        const xzDist = Math.sqrt(
            Math.pow(_toPos.x - _fromPos.x, 2) +
            Math.pow(_toPos.z - _fromPos.z, 2)
        );
        const bumpMax = Math.min(xzDist * 0.08, 10.0);
        const bump = bumpMax * 4 * eased * (1 - eased);
        camera.position.y += bump;

        // LookAt: linear lerp between from and to lookAt targets
        _currentLookAt.lerpVectors(_fromLook, _toLook, eased);
        camera.lookAt(_currentLookAt);

        if (t >= 1) {
            _animating = false;
            // Snap to exact target — no floating-point residue
            camera.position.copy(_toPos);
            _currentLookAt.copy(_toLook);
            camera.lookAt(_currentLookAt);

            // Activate zone content
            const zone = ZONE_ORDER[_currentIndex];
            if (_getNightFactor() > 0.7 && zone.name !== 'default') {
                _activateZone('night');
            } else {
                _activateZone(zone.name);
            }

            // Update section nav active state + aria-current
            const navItems = document.querySelectorAll('.section-nav__item');
            navItems.forEach((item) => {
                const idx = parseInt(item.dataset.zone, 10);
                if (idx === _currentIndex) {
                    item.classList.remove('leaving');
                    item.classList.add('active');
                    item.setAttribute('aria-current', 'true');
                } else if (item.classList.contains('active')) {
                    item.classList.add('leaving');
                    item.classList.remove('active');
                    item.removeAttribute('aria-current');
                    setTimeout(() => item.classList.remove('leaving'), 300);
                } else {
                    item.removeAttribute('aria-current');
                }
            });

            // Update progress indicator
            _updateProgress();
        }
        return;
    }

    // Settled state — apply the Connect cinematic orbit if applicable.
    if (_currentZone === 'connect' && state.moonOrb) {
        const elapsed = (typeof window !== 'undefined' && window._elapsed) || 0;

        // Camera follows the moon's angular position with a fixed trailing
        // offset, so the moon stays parked in the bottom-right quadrant
        // of the frame as the whole pair revolves around the dish.
        const moonPos = state.moonOrb.position;
        const moonAngle = Math.atan2(moonPos.z, moonPos.x);
        const camAngle = moonAngle - CONNECT_TRAIL_OFFSET;
        const orbitX = CONNECT_ORBIT_R * Math.cos(camAngle);
        const orbitZ = CONNECT_ORBIT_R * Math.sin(camAngle);
        const orbitY = CONNECT_ORBIT_Y + Math.sin(elapsed * 0.2) * 4;

        if (_connectBlend < 1) {
            // First frame in orbit: capture current pose as the blend
            // origin so the cinematic eases in instead of snapping.
            if (_connectBlend === 0) {
                _connectFromPos.copy(camera.position);
                _connectFromLook.copy(_currentLookAt);
                _connectBlendStartT = elapsed;
            }
            const t = Math.min(1, (elapsed - _connectBlendStartT) / CONNECT_BLEND_DURATION);
            // Smoothstep ease
            _connectBlend = t * t * (3 - 2 * t);
            camera.position.x = _connectFromPos.x + (orbitX - _connectFromPos.x) * _connectBlend;
            camera.position.y = _connectFromPos.y + (orbitY - _connectFromPos.y) * _connectBlend;
            camera.position.z = _connectFromPos.z + (orbitZ - _connectFromPos.z) * _connectBlend;
            // Blend lookAt from landing target to dish center
            const lx = _connectFromLook.x + (CONNECT_LOOK.x - _connectFromLook.x) * _connectBlend;
            const ly = _connectFromLook.y + (CONNECT_LOOK.y - _connectFromLook.y) * _connectBlend;
            const lz = _connectFromLook.z + (CONNECT_LOOK.z - _connectFromLook.z) * _connectBlend;
            _currentLookAt.set(lx, ly, lz);
            camera.lookAt(_currentLookAt);
            if (t >= 1) _connectBlend = 1;
        } else {
            camera.position.set(orbitX, orbitY, orbitZ);
            camera.lookAt(CONNECT_LOOK);
            _currentLookAt.copy(CONNECT_LOOK);
        }
    } else if (_connectBlend !== 0) {
        // Left the Connect zone — reset blend so the next entry eases in
        // from the new static landing pose.
        _connectBlend = 0;
    }
}
