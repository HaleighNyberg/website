import * as THREE from 'three';

// --- Constants ---
export const OCEAN_LEVEL = 0.6;
export const OCEAN_RADIUS = 31.5;

export const TERRAIN_HEIGHT = 6;
export const TERRAIN_SIZE = 20;
export const TERRAIN_SEGMENTS = 512;

export const BASE_DEPTH = 3;
export const FLOOR_Y = OCEAN_LEVEL - BASE_DEPTH;

export const PEAK_Y = TERRAIN_HEIGHT * 0.95;

export const WALL_THICK = 0.6;

// --- Single source of truth for the (static) sun world position ---
// The sun does not orbit. It sits far back-left on the orbital plane and
// every shader / light / lens-flare math reads from this one constant.
// Treat as immutable — clone() it before mutating.
export const SUN_WORLD_POSITION = new THREE.Vector3(-620, 0, -250);

// --- Moon orbit parameters (orbits the dish at origin in the y=0 plane) ---
export const MOON_ORBIT_RADIUS = 90;   // world units — pushed further out for realistic angular size
export const MOON_ORBIT_PERIOD = 420;  // seconds per revolution — one "month". The sun
// drift in lighting.js runs one orbit per ~12.5 moon revolutions, so the
// moon/sun pair reads as a real month/year hierarchy (Earth-like feel).
export const MOON_ORBIT_PHASE  = -1.107; // ≈ atan2(-60, 30): starts behind/right of dish

export const FLY_SPEED = 40;
export const LOOK_SPEED = 0.002;

export const RAIN_COUNT = 15000;
export const RAIN_AREA = 60;
export const RAIN_HEIGHT = 40;
export const RAIN_SPEED = 25;

// --- Shared state object (populated during init) ---
export const state = {
    scene: null,
    camera: null,
    renderer: null,
    composer: null,
    islandGroup: null,

    // Sun direction — normalize(SUN_WORLD_POSITION), refreshed each frame
    // in updateScene so consumers don't have to import the constant.
    SUN_DIR: new THREE.Vector3(1, 0.4, 0).normalize(),

    // Legacy hook from when the sun moved. Sun is now static — kept null
    // so any old caller that reads it sees a falsy value.
    sunFixedPos: null,

    // Water reference (shared between ocean.js and lighting.js)
    water: null,

    // Geometry references for lighting updates
    mtnGeo: null,

    // Starbox reference (set in initLighting)
    _starbox: null,

    // Light references
    sunLight: null,
    moonLight: null,
    hemiLight: null,
    ambLight: null,
    rimLight: null,

    // Post-processing
    grainPass: null,
    dofPass: null,

    // Euler for camera controls
    euler: new THREE.Euler(0, 0, 0, 'YXZ'),
    isPointerLocked: false,
    keys: {},

    // Glass material (shared between glass.js and scene.js env map)
    glassMat: null,

    // Environment toggle: 'A' = Apple Keynote Studio, 'B' = Maker Workshop
    envMode: 'A',

    // Environment floor meshes
    floorA: null,
    floorB: null,

    // Sun orb (Option B only)
    sunOrb: null,

    // Moon orb
    moonOrb: null,

    // Gateway (GLTF scene, set in lighting.js)
    gateway: null,

    // Drag override positions — set by controls.js, read by lighting.js
    _dragOverride: {},

};

