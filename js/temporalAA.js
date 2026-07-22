// Temporal anti-aliasing - the only fix for the resting-view sparkle that
// costs NO detail.
//
// The island is 263k verts inside ~150 px, so a dozen micro-triangles fight
// over every pixel and the winner re-rolls as the dish turns. Nothing spatial
// can help: MSAA at 0/8/16 samples measures identical (it resolves coverage,
// not per-fragment shading), and every material/AO/shadow knob was ruled out.
// Reducing the geometry DOES work but costs the detail I want. So we
// fix it in TIME instead: each pixel is blended with its own history, so a
// value that flickers between two states converges to their average while a
// value that is genuinely stable is unchanged.
//
// Deliberately NO projection jitter: jitter buys extra edge AA but resamples
// the whole frame every frame, which softens the image. Without it a static
// scene reproduces bit-identically (history == current) - the look is
// preserved exactly, and only the flicker averages out.
//
// Ghosting control:
//  - Neighbourhood clamp (Karis): history is clipped to the min/max of the
//    current pixel's 3x3 colour box, so it can never drag in colour that
//    isn't plausible here THIS frame. At rest the dish turns ~0.07 px/frame,
//    so history is essentially aligned and the clamp barely bites.
//  - Camera-motion reset: any camera movement (zone flights, the whole intro)
//    drops the history weight to zero for that frame, so nothing smears.

import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// History weight when the camera is still.
//
// HARD-WON: this pass does NOT reproject history with motion vectors, and the
// dish is ALWAYS turning - so every pixel's history is misaligned by a
// fraction of a pixel every frame. The neighbourhood clamp is the only thing
// holding that misalignment back. Push the weight up (0.94) or slacken the
// clamp (1.25x) to chase the last of the seabed shimmer and the misalignment
// leaks through as MOTION BLUR over the whole scene - caught twice.
// 0.88 with a STRICT clamp is the setting that kills the twinkle and stays
// sharp. Anything more needs real motion vectors, not a bigger blend.
const BLEND = 0.88;
const CAM_EPS = 1e-6;        // matrix delta that counts as "the camera moved"

export class TemporalAAPass extends Pass {
    constructor(width, height, camera) {
        super();
        this.camera = camera;
        this._prevCam = new THREE.Matrix4();
        this._first = true;

        const opts = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            type: THREE.HalfFloatType,
            depthBuffer: false,
            stencilBuffer: false,
        };
        this.historyRead = new THREE.WebGLRenderTarget(width, height, opts);
        this.historyWrite = new THREE.WebGLRenderTarget(width, height, opts);

        this.blendMaterial = new THREE.ShaderMaterial({
            uniforms: {
                tDiffuse: { value: null },
                tHistory: { value: null },
                uBlend: { value: BLEND },
                uTexel: { value: new THREE.Vector2(1 / width, 1 / height) },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform sampler2D tHistory;
                uniform float uBlend;
                uniform vec2 uTexel;
                varying vec2 vUv;

                void main() {
                    vec3 cur = texture2D(tDiffuse, vUv).rgb;

                    // 3x3 neighbourhood of THIS frame: the colour range that is
                    // legitimate at this pixel right now.
                    vec3 lo = cur;
                    vec3 hi = cur;
                    for (int y = -1; y <= 1; y++) {
                        for (int x = -1; x <= 1; x++) {
                            if (x == 0 && y == 0) continue;
                            vec3 s = texture2D(tDiffuse, vUv + vec2(float(x), float(y)) * uTexel).rgb;
                            lo = min(lo, s);
                            hi = max(hi, s);
                        }
                    }

                    // STRICT box - do not widen it. Widening lets the
                    // un-reprojected history (the dish is always turning) bleed
                    // in and the whole scene goes soft. See the BLEND note.
                    vec3 hist = texture2D(tHistory, vUv).rgb;
                    // Clip history into that box - kills ghosting/smearing at
                    // any real edge while leaving a flickering pixel (whose
                    // two states both live inside its own neighbourhood) free
                    // to average with its past.
                    hist = clamp(hist, lo, hi);

                    gl_FragColor = vec4(mix(cur, hist, uBlend), 1.0);
                }
            `,
            depthTest: false,
            depthWrite: false,
        });

        this.copyMaterial = new THREE.ShaderMaterial({
            uniforms: { tDiffuse: { value: null } },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                varying vec2 vUv;
                void main() { gl_FragColor = texture2D(tDiffuse, vUv); }
            `,
            depthTest: false,
            depthWrite: false,
        });

        this.quad = new FullScreenQuad(this.blendMaterial);
    }

    setSize(width, height) {
        this.historyRead.setSize(width, height);
        this.historyWrite.setSize(width, height);
        this.blendMaterial.uniforms.uTexel.value.set(1 / width, 1 / height);
        this._first = true;
    }

    _cameraMoved() {
        const m = this.camera.matrixWorldInverse.elements;
        const p = this._prevCam.elements;
        let diff = 0;
        for (let i = 0; i < 16; i++) diff += Math.abs(m[i] - p[i]);
        this._prevCam.copy(this.camera.matrixWorldInverse);
        return diff > CAM_EPS;
    }

    render(renderer, writeBuffer, readBuffer) {
        const moved = this._cameraMoved();
        // First frame (and every frame the camera flies) has no usable past.
        const blend = (this._first || moved) ? 0.0 : BLEND;
        this._first = false;

        this.blendMaterial.uniforms.tDiffuse.value = readBuffer.texture;
        this.blendMaterial.uniforms.tHistory.value = this.historyRead.texture;
        this.blendMaterial.uniforms.uBlend.value = blend;

        // 1) resolve into the history buffer
        this.quad.material = this.blendMaterial;
        renderer.setRenderTarget(this.historyWrite);
        renderer.clear();
        this.quad.render(renderer);

        // 2) present that same resolved image
        this.copyMaterial.uniforms.tDiffuse.value = this.historyWrite.texture;
        this.quad.material = this.copyMaterial;
        renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
        if (this.clear) renderer.clear();
        this.quad.render(renderer);

        // 3) ping-pong
        const t = this.historyRead;
        this.historyRead = this.historyWrite;
        this.historyWrite = t;
    }

    dispose() {
        this.historyRead.dispose();
        this.historyWrite.dispose();
        this.blendMaterial.dispose();
        this.copyMaterial.dispose();
        this.quad.dispose();
    }
}
