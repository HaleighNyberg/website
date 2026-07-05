import * as THREE from 'three';
// OrbitControls removed — scroll navigation only
import { state, FLY_SPEED, LOOK_SPEED } from './config.js?v=real9';

// Control mode: 'orbit' (default) or 'fly' (dev)
let _mode = 'orbit';

export function initControls() {
    const { camera, renderer, euler, keys } = state;

    // --- WASD fly mode keys (only active in fly mode) ---
    document.addEventListener('keydown', (e) => keys[e.code] = true);
    document.addEventListener('keyup', (e) => keys[e.code] = false);

    // --- Pointer lock for fly mode ---
    renderer.domElement.addEventListener('mousedown', () => {
        if (state.isPointerLocked) return;
        if (_mode === 'fly') renderer.domElement.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', () => {
        state.isPointerLocked = document.pointerLockElement === renderer.domElement;
    });

    // Fly-mode mouse look
    document.addEventListener('mousemove', (e) => {
        if (_mode !== 'fly' || !state.isPointerLocked) return;
        euler.setFromQuaternion(camera.quaternion);
        euler.y -= e.movementX * LOOK_SPEED;
        euler.x -= e.movementY * LOOK_SPEED;
        euler.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.x));
        camera.quaternion.setFromEuler(euler);
    });

    // --- Dev HUD elements ---
    const coordsEl = document.getElementById('coords');
    const copyBtn = document.getElementById('copyBtn');
    const viewBtn = document.getElementById('viewBtn');
    const edgeBtn = document.getElementById('edgeBtn');

    // Dev HUD is stripped from the shipped page. Every wiring below must
    // null-check so production (no HUD markup) skips it cleanly.
    if (copyBtn) copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = camera.position;
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        const text = `pos: ${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}\ndir: ${dir.x.toFixed(3)}, ${dir.y.toFixed(3)}, ${dir.z.toFixed(3)}\nrot: ${THREE.MathUtils.radToDeg(euler.x).toFixed(1)}, ${THREE.MathUtils.radToDeg(euler.y).toFixed(1)}, 0.0`;
        navigator.clipboard.writeText(text);
        copyBtn.textContent = 'copied';
        copyBtn.classList.add('copied');
        setTimeout(() => { copyBtn.textContent = 'copy'; copyBtn.classList.remove('copied'); }, 1200);
    });

    // "copy zone" — outputs camera + lookAt in the exact format zones.js needs.
    // Fly to your desired view, click this, paste the result to me.
    const zoneBtn = document.getElementById('zoneBtn');
    if (zoneBtn) zoneBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = camera.position;
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        // lookAt = position + direction * 50 (a reasonable focal distance)
        const la = p.clone().addScaledVector(dir, 50);
        const text = `camera: { x: ${p.x.toFixed(0)}, y: ${p.y.toFixed(0)}, z: ${p.z.toFixed(0)} },\nlookAt: { x: ${la.x.toFixed(0)}, y: ${la.y.toFixed(0)}, z: ${la.z.toFixed(0)} },`;
        navigator.clipboard.writeText(text);
        zoneBtn.textContent = 'copied!';
        setTimeout(() => { zoneBtn.textContent = 'copy zone'; }, 1200);
    });

    if (edgeBtn) edgeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (_mode === 'fly') {
            camera.position.set(50, 3, 35);
            euler.set(THREE.MathUtils.degToRad(-3), THREE.MathUtils.degToRad(55), 0);
            camera.quaternion.setFromEuler(euler);
        } else {
            // Orbit mode: animate to edge view
            _animateCamera(new THREE.Vector3(50, 3, 35));
        }
    });

    // Noon button — no-op in static space scene (day cycle removed)
    const noonBtn = document.getElementById('noonBtn');
    if (noonBtn) noonBtn.style.display = 'none';

    if (viewBtn) viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = camera.position;
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        const text = `Camera view:\npos: (${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z.toFixed(1)})\ndir: (${dir.x.toFixed(2)}, ${dir.y.toFixed(2)}, ${dir.z.toFixed(2)})\nrot: (${THREE.MathUtils.radToDeg(euler.x).toFixed(1)}°, ${THREE.MathUtils.radToDeg(euler.y).toFixed(1)}°)\nPaste this into the chat so I can see your exact view.`;
        navigator.clipboard.writeText(text);
        viewBtn.textContent = 'copied!';
        setTimeout(() => { viewBtn.textContent = 'send view'; }, 1200);
    });

    state._coordsEl = coordsEl;

    // --- Ctrl+Shift+F : toggle fly-around (WASD + pointer-lock) mode ---
    document.addEventListener('keydown', (e) => {
        if (!e.ctrlKey || !e.shiftKey || e.code !== 'KeyF') return;
        if (e.target instanceof Element && e.target.matches('input, textarea, [contenteditable]')) return;
        e.preventDefault();
        _toggleDevMode();
    });

    // --- Preset view navigation dots ---
    _initPresetNav();
}

