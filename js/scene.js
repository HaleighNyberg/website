import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { TemporalAAPass } from './temporalAA.js?v=real18';
import { state } from './config.js?v=real18';
import { buildSpaceEnvironment } from './spaceEnv.js?v=real18';
import { initStarShell, initDeepField } from './starShell.js';
import { initCorridor } from './corridor.js';

export function initScene() {
    // --- Scene setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
    // Layer 2 = glass dish (moonLight excluded from it).
    // Layer 1 = reserved by Water.js's mirror camera.
    // Layer 4 = moon orb only — main camera renders it (visible in
    //          main view) but Water.js's mirror camera doesn't, so the
    //          moon doesn't appear in the ocean reflection.
    camera.layers.enable(2);
    camera.layers.enable(4);
    window.camera = camera; // expose for debug/console
    // Initial camera pose: placed far out for the deep-space approach
    // animation (loadingApproach.js). The approach module moves the camera
    // from (0, 200, 5000) to the home zone at (155, 95, 220) over 3.5s.
    // Far plane temporarily extended to 9000 so the whole braking run of
    // the load-in (camera parked ~4,800 units out, destination star ~6,100
    // beyond it) stays inside the frustum; the approach resets it on
    // completion.
    camera.position.set(0, 200, 5000);
    camera.far = 9000;
    // Without this the assignment above never reached the projection
    // matrix (still the constructor's far=1000), so distant objects
    // hard-clipped during the approach — and the first window RESIZE
    // then silently baked 6000 in forever. main.js restores far=1000
    // (the tight, depth-precise frustum) when the approach completes.
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (webglError) {
        // WebGL context creation failed (disabled, blocked, or unsupported).
        // Fall back to reviewer mode so the content remains reachable.
        try { localStorage.setItem('reviewer', '1'); } catch {}
        location.reload();
        throw webglError;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Pixel ratio cap raised 1.5 -> 2.0 -> 3.0. Any cap BELOW the display's
    // devicePixelRatio makes the browser upscale the canvas: on a 250%
    // scaled panel (dpr 2.5) the old 2.0 cap rendered at 80% of native and
    // EVERYTHING in the scene (island, dish, orbit lines) read as blurry /
    // low-res while the HTML text stayed crisp. 3.0 covers every common
    // Windows scaling factor at true native.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3.0));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // Applied by the OutputPass at the END of the composer chain (three
    // r152+ skips tone mapping when rendering into a render target, so
    // the scene reaches the post stack linear). Exposure 1.1 is the value
    // the lighting schema was graded against — must stay in sync with the
    // write in lighting.js initLighting and OUTPUT_EXPOSURE in spaceEnv.js.
    renderer.toneMappingExposure = 1.1;
    renderer.localClippingEnabled = true;
    document.body.appendChild(renderer.domElement);

    // Canvas ARIA attributes for accessibility
    renderer.domElement.setAttribute('aria-label', '3D volcanic island world — interactive research visualization');
    renderer.domElement.setAttribute('role', 'img');

    // scene.background set in lighting.js (dark void + atmospheric haze).
    // The procedural deep-space backdrop (BackSide sphere, domain-warped
    // 3D fbm + hashed starfield) is drawn on top of that flat color and
    // becomes the actual visible "outside the scene." See js/spaceEnv.js
    // for technique + source citations. Output is clamped below the
    // bloom threshold and toneMapped=false so it never blooms or shifts
    // when ACES tonemapping is applied to the rest of the scene.
    state._spaceEnv = buildSpaceEnvironment(scene, undefined);
    // The stars are real 3D points on a deterministic shell around the
    // system (they used to live in the skybox shader): true parallax
    // during the load-in approach and between zones at rest. Needs the
    // 9000 far plane permanently — main.js no longer tightens it.
    state._starShell = initStarShell(scene, renderer.getPixelRatio());
    state._starShellMat = state._starShell.material;
    // The far background as CRISP fixed-pixel points in THREE drift
    // layers (view-locked, each carrying a fraction of the real camera
    // motion by depth) — baked texture stars were rejected as
    // magnification blur; stars are geometry only.
    state._skyLayers = initDeepField(scene, renderer.getPixelRatio());
    // The nebula is a PERMANENT raymarched volume — the resting sky as
    // much as the flight medium. animate.js feeds it the camera position
    // (minus the intro's splice offset) every frame; the system sits in a
    // cleared cavity so no cloud can ever film over the island. Cheaper
    // per frame than the old painted fBm skybox it replaces.
    state._nebulaOffset = new THREE.Vector3();
    state._nebulaVol = initCorridor(scene, { steps: state.lowPower ? 8 : 12 });
    state._nebulaVol.setCavity(new THREE.Vector3(0, 0, 0));
    state._nebulaVol.setCavityOn(1);

    // Island group (rotates as a unit)
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);
    window._island = islandGroup; // expose for console

    // --- Environment floors ---

    // Option A: Apple Keynote Studio — polished dark floor with subtle under-dish glow
    const floorAMat = new THREE.ShaderMaterial({
        transparent: false,
        depthWrite: true,
        side: THREE.FrontSide,
        uniforms: {},
        vertexShader: `
            varying vec2 vWorldXZ;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldXZ = worldPos.xz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
        `,
        fragmentShader: `
            varying vec2 vWorldXZ;
            void main() {
                float dist = length(vWorldXZ);
                // Discard beyond radius 300 to avoid z-fighting at horizon
                if (dist > 300.0) discard;
                // Base: almost black
                vec3 base = vec3(0.039, 0.039, 0.047); // #0a0a0c
                // Subtle circular glow under the dish
                vec3 glow = vec3(0.082, 0.082, 0.094); // #151518
                float glowFactor = smoothstep(60.0, 0.0, dist);
                vec3 col = mix(base, glow, glowFactor * 0.6);
                // Slight reflective sheen falloff from center
                col += vec3(0.01) * smoothstep(80.0, 0.0, dist);
                gl_FragColor = vec4(col, 1.0);
            }
        `,
    });
    const floorAGeo = new THREE.PlaneGeometry(800, 800);
    const floorA = new THREE.Mesh(floorAGeo, floorAMat);
    floorA.rotation.x = -Math.PI / 2;
    floorA.position.y = -5;
    floorA.renderOrder = -2;
    floorA.userData.aoInclude = true; // solid geometry — GTAO G-buffer
    scene.add(floorA);
    state.floorA = floorA;

    // Option B: Maker Workshop / 3D Printer Build Plate — grid lines with fade
    const floorBMat = new THREE.ShaderMaterial({
        transparent: false,
        depthWrite: true,
        side: THREE.FrontSide,
        uniforms: {},
        vertexShader: `
            varying vec2 vWorldXZ;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldXZ = worldPos.xz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
        `,
        fragmentShader: `
            varying vec2 vWorldXZ;

            float gridLine(float coord, float spacing, float thickness) {
                float halfThick = thickness * 0.5;
                float d = abs(mod(coord + halfThick, spacing) - halfThick);
                return 1.0 - smoothstep(0.0, thickness, d);
            }

            void main() {
                float dist = length(vWorldXZ);
                if (dist > 300.0) discard;

                vec3 base = vec3(0.067); // #111111
                vec3 majorLineCol = vec3(0.2);   // #333333
                vec3 minorLineCol = vec3(0.102);  // #1a1a1a

                // Anti-aliased grid lines
                float majorX = gridLine(vWorldXZ.x, 10.0, 0.15);
                float majorY = gridLine(vWorldXZ.y, 10.0, 0.15);
                float major = max(majorX, majorY);

                float minorX = gridLine(vWorldXZ.x, 2.0, 0.08);
                float minorY = gridLine(vWorldXZ.y, 2.0, 0.08);
                float minor = max(minorX, minorY);

                // Fade grid beyond radius 150
                float gridFade = 1.0 - smoothstep(100.0, 150.0, dist);

                vec3 col = base;
                col = mix(col, minorLineCol, minor * gridFade * 0.5);
                col = mix(col, majorLineCol, major * gridFade * 0.7);

                // Circular glow under the dish (same as Option A)
                vec3 glow = vec3(0.082, 0.082, 0.094);
                float glowFactor = smoothstep(60.0, 0.0, dist);
                col += (glow - base) * glowFactor * 0.6;

                gl_FragColor = vec4(col, 1.0);
            }
        `,
    });
    const floorBGeo = new THREE.PlaneGeometry(800, 800);
    const floorB = new THREE.Mesh(floorBGeo, floorBMat);
    floorB.rotation.x = -Math.PI / 2;
    floorB.position.y = -5;
    floorB.renderOrder = -2;
    scene.add(floorB);
    state.floorB = floorB;

    // Floors disabled — clean void is best
    floorA.visible = false;
    floorB.visible = false;

    // Store in shared state
    state.scene = scene;
    state.camera = camera;
    state.renderer = renderer;
    state.islandGroup = islandGroup;

    // Low-power tier: only genuinely weak TOUCH devices get a lighter scene
    // (ambient-occlusion pass off, reduced water-reflection resolution) so
    // they stay smooth. Desktops and laptops (fine pointer) are never
    // affected — the owner and any reviewer on a computer always see the full
    // scene. Preview either path with ?lowpower=1 / ?lowpower=0.
    state.lowPower = (function () {
        const q = new URLSearchParams(location.search).get('lowpower');
        if (q === '1') return true;
        if (q === '0') return false;
        const coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
        const cores = navigator.hardwareConcurrency || 8;
        const mem = navigator.deviceMemory || 8;
        return coarse && (cores <= 4 || mem <= 4);
    })();

    // --- Post-processing: bloom ---
    //
    // The composer's target MUST be built multisampled and handed in. Setting
    // composer.renderTarget1.samples after construction does nothing (the
    // targets already exist), which is how this pipeline ended up with no
    // hardware anti-aliasing at all: WebGLRenderer({antialias:true}) only
    // affects the default framebuffer, and the composer never draws into it.
    // The single remaining AA was SMAA, a post filter inferring edges from a
    // finished image — it cannot reconstruct a sub-pixel specular line that was
    // never sampled, which is why the dish rim stepped and its glint broke into
    // a dotted chain. Verified against a 144-samples/px reference: the edge was
    // undersampled, not unsampleable.
    //
    // 8 samples costs nothing measurable here (120 fps before and after, vsync
    // capped) because this scene is fragment-bound, not coverage-bound. The
    // low-power path takes none: a multisampled half-float target is exactly
    // what a weak GPU cannot afford.
    const msaa = state.lowPower ? 0 : 8;
    const pr = renderer.getPixelRatio();
    const msaaTarget = new THREE.WebGLRenderTarget(
        window.innerWidth * pr, window.innerHeight * pr,
        { type: THREE.HalfFloatType, samples: msaa },
    );
    const composer = new EffectComposer(renderer, msaaTarget);
    // MUST follow. Handed a target, EffectComposer takes ITS width as the CSS
    // width and then sizes every pass at width * pixelRatio — so on any display
    // where the ratio is not 1 the passes and the targets disagree and the whole
    // scene renders at the wrong resolution. setSize re-derives both from CSS
    // pixels and the real ratio. (setSize preserves the sample count.)
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.addPass(new RenderPass(scene, camera));

    // --- Ambient occlusion (GTAO) ---
    // Runs on the linear HDR buffer right after the scene render, so
    // contact shadows (dish-on-water ring, terrain crevices, gateway
    // trusses) are in place before bloom and tone mapping.
    // The stock pass builds its depth/normal G-buffer from EVERYTHING in
    // the scene; here the raymarched cloud proxy box, effect quads
    // (caustics, god rays, rain, lava), and the sky sphere would stamp
    // false occluders into it. This scoped subclass renders the G-buffer
    // from an explicit whitelist (userData.aoInclude) instead, and mutes
    // the Water mirror's onBeforeRender during that render so the
    // reflection target isn't wasted on a normals pass.
    class ScopedGTAOPass extends GTAOPass {
        render(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
            const hidden = [];
            this.scene.traverse((o) => {
                // Sprites/points/lines must be filtered too, not just
                // meshes: a glow sprite (sun halos, load-in beacon) that
                // reaches the G-buffer stamps its whole quad as a false
                // occluder and AO draws a dark BOX around the glow.
                if ((o.isMesh || o.isSprite || o.isPoints || o.isLine)
                    && o.visible && !o.userData.aoInclude) {
                    hidden.push(o);
                    o.visible = false;
                }
            });
            const water = state.water;
            const waterHook = water ? water.onBeforeRender : null;
            if (water) water.onBeforeRender = () => {};
            super.render(renderer, writeBuffer, readBuffer, deltaTime, maskActive);
            if (water) water.onBeforeRender = waterHook;
            for (const o of hidden) o.visible = true;
        }
    }
    const gtaoPass = new ScopedGTAOPass(scene, camera, window.innerWidth, window.innerHeight);
    // Radius in world units — terrain crevices and the dish contact ring
    // live at the 0.5–3u scale on this island (dish radius ~32u).
    gtaoPass.updateGtaoMaterial({ radius: 0.8, distanceExponent: 1.5, thickness: 1.0, scale: 1.2, samples: 16 });
    // Poisson denoise tuned UP: per-pixel AO speckle over the terrain's
    // detailed normal map re-rolled every frame as the island turned —
    // one of the engines of the "fried"/flickering rock. Wider spatial
    // filter + looser edge thresholds trade micro AO detail for a
    // stable, film-like occlusion field.
    // radius 8 -> 5: the very wide denoise smeared the AO field into a
    // soft smudge that sat on every surface (part of the global "fuzzy"
    // read). 5 still averages over enough taps to hold the moiré fix.
    gtaoPass.updatePdMaterial({ lumaPhi: 10, depthPhi: 4, normalPhi: 8, radius: 5, radiusExponent: 1, rings: 3, samples: 12 });
    // 0.62: partial restore — the dominant pulse sources turned out to
    // be the caustics + hash decay (both fixed structurally), so the AO
    // can carry more contact-shadow weight again. The wide Poisson
    // denoise stays as the moiré guard.
    gtaoPass.blendIntensity = 0.62;
    gtaoPass.setSize(
        window.innerWidth * Math.min(window.devicePixelRatio, 3.0),
        window.innerHeight * Math.min(window.devicePixelRatio, 3.0)
    );
    composer.addPass(gtaoPass);
    state.gtaoPass = gtaoPass;
    // Low-power devices skip the ambient-occlusion pass (heavy full-screen
    // AO + denoise). The pass stays in the chain but is a no-op.
    if (state.lowPower) gtaoPass.enabled = false;

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.6,   // strength (static — space scene)
        0.5,   // radius
        0.8    // threshold
    );
    composer.addPass(bloomPass);
    state.bloomPass = bloomPass;

    // --- Output stage: ACES tone map at renderer exposure + linear->sRGB
    // encode. Sits immediately after bloom: RenderPass + bloom work in
    // scene-linear HDR (physically correct thresholding), while the
    // cosmetic passes below (lens flare, vignette, chromatic) were all
    // authored against display-space input — the flare in particular uses
    // subtractive haze terms that crush a linear buffer to black — so
    // they run after the encode, exactly as originally graded.
    // spaceEnv.js pre-applies the exact inverse of this stage so the
    // locked nebula grade reaches the screen byte-identical.
    composer.addPass(new OutputPass());

    // --- Lens flare pass (ported from R3F Ultimate Lens Flare) ---
    const lensDirtTex = new THREE.TextureLoader().load('lensDirtTexture.webp');
    const lensFlarePass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            iTime: { value: 0 },
            lensPosition: { value: new THREE.Vector2(0, 0) },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            colorGain: { value: new THREE.Vector3(56, 22, 11) },
            starPoints: { value: 6.0 },
            glareSize: { value: 0.3 },
            flareSize: { value: 0.004 },
            flareSpeed: { value: 0.4 },
            flareShape: { value: 0.1 },
            haloScale: { value: 0.5 },
            opacity: { value: 1.0 }, // 0=visible, 1=hidden (inverted)
            animated: { value: true },
            anamorphic: { value: false },
            enabled: { value: false },
            // secondaryGhosts/aditionalStreaks were bools; converted to
            // float 0..1 so animate.js can fade these lens artifacts
            // smoothly as the sun crosses the NDC overscan edge instead
            // of snapping off. 1.0 = full contribution (matches the old
            // `true` branch), 0.0 = none (matches the old `false`).
            secondaryGhosts: { value: 1.0 },
            starBurst: { value: false }, // GPU heavy — off by default
            ghostScale: { value: 0.1 },
            aditionalStreaks: { value: 1.0 },
            lensDirtTexture: { value: lensDirtTex },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform sampler2D tDiffuse;
            varying vec2 vUv;
            uniform float iTime;
            uniform vec2 lensPosition;
            uniform vec2 iResolution;
            uniform vec3 colorGain;
            uniform float starPoints;
            uniform float glareSize;
            uniform float flareSize;
            uniform float flareSpeed;
            uniform float flareShape;
            uniform float haloScale;
            uniform float opacity;
            uniform bool animated;
            uniform bool anamorphic;
            uniform bool enabled;
            uniform float secondaryGhosts;
            uniform float ghostScale;
            uniform float aditionalStreaks;

            float rndf(float n) { return fract(sin(n) * 43758.5453123); }
            float niz(float p) { float fl = floor(p); float fc = fract(p); return mix(rndf(fl), rndf(fl + 1.0), fc); }
            vec3 hsv2rgb(vec3 c) {
                vec4 k = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
                vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
                return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);
            }
            float satU(float x) { return clamp(x, 0.0, 1.0); }
            vec2 rtU(vec2 n, float r) { return vec2(cos(r)*n.x+sin(r)*n.y, cos(r)*n.y-sin(r)*n.x); }
            float fpow(float x, float k) { return x > k ? pow((x-k)/(1.0-k), 2.0) : 0.0; }
            float rnd1(float w) { return fract(sin(w) * 1000.0); }

            float glR(vec2 n, vec2 pos, float zsi) {
                vec2 m; if(animated){m=rtU(n-pos,iTime*0.1);}else{m=n-pos;}
                float ang = atan(m.y,m.x) * (anamorphic ? 1.0 : starPoints);
                float a = length(m); a = pow(a, 0.9);
                float f0 = 1.0/(length(n-pos)*(1.0/zsi*16.0)+0.2);
                return f0 + f0*(sin(ang)*0.2+0.3);
            }

            vec3 drwF(vec2 p, float intensity, float rnd, float speed, int id) {
                float flh = (1.0/32.0)*float(id)*0.1;
                float lg = distance(vec2(0.0), p);
                float eg = 1.0/exp(lg*(fract(rnd)*0.66+0.33));
                vec3 q = hsv2rgb(vec3(fract((eg*8.0)+speed*flareSpeed+flh), pow(1.0-abs(eg*2.0-1.0),0.45), 20.0*eg*intensity));
                float sp = anamorphic ? 1.0 : starPoints;
                float am = length(p*flareShape*sin(sp*atan(p.x,p.y)));
                float k = pow(1.0-satU(am), anamorphic ? 100.0 : 12.0);
                k += satU(eg-0.9)*3.0;
                k = pow(k*eg, 8.0+(1.0-intensity)*5.0);
                return flareSpeed > 0.0 ? vec3(k)*q : vec3(k)*flareSize*15.0;
            }

            float sdHex(vec2 p) {
                p = abs(p);
                vec2 q = vec2(p.x*2.0*0.5773503, p.y+p.x*0.5773503);
                return dot(step(q.xy,q.yx), 1.0-q.yx);
            }

            vec3 rHx(vec2 n, vec2 p, float s, vec3 col) {
                n -= p;
                if(abs(n.x)<0.2*s && abs(n.y)<0.2*s) {
                    return mix(vec3(0.0), mix(vec3(0.0),col,0.1+fpow(length(n/s),0.1)*10.0), smoothstep(0.0,0.1,sdHex(n*20.0/s)));
                }
                return vec3(0.0);
            }

            float rShp(vec2 p, int N) {
                float a = atan(p.x,p.y)+0.2;
                float b = 6.28319/float(N);
                return smoothstep(0.5,0.51,cos(floor(0.5+a/b)*b-a)*length(p.xy)*2.0-ghostScale);
            }

            vec3 drC(vec2 p, float zsi, float dCy, vec3 o, vec3 q, float am, vec2 es) {
                float c = max(0.01-pow(length(p+es*am),zsi*ghostScale),0.0)*10.0;
                vec3 cl = cos(vec3(0.44,0.24,0.2)*8.0+am*4.0)*0.5+0.5;
                float s = max(0.02-pow(rShp(p*5.0+es*am*5.0+dCy,6),1.0),0.0)*1.5;
                return (c+s)*cl - 0.01;
            }

            vec3 mLs(vec2 n, vec2 pos) {
                vec2 m = n-pos;
                vec2 z = n*length(n);
                float ang = atan(m.x,m.y);
                float f0 = 0.3/(length(n-pos)*16.0+1.0);
                f0 = f0*(sin(niz(sin(ang*3.9-(animated?iTime:0.0)*0.3)*starPoints))*0.2);
                float f1 = max(0.01-pow(length(n+1.2*pos),1.9),0.0)*7.0;
                float f2 = max(0.9/(10.0+32.0*pow(length(z+0.99*pos),2.0)),0.0)*0.35;
                float f22 = max(0.9/(11.0+32.0*pow(length(z+0.85*pos),2.0)),0.0)*0.23;
                float f23 = max(0.9/(12.0+32.0*pow(length(z+0.95*pos),2.0)),0.0)*0.6;
                vec2 t = mix(n,z,0.1);
                float f4 = max(0.01-pow(length(t+0.4*pos),2.9),0.0)*4.02;
                float f42 = max(0.0-pow(length(t+0.45*pos),2.9),0.0)*4.1;
                float f43 = max(0.01-pow(length(t+0.5*pos),2.9),0.0)*4.6;
                t = mix(n,z,-0.4);
                float f5 = max(0.01-pow(length(t+0.1*pos),5.5),0.0)*2.0;
                float f52 = max(0.01-pow(length(t+0.2*pos),5.5),0.0)*2.0;
                float f53 = max(0.01-pow(length(t+0.1*pos),5.5),0.0)*2.0;
                t = mix(n,z,2.1);
                float f6 = max(0.01-pow(length(t-0.3*pos),1.61),0.0)*3.159;
                float f62 = max(0.01-pow(length(t-0.325*pos),1.614),0.0)*3.14;
                float f63 = max(0.01-pow(length(t-0.389*pos),1.623),0.0)*3.12;
                vec3 c = vec3(glR(n,pos,glareSize));
                vec2 pr;
                if(animated){pr=rtU(n-pos,iTime*0.1);}else if(anamorphic){pr=rtU(n-pos,1.570796);}else{pr=n-pos;}
                c += drwF(pr, anamorphic?flareSize*10.0:flareSize, 0.1, iTime, 1);
                c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;
                c = c*1.3*vec3(length(z)+0.09);
                c += vec3(f0);
                return c;
            }

            void main() {
                vec4 sc = texture2D(tDiffuse, vUv);
                if(!enabled) { gl_FragColor = sc; return; }
                vec2 g = vUv - 0.5;
                g.y *= iResolution.y / iResolution.x;
                vec2 l = lensPosition * 0.5;
                l.y *= iResolution.y / iResolution.x;
                vec3 f = mLs(g, l) * 20.0 * colorGain / 256.0;
                // aditionalStreaks / secondaryGhosts are 0..1 floats. We
                // still skip the heavy work when the factor is zero (the
                // sun is fully off-screen), but otherwise scale the
                // contribution by the float so it can fade smoothly.
                if(aditionalStreaks > 0.0) {
                    vec3 streaks = vec3(0.0);
                    vec3 o=vec3(0.9,0.2,0.1); vec3 p=vec3(0.3,0.1,0.9);
                    for(float n=0.0;n<10.0;n++) {
                        streaks += drC(g, pow(rnd1(n*2000.0)*2.8,0.1)+1.41, 0.0, o+n, p+n, rnd1(n*20.0)*3.0+0.2-0.5, lensPosition);
                    }
                    f += streaks * aditionalStreaks;
                }
                if(secondaryGhosts > 0.0) {
                    vec3 n = vec3(0.0);
                    n += rHx(g,-lensPosition*0.25,ghostScale*1.4,vec3(0.25,0.35,0.0));
                    n += rHx(g,lensPosition*0.25,ghostScale*0.5,vec3(1.0,0.5,0.5));
                    n += rHx(g,lensPosition*0.1,ghostScale*1.6,vec3(1.0));
                    n += rHx(g,lensPosition*1.8,ghostScale*2.0,vec3(0.0,0.5,0.75));
                    n += rHx(g,lensPosition*1.25,ghostScale*0.8,vec3(1.0,1.0,0.5));
                    n += rHx(g,-lensPosition*1.25,ghostScale*5.0,vec3(0.5,0.5,0.25));
                    n += fpow(1.0-abs(distance(lensPosition*0.8,g)-0.7),0.985)*colorGain/2100.0;
                    f += n * secondaryGhosts;
                }
                vec3 result = mix(f, vec3(0.0), opacity);
                gl_FragColor = vec4(result + sc.rgb, sc.a);
            }
        `,
    });
    composer.addPass(lensFlarePass);
    state.lensFlarePass = lensFlarePass;

    // --- Vignette pass ---
    const vignettePass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            darkness: { value: 0.2 },
            offset: { value: 1.2 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform float darkness;
            uniform float offset;
            varying vec2 vUv;
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                vec2 uv = (vUv - 0.5) * 2.0;
                float dist = length(uv);
                float vig = smoothstep(offset, offset - 0.5, dist);
                texel.rgb *= mix(1.0 - darkness * 0.5, 1.0, vig);
                gl_FragColor = texel;
            }
        `,
    });
    composer.addPass(vignettePass);
    state.vignettePass = vignettePass;

    // --- Depth of field (simple bokeh-like blur at edges) ---
    const dofPass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            // strength: 0 → no edge blur. Was 0.25 which blurred the outer
            // ~50% of every frame. User wants everything in focus in every
            // camera view. Kept the pass in the composer (cheap no-op at
            // strength=0) so it can be re-enabled later if a depth-of-field
            // effect is wanted.
            strength: { value: 0.0 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform vec2 resolution;
            uniform float strength;
            varying vec2 vUv;
            void main() {
                vec2 uv = (vUv - 0.5) * 2.0;
                float dist = length(uv);
                // Only blur edges of screen, center stays sharp
                float blurAmount = smoothstep(0.3, 1.0, dist) * strength;
                vec2 texel = 1.0 / resolution;
                vec4 col = texture2D(tDiffuse, vUv);
                if (blurAmount > 0.01) {
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, 0.0) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(0.0, -texel.y) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(0.0, texel.y) * blurAmount * 4.0);
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y) * blurAmount * 3.0);
                    col += texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y) * blurAmount * 3.0);
                    col /= 9.0;
                }
                gl_FragColor = col;
            }
        `,
    });
    composer.addPass(dofPass);
    state.dofPass = dofPass;

    // --- Chromatic aberration (from diamond shader analysis) ---
    const chromaticPass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            // 0.002 -> 0.0007: at 0.002 the R/B planes shifted ~2px at the
            // frame edges, and stacked on FXAA it read as a soft/low-res
            // veil over EVERYTHING (user: "fuzzy... applied to many
            // facets"). 0.0007 keeps a trace of lens character while
            // staying under a pixel of separation.
            strength: { value: 0.0007 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform float strength;
            varying vec2 vUv;
            void main() {
                vec2 dir = vUv - 0.5;
                float dist = length(dir);
                vec2 offset = dir * dist * strength;
                float r = texture2D(tDiffuse, vUv + offset).r;
                float g = texture2D(tDiffuse, vUv).g;
                float b = texture2D(tDiffuse, vUv - offset).b;
                gl_FragColor = vec4(r, g, b, 1.0);
            }
        `,
    });
    composer.addPass(chromaticPass);
    state.chromaticPass = chromaticPass;

    // --- Film grain pass ---
    const grainPass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            time: { value: 0 },
            intensity: { value: 0.015 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform float time;
            uniform float intensity;
            varying vec2 vUv;
            float rand(vec2 co) {
                return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
            }
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                float grain = rand(vUv + time) * 2.0 - 1.0;
                texel.rgb += grain * intensity;
                gl_FragColor = texel;
            }
        `,
    });
    // Film grain DISABLED — causes rapid flickering that's uncomfortable
    // composer.addPass(grainPass);
    state.grainPass = null;
    // To re-enable: uncomment the line above and set state.grainPass = grainPass;

    // --- SMAA final pass (replaced FXAA) ---
    // MSAA resolves triangle edges but not SHADING contrast: the bright
    // sun-glared silhouettes (dish rim, moon limb, lit ridge lines) still
    // landed as single-pixel stair-steps that crawled as objects rotated.
    // FXAA smoothed those but ALSO smeared texture detail across the
    // whole frame (live-bisected by the owner: FXAA on = the global
    // blur). SMAA does the same edge job with real edge detection, so
    // flat texture areas keep full sharpness.
    const smaaPR = Math.min(window.devicePixelRatio, 3.0);
    const smaaPass = new SMAAPass(
        window.innerWidth * smaaPR,
        window.innerHeight * smaaPR
    );
    composer.addPass(smaaPass);
    // Handle kept under the old name so the debug panel toggle and the
    // resize path stay wired without churn.
    state.fxaaPass = smaaPass;

    // --- Temporal AA (last) ---
    // The resting-view sparkle on the island is TEMPORAL: 263k verts inside
    // ~150 px means a dozen micro-triangles fight over each pixel and the
    // winner re-rolls as the dish turns. Nothing spatial sees it (SMAA and
    // MSAA are both blind to it, and every material/AO/shadow knob was ruled
    // out by measurement). This pass blends each pixel with its own clamped
    // history, so a flickering pixel converges to its average while a still
    // image passes through untouched — no projection jitter, so nothing is
    // resampled and nothing softens. See temporalAA.js.
    const taaPass = new TemporalAAPass(
        window.innerWidth * smaaPR,
        window.innerHeight * smaaPR,
        camera
    );
    composer.addPass(taaPass);
    state.taaPass = taaPass;

    state.composer = composer;

    // --- Generate environment map for glass reflections/refraction ---
    {
        const pmremGen = new THREE.PMREMGenerator(renderer);
        pmremGen.compileEquirectangularShader();

        // Create a simple environment: dark with subtle gradient
        const envScene = new THREE.Scene();
        const envGeo = new THREE.SphereGeometry(10, 32, 16);
        envGeo.scale(-1, 1, 1);
        const envMat = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            uniforms: {},
            vertexShader: `
                varying vec3 vDir;
                void main() {
                    vDir = normalize(position);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vDir;
                void main() {
                    float y = vDir.y;
                    // Brighter museum environment — glass needs contrast to refract.
                    // The glass dish samples this PMREM env through transmission,
                    // so the env brightness directly controls dish clarity.
                    // Zero cost per frame — PMREM is baked once.
                    vec3 top = vec3(0.55, 0.52, 0.50);
                    vec3 mid = vec3(0.22, 0.25, 0.32);
                    vec3 bot = vec3(0.08, 0.08, 0.10);
                    // Broad key light area for glass caustics
                    float keyDot = max(0.0, dot(vDir, normalize(vec3(0.6, 0.5, 0.6))));
                    float keyHighlight = pow(keyDot, 16.0) * 3.2 + pow(keyDot, 4.0) * 0.55;
                    // Rim light — wider, brighter
                    float rimDot = max(0.0, dot(vDir, normalize(vec3(-0.6, 0.4, -0.8))));
                    float rimHighlight = pow(rimDot, 12.0) * 1.4 + pow(rimDot, 3.0) * 0.30;
                    vec3 col = y > 0.0 ? mix(mid, top, y) : mix(mid, bot, -y);
                    col += vec3(1.0, 0.95, 0.88) * keyHighlight;
                    col += vec3(0.5, 0.7, 1.0) * rimHighlight;
                    gl_FragColor = vec4(col, 1.0);
                }
            `,
        });
        envScene.add(new THREE.Mesh(envGeo, envMat));

        const envRT = pmremGen.fromScene(envScene, 0.04);
        scene.environment = envRT.texture;

        // Apply to glass material if already created
        if (state.glassMat) {
            state.glassMat.envMap = envRT.texture;
            state.glassMat.needsUpdate = true;
        }
        // Store for glass.js to use
        state._envTexture = envRT.texture;

        pmremGen.dispose();
    }

    // --- Resize ---
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setPixelRatio(Math.min(window.devicePixelRatio, 3.0));
        composer.setSize(window.innerWidth, window.innerHeight);
        dofPass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        if (state.lensFlarePass) state.lensFlarePass.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        // SMAA sizes its internal targets via composer.setSize above.
    });

    // Update euler from initial camera quaternion
    state.euler.setFromQuaternion(camera.quaternion);
}
