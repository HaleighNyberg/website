import * as THREE from 'three';
import { state } from './config.js?v=real18';

// Adaptive quality.
//
// This scene draws itself about TEN TIMES per frame. The camera pass is one of
// them; the rest are the water mirror (re-renders everything into a reflection
// target), the glass transmission backdrop (again), the AO buffer (again), the
// shadow map (again) and one face of the environment cube. Measured on a machine
// that can afford it, that is 6.5M triangles a frame from a scene containing
// 600k.
//
// The existing low-power switch never fires on the machines that need it: it
// requires `(pointer: coarse)`, so it only ever triggers on touch devices. Every
// laptop with integrated graphics - which is most people looking at this - gets
// the full spread and has to chew through all ten passes.
//
// So stop guessing at hardware and measure the thing we actually care about: the
// frame rate on the machine in front of us. Sample it once the flight has landed
// and the scene is at rest, then throttle the repeat passes if it is struggling.
// A machine that is coping is never touched, and nothing here can step back UP -
// quality that oscillates is worse than quality that is merely low.

const SAMPLE_FRAMES = 90;
const SETTLE_FRAMES = 45;      // let the landing, the reveal and the GC settle first

// The reflection and the shadow map are the two passes that can be run at a
// fraction of the display rate without anyone noticing: the sun is static, and
// the dish turns at ~0.07 px/frame.
const TIER = [
    null,                                            // 0 - coping; touch nothing
    { reflectEvery: 2, shadowEvery: 6,  msaa: 0, shadowMap: 2048, gtao: true,  pixelRatio: null },
    { reflectEvery: 3, shadowEvery: 12, msaa: 0, shadowMap: 1024, gtao: false, pixelRatio: 1 },
];

let applied = 0;

function throttleReflection(every) {
    const water = state.water;
    if (!water || water.__throttled) return;
    const inner = water.onBeforeRender;
    let n = 0;
    water.onBeforeRender = function (...args) {
        // The reflection target keeps its last contents, so skipping a frame
        // costs nothing but a frame of latency in a mirror that is already
        // being churned by the wave normals.
        if ((n++ % water.__reflectEvery) === 0) inner.apply(this, args);
    };
    water.__throttled = true;
    water.__reflectEvery = every;
}

function throttleShadows(every) {
    const r = state.renderer;
    r.shadowMap.autoUpdate = false;
    r.shadowMap.needsUpdate = true;
    state._shadowEvery = every;
}

function dropMSAA() {
    const c = state.composer;
    const r = state.renderer;
    if (!c || c.renderTarget1.samples === 0) return;
    const size = new THREE.Vector2();
    r.getDrawingBufferSize(size);
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 0 });
    const old1 = c.renderTarget1, old2 = c.renderTarget2;
    c.renderTarget1 = rt;
    c.renderTarget2 = rt.clone();
    c.writeBuffer = c.renderTarget1;
    c.readBuffer = c.renderTarget2;
    old1.dispose();
    old2.dispose();
    c.setSize(window.innerWidth, window.innerHeight);
}

function shrinkShadowMap(px) {
    const light = state.sunLight;
    if (!light || !light.castShadow) return;
    if (light.shadow.map) {
        light.shadow.map.dispose();
        light.shadow.map = null;
    }
    light.shadow.mapSize.set(px, px);
}

function apply(tier) {
    const cfg = TIER[tier];
    if (!cfg || tier <= applied) return;
    applied = tier;

    dropMSAA();
    throttleReflection(cfg.reflectEvery);
    if (state.water) state.water.__reflectEvery = cfg.reflectEvery;
    throttleShadows(cfg.shadowEvery);
    shrinkShadowMap(cfg.shadowMap);
    if (!cfg.gtao && state.gtaoPass) state.gtaoPass.enabled = false;

    if (cfg.pixelRatio) {
        const pr = Math.min(window.devicePixelRatio, cfg.pixelRatio);
        state.renderer.setPixelRatio(pr);
        state.renderer.setSize(window.innerWidth, window.innerHeight);
        state.composer.setPixelRatio(pr);
        state.composer.setSize(window.innerWidth, window.innerHeight);
    }

    state._qualityTier = tier;
}

/** Call once the flight has landed. Samples the real frame rate, then steps down. */
export function initAdaptiveQuality() {
    if (state.lowPower) { apply(2); return; }

    let seen = 0;
    const dts = [];
    let last = performance.now();

    (function sample() {
        const now = performance.now();
        const dt = now - last;
        last = now;
        seen++;

        // A backgrounded tab gets its frames throttled to a crawl. Sampling
        // through that would condemn a perfectly good machine to the bottom tier
        // for the rest of the visit, on the strength of it having been opened in
        // a tab the visitor had not looked at yet. Start the window over.
        if (document.hidden || dt > 250) {
            seen = 0;
            dts.length = 0;
            requestAnimationFrame(sample);
            return;
        }

        if (seen > SETTLE_FRAMES) dts.push(dt);
        if (dts.length < SAMPLE_FRAMES) {
            requestAnimationFrame(sample);
            return;
        }

        // Median, not mean: one 200ms hitch from a texture upload should not
        // condemn a machine that is otherwise running fine.
        dts.sort((a, b) => a - b);
        const fps = 1000 / dts[Math.floor(dts.length / 2)];

        if (fps < 32) apply(2);
        else if (fps < 50) apply(1);

        // Look again in a few seconds. The first window can land while the
        // browser is still decoding or the station is still fading in, and a
        // machine that is genuinely drowning will still be drowning later.
        if (applied < 2) {
            setTimeout(() => {
                seen = 0;
                dts.length = 0;
                last = performance.now();
                requestAnimationFrame(sample);
            }, 6000);
        }
    })();
}

/** Called from the frame loop: refresh the shadow map on its own slower clock. */
export function tickShadows(frame) {
    if (!state._shadowEvery) return;
    if (frame % state._shadowEvery === 0) state.renderer.shadowMap.needsUpdate = true;
}