// --- Preset camera positions for each zone ---
const PRESET_VIEWS = {
    default:      new THREE.Vector3(40, 25, 50),     // elevation ~25-30°, dist ~68
    research:     new THREE.Vector3(5, 70, 5),        // looking down, elevation ~85°
    publications: new THREE.Vector3(45, 3, 25),       // edge view, low elevation, mid distance
    about:        new THREE.Vector3(8, 5, 10),        // close-up, dist ~14
    skills:       new THREE.Vector3(10, -15, 10),     // underneath, negative elevation
    connect:      new THREE.Vector3(60, 30, 70),      // far out, dist ~98
};

function _initPresetNav() {
    const nav = document.getElementById('preset-nav');
    if (!nav) return;

    nav.addEventListener('click', (e) => {
        const dot = e.target.closest('.preset-dot');
        if (!dot) return;
        const zone = dot.dataset.zone;
        if (zone && PRESET_VIEWS[zone]) {
            _animateCamera(PRESET_VIEWS[zone]);
            // Update active dot
            nav.querySelectorAll('.preset-dot').forEach(d => d.classList.remove('preset-dot--active'));
            dot.classList.add('preset-dot--active');
        }
    });
}

// Smooth camera transition (direct lerp — no OrbitControls dependency)
function _animateCamera(targetPos, duration = 800) {
    const startPos = state.camera.position.clone();
    const startTime = performance.now();

    function step(now) {
        const t = Math.min(1, (now - startTime) / duration);
        // Ease-in-out cubic
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        state.camera.position.lerpVectors(startPos, targetPos, ease);

        if (t < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// Toggle dev mode (HUD + fly controls)
function _toggleDevMode() {
    const hud = document.getElementById('hud');
    if (!hud) return; // dev HUD not present in the shipped page
    const isHidden = hud.style.display === 'none';

    if (isHidden) {
        // Activate fly mode
        hud.style.display = 'flex';
        _mode = 'fly';
        // Sync euler from current camera orientation
        state.euler.setFromQuaternion(state.camera.quaternion);
    } else {
        // Back to scroll/orbit mode
        hud.style.display = 'none';
        _mode = 'orbit';
        // Exit pointer lock if active
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
    }
}

/** Per-frame drag physics (no-op — drag system removed). */
export function updateDragPhysics(dt) {}

export function updateFly(dt) {
    const { camera, euler, keys, _coordsEl } = state;

    // Only process WASD in fly mode
    if (_mode === 'fly') {
        const move = new THREE.Vector3();
        if (keys['KeyW']) move.z -= 1;
        if (keys['KeyS']) move.z += 1;
        if (keys['KeyA']) move.x -= 1;
        if (keys['KeyD']) move.x += 1;
        if (keys['Space']) move.y += 1;
        if (keys['ShiftLeft'] || keys['ShiftRight']) move.y -= 1;
        if (move.lengthSq() > 0) {
            move.normalize().multiplyScalar(FLY_SPEED * dt);
            move.applyQuaternion(camera.quaternion);
            camera.position.add(move);
        }
    }

    // Update HUD coords (only visible in dev mode)
    if (_coordsEl && _mode === 'fly') {
        const p = camera.position;
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        _coordsEl.textContent =
            `pos  ${p.x.toFixed(1)}  ${p.y.toFixed(1)}  ${p.z.toFixed(1)}\n` +
            `dir  ${dir.x.toFixed(2)} ${dir.y.toFixed(2)} ${dir.z.toFixed(2)}`;
    }
}