// --- Color utility functions ---
export function volcanoColor(t, nearShore) {
    const stops = [
        { t: 0.00, r: 0.08, g: 0.07, b: 0.06 },
        { t: 0.10, r: 0.12, g: 0.10, b: 0.08 },
        { t: 0.25, r: 0.20, g: 0.14, b: 0.09 },
        { t: 0.40, r: 0.30, g: 0.18, b: 0.10 },
        { t: 0.55, r: 0.35, g: 0.22, b: 0.13 },
        { t: 0.70, r: 0.28, g: 0.20, b: 0.14 },
        { t: 0.85, r: 0.22, g: 0.18, b: 0.15 },
        { t: 1.00, r: 0.18, g: 0.15, b: 0.13 },
    ];
    let a = stops[0], b = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) {
        if (t >= stops[i].t && t <= stops[i + 1].t) {
            a = stops[i]; b = stops[i + 1]; break;
        }
    }
    const f = (t - a.t) / (b.t - a.t || 1);
    let r = a.r + (b.r - a.r) * f;
    let g = a.g + (b.g - a.g) * f;
    let bl = a.b + (b.b - a.b) * f;
    if (nearShore > 0) {
        const s = nearShore * nearShore;
        // Wet dark sand. The old 0.32/0.27/0.20 target hit the baked-
        // lift cap and turned the whole shoreline band pale beige, the
        // same value as the sunlit water — top-down the island outline
        // disappeared. Darker sand keeps a real land/water boundary.
        r += (0.21 - r) * s; g += (0.175 - g) * s; bl += (0.13 - bl) * s;
    }
    return { r, g, b: bl };
}

export function seafloorColor(h, lavaAmount) {
    lavaAmount = lavaAmount || 0;
    // Deepest stops lifted and blue-shifted: the old (0.06,0.04,0.04)
    // black-brown, multiplied by the bake dimmers and the underwater
    // absorption, landed the basin BELOW the space background's darkest
    // pixel (~0.075 luminance) — the floor of an aquarium should read
    // as dim cool rock, never as a void darker than space.
    const stops = [
        { t: 0.0, r: 0.10, g: 0.11, b: 0.13 },
        { t: 0.15, r: 0.13, g: 0.12, b: 0.12 },
        { t: 0.3, r: 0.16, g: 0.11, b: 0.08 },
        { t: 0.5, r: 0.22, g: 0.16, b: 0.10 },
        { t: 0.7, r: 0.28, g: 0.20, b: 0.13 },
        { t: 0.85, r: 0.32, g: 0.24, b: 0.16 },
        { t: 1.0, r: 0.38, g: 0.28, b: 0.18 },
    ];
    let a = stops[0], b = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) {
        if (h >= stops[i].t && h <= stops[i + 1].t) {
            a = stops[i]; b = stops[i + 1]; break;
        }
    }
    const f = (h - a.t) / (b.t - a.t || 1);
    let r = a.r + (b.r - a.r) * f;
    let g = a.g + (b.g - a.g) * f;
    let bl = a.b + (b.b - a.b) * f;
    if (lavaAmount > 0) {
        r += lavaAmount * 0.6;
        g += lavaAmount * 0.12;
        bl += lavaAmount * 0.02;
    }
    return { r, g, b: bl };
}

export function loadHeightmap(src, cb) {
    // Registered with the default loading manager so the loading-screen
    // hold (main.js) counts heightmaps alongside every texture — without
    // this the island geometry could still be missing when the screen
    // lifts.
    THREE.DefaultLoadingManager.itemStart(src);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        // Decode off the main thread, then split the pixel copy and the
        // geometry-building callback across two frames: as one
        // synchronous block this was a ~230ms main-thread freeze at
        // whatever moment the download landed — mid-cruise on a slow
        // connection. The manager hold (itemEnd) still releases only
        // after the callback, so nothing downstream sees a difference.
        const go = () => {
            const c = document.createElement('canvas');
            c.width = img.width; c.height = img.height;
            const cx = c.getContext('2d', { willReadFrequently: true });
            cx.drawImage(img, 0, 0);
            const data = cx.getImageData(0, 0, c.width, c.height);
            requestAnimationFrame(() => {
                cb(data, c.width, c.height);
                THREE.DefaultLoadingManager.itemEnd(src);
            });
        };
        if (typeof img.decode === 'function') img.decode().then(go, go);
        else go();
    };
    img.onerror = () => {
        // A failed fetch must release the hold rather than hang it; the
        // wait cap in main.js is the backstop, this is the fast path.
        THREE.DefaultLoadingManager.itemEnd(src);
    };
    img.src = src;
}

export function sampleHeight(pixels, w, h, u, v) {
    const px = Math.floor(u * (w - 1));
    const py = Math.floor((1 - v) * (h - 1));
    return pixels.data[(py * w + px) * 4] / 255;
}

