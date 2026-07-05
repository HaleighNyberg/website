import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
    state, OCEAN_LEVEL, OCEAN_RADIUS, BASE_DEPTH, FLOOR_Y,
    SUN_WORLD_POSITION, MOON_ORBIT_RADIUS, MOON_ORBIT_PERIOD, MOON_ORBIT_PHASE,
} from './config.js?v=real10';

// Scratch vectors — write-then-read within a single updateScene call.
// Per-frame moon orbit scratch (avoids `new THREE.Vector3(...)` each frame).
const _moonScratch = new THREE.Vector3();
// Gateway specular-glint direction scratches.
const _gwToSun = new THREE.Vector3();
const _gwToCam = new THREE.Vector3();

export function initLighting() {
    const { scene, renderer } = state;

    // --- Sun is static (far back-left on the orbital plane). SUN_DIR is
    //     still recomputed each frame in updateScene so any consumer that
    //     reads it sees a normalized vector pointing from origin → sun.
    state.sunFixedPos = null;
    state.SUN_DIR.copy(SUN_WORLD_POSITION).normalize();

    // --- Dark void background ---
    // scene background drawn by spaceEnv.js. Fog removed: the approach
    // camera passed through ~720 units of FogExp2 and read as a universal
    // haze around the 75% mark of the fly-in. updateWeather() nulls fog
    // too, but only after the first frames — by then the user has already
    // seen it.
    scene.fog = null;

    // --- Directional sun light — points from the static sun position ---
    // LOCKED key-dominant schema (graded against the OutputPass pipeline,
    // exposure 1.1): sun key 6.5 owns direction and the terminator,
    // ambient 0.85 rescues shadow legibility only, rim 1.20 separates the
    // dish from the nebula, hemi 0.65 keeps night-side relief readable.
    // Change these as a set or not at all.
    const sunLight = new THREE.DirectionalLight(
        new THREE.Color(1.0, 0.97, 0.92), 6.5
    );

    // --- Shadow mapping: island self-shadow grounds the terrain geometry ---
    // The mountain casting shadows on its own slopes is the single cheapest
    // thing that makes a heightfield stop looking flat. 1024 map is plenty
    // for this scene scale; bias tuned to avoid acne on the shallow slopes.
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    sunLight.castShadow = true;
    // 2048 (was 1024) + tighter frustum: the ridged crag geometry has
    // high-frequency depth detail, and at 1024/±45 each shadow texel
    // covered ~0.09u — sub-texel ridge shadows re-rolled per frame as
    // the island turned (shadow twinkle) and leaked light under steep
    // aretes. Doubling the map and shrinking the frustum quadruples
    // effective shadow resolution.
    sunLight.shadow.mapSize.set(2048, 2048);
    sunLight.shadow.camera.near = 400;
    sunLight.shadow.camera.far = 900;
    sunLight.shadow.camera.left   = -36;
    sunLight.shadow.camera.right  =  36;
    sunLight.shadow.camera.top    =  36;
    sunLight.shadow.camera.bottom = -36;
    // normalBias raised for the steep crag faces (acne there read as
    // dark speckle on the LIT side and as shadow fragments apparently
    // on the night side).
    sunLight.shadow.bias = -0.0002;
    sunLight.shadow.normalBias = 0.06;

    sunLight.layers.enable(2);
    scene.add(sunLight);

    // --- Moonlight — cool blue, tracks the orbiting moon every frame ---
    // Secondary fill so the night hemisphere picks up a moon-blue tint.
    // Stays on layer 0 only; the glass dish (layer 1) does NOT receive
    // this light, so it can't produce a specular glint on the dish.
    // intensity=0 by default — the moon is decorative only. moonLight as
    // a non-zero DirectionalLight produced a moving blue specular spot on
    // the glass and water that mirrored the moon's orbital position.
    const moonLight = new THREE.DirectionalLight(0x6688bb, 0.0);
    scene.add(moonLight);

    // --- Hemisphere light — cool sky-tinted fill so terrain detail reads
    // on the night side without washing out the lit side.
    // Stays on layer 0 only: the glass dish (layer 2) should be lit
    // primarily by the sun. With hemi enabled on layer 2 the blue sky
    // color was leaking onto the dish's bottom edge as an unwanted
    // cool-blue tint that read as moon glow. ---
    const hemiLight = new THREE.HemisphereLight(
        new THREE.Color(0.42, 0.54, 0.75), // sky
        new THREE.Color(0.12, 0.10, 0.08),  // ground
        0.65
    );
    if (window.__DAILY_PARAMS) {
        hemiLight.color.set(window.__DAILY_PARAMS.hemiSky);
        hemiLight.groundColor.set(window.__DAILY_PARAMS.hemiGround);
    }
    scene.add(hemiLight);

    // --- Ambient — baseline visibility for night-side terrain.
    // Layer 0 only, same reasoning as hemi above. The glass relies on
    // sun + envMap for its character; ambient was painting the dish
    // cool-blue and washing out the specular look. ---
    const ambLight = new THREE.AmbientLight(0x44597a, 0.85);
    scene.add(ambLight);

    // --- Reverse-rim fill — camera-facing hemisphere key-fill.
    // Points FROM (+x,+y,+z) so home/connect zones get full rim
    // while research/publications zones preserve their terminator.
    // Stays on layer 0 only: we don't want the rim producing a
    // camera-follow specular highlight on the glass dish (user
    // explicitly wants the sun as the only glass glint source). ---
    const rimLight = new THREE.DirectionalLight(window.__DAILY_PARAMS?.rimColor ?? 0xb4d2ee, 1.20);
    rimLight.position.set(80, 45, 130);
    scene.add(rimLight);

    // --- Static tone mapping exposure (must match js/scene.js) ---
    renderer.toneMappingExposure = 1.1;

    // --- Orbiting moon — always visible, phase-lit by the sun ---
    const moonTex = new THREE.TextureLoader().load('moon.jpg');
    // moon.jpg is an sRGB photo. Without tagging it, the renderer treats
    // the values as linear and the output transform double-brightens them
    // (the washed-out "gamey" look the moon had).
    moonTex.colorSpace = THREE.SRGBColorSpace;
    const moonGeo = new THREE.SphereGeometry(1.2, 64, 64); // halved from 2.5 — realistic angular size at orbit radius 90
    // Custom shader: the hemisphere facing the sun is lit, opposite side is
    // dark with a tiny ambient term so the silhouette is still readable.
    // Relief comes from a normal perturbed by the albedo-luminance gradient
    // (maria dark/low, highlands bright/high is wrong geology but right
    // visual: crater fields roughen the terminator, which is where the eye
    // checks whether a sphere is really lit).
    const moonMat = new THREE.ShaderMaterial({
        uniforms: {
            uMap:         { value: moonTex },
            uSunWorldPos: { value: SUN_WORLD_POSITION.clone() },
            uTint:        { value: new THREE.Color(0xccccdd) },
            uAmbient:     { value: 0.10 },
            uGlow:        { value: 0.40 },
            uBumpScale:   { value: 2.2 },
        },
        vertexShader: `
            varying vec3 vWorldNormal;
            varying vec3 vWorldPos;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vWorldNormal = normalize(mat3(modelMatrix) * normal);
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }`,
        fragmentShader: `
            uniform sampler2D uMap;
            uniform vec3 uSunWorldPos;
            uniform vec3 uTint;
            uniform float uAmbient;
            uniform float uGlow;
            uniform float uBumpScale;
            varying vec3 vWorldNormal;
            varying vec3 vWorldPos;
            varying vec2 vUv;
            float lum(vec2 uv) {
                vec3 c = texture2D(uMap, uv).rgb;
                return dot(c, vec3(0.299, 0.587, 0.114));
            }
            void main() {
                vec3 N = normalize(vWorldNormal);
                vec3 L = normalize(uSunWorldPos - vWorldPos);

                // Bump normal from the texture-luminance gradient. The
                // sphere's tangent frame is analytic: east = up x N,
                // north = N x east (degenerate only at the poles, which
                // face away from every camera pose in this scene).
                vec2 texel = vec2(1.5) / vec2(1024.0, 512.0);
                float hL = lum(vUv - vec2(texel.x, 0.0));
                float hR = lum(vUv + vec2(texel.x, 0.0));
                float hD = lum(vUv - vec2(0.0, texel.y));
                float hU = lum(vUv + vec2(0.0, texel.y));
                vec3 east  = normalize(cross(vec3(0.0, 1.0, 0.0), N));
                vec3 north = cross(N, east);
                vec3 Nb = normalize(N + (east  * (hL - hR) +
                                         north * (hD - hU)) * uBumpScale);

                float lambert = max(dot(Nb, L), 0.0);
                // Geometric-normal lambert gates the bump so relief cannot
                // light pixels past the true terminator into the night side.
                float gate = smoothstep(0.0, 0.06, dot(N, L));
                // Soften the terminator so the phase feels natural.
                float lit = pow(lambert, 0.80) * gate;
                vec3 tex = texture2D(uMap, vUv).rgb;
                // Ambient bumped so night side still shows surface detail.
                vec3 col = tex * uTint * (uAmbient + lit * 1.85);
                // Fresnel rim: warm moonrise-grey instead of the old
                // synthetic ice-blue, softened (higher power, sun-weighted
                // so the lit limb carries most of it) — the limb still
                // reads during an eclipse, it just no longer looks lit
                // by a neon tube.
                vec3 V = normalize(cameraPosition - vWorldPos);
                float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0);
                float sunSide = 0.35 + 0.65 * smoothstep(-0.2, 0.5, dot(N, L));
                col += vec3(0.72, 0.68, 0.60) * rim * uGlow * sunSide;
                gl_FragColor = vec4(col, 1.0);
            }`,
    });
    const moonOrb = new THREE.Mesh(moonGeo, moonMat);
    moonOrb.frustumCulled = false;
    // Moon on layer 4 — main camera enables layer 4 so the moon is
    // visible in the main view, but the water mirror camera (which
    // renders layers 0 + 1 only) skips it, so the moon's reflection
    // no longer appears on the ocean surface.
    moonOrb.layers.set(4);
    scene.add(moonOrb);
    state.moonOrb = moonOrb;

    // --- Gateway Core — orbits the moon ---
    // gateway.min.glb is the quantized + simplified + WebP-textured build
    // of gateway.glb (66 MB → 2.9 MB). Regenerate with:
    //   npx @gltf-transform/cli optimize gateway.glb gateway.min.glb \
    //     --compress quantize --texture-compress webp --texture-size 256 \
    //     --simplify-error 0.001
    new GLTFLoader().load('gateway.min.glb', (gltf) => {
        const gateway = gltf.scene;
        gateway.scale.set(0.03, 0.03, 0.03); // much smaller — like a real station vs a moon
        gateway.frustumCulled = false;
        scene.add(gateway);
        state.gateway = gateway;

        // Cache emissive meshes ONCE at load time so per-frame updates don't
        // need to walk the scene graph. The gateway GLB has many child meshes.
        const emissiveMeshes = [];
        gateway.traverse((child) => {
            if (child.isMesh) {
                child.userData.aoInclude = true; // solid geometry — GTAO G-buffer (scene.js)
                if (child.material && child.material.emissive) {
                    emissiveMeshes.push(child);
                }
                // Exposure control: under the intensity-5.2 sun key the
                // station's pale solar panels blew out to uniform HDR
                // white, and the biggest panel read as a solid WHITE
                // SQUARE hovering at the rim whenever the orbit crossed
                // the sun-camera axis. Halving albedo + raising panel
                // roughness keeps the sunlit station in the printable
                // range with visible truss/panel detail.
                if (child.material && child.material.color) {
                    child.material.color.multiplyScalar(0.5);
                    if (child.material.roughness !== undefined) {
                        child.material.roughness = Math.max(child.material.roughness, 0.55);
                    }
                }
            }
        });
        state._gatewayEmissiveMeshes = emissiveMeshes;

        // Invisible hit sphere for gateway drag targeting.
        // Gateway is scaled 0.03, so a radius-120 sphere in local space
        // becomes ~3.6 world units — easy to click.
        const gwHitGeo = new THREE.SphereGeometry(120, 8, 8);
        const gwHitMat = new THREE.MeshBasicMaterial({ visible: false });
        const gwHit = new THREE.Mesh(gwHitGeo, gwHitMat);
        gwHit.name = '_gatewayHitSphere';
        gateway.add(gwHit);
        state._gatewayHitSphere = gwHit;
    });

    // --- Sun orb (visual) — back-left on orbital plane, shader-based star surface ---
    // Distance ~607 from origin. Radius 10 gives a ~1.9° angular diameter —
    // genuinely small + distant, reads as a real star from orbital distance.
    const sunOrbGeo = new THREE.SphereGeometry(10, 64, 64);
    const sunOrbMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            // Limb colors as uniforms so the star-type presets
            // (starTypes.js) can retint the disc without a recompile.
            uLimbCenter: { value: new THREE.Color(1.0, 0.97, 0.88) },
            uLimbMid:    { value: new THREE.Color(1.0, 0.78, 0.42) },
            uLimbEdge:   { value: new THREE.Color(0.95, 0.45, 0.15) },
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewNormal;
            varying vec3 vPosition;
            void main() {
                vUv = uv;
                vNormal = normal;
                // View-space normal for proper limb darkening from any camera angle
                vViewNormal = normalize(normalMatrix * normal);
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec3 uLimbCenter;
            uniform vec3 uLimbMid;
            uniform vec3 uLimbEdge;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewNormal;
            varying vec3 vPosition;

            // --- 3D hash + value noise (no UV seam artifacts at poles) ---
            float hash13(vec3 p) {
                p = fract(p * vec3(0.1031, 0.1030, 0.0973));
                p += dot(p, p.yxz + 33.33);
                return fract((p.x + p.y) * p.z);
            }
            float noise3D(vec3 p) {
                vec3 i = floor(p), f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float n000 = hash13(i);
                float n100 = hash13(i + vec3(1,0,0));
                float n010 = hash13(i + vec3(0,1,0));
                float n110 = hash13(i + vec3(1,1,0));
                float n001 = hash13(i + vec3(0,0,1));
                float n101 = hash13(i + vec3(1,0,1));
                float n011 = hash13(i + vec3(0,1,1));
                float n111 = hash13(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }

            void main() {
                // 3D position-based noise — no UV seams, no pole pinching
                vec3 p = normalize(vPosition) * 6.0;

                // 4-octave fBm for solar granulation / supergranulation
                float n = noise3D(p + uTime * 0.08) * 0.35
                        + noise3D(p * 2.1 - uTime * 0.12) * 0.25
                        + noise3D(p * 4.3 + uTime * 0.18) * 0.15
                        + noise3D(p * 8.7 - uTime * 0.25) * 0.08;

                // Slow large-scale convection cells (supergranulation)
                float cells = noise3D(p * 1.2 + vec3(uTime * 0.03, 0.0, uTime * 0.02));
                cells = smoothstep(0.35, 0.65, cells);

                // View-dependent limb darkening — works from any camera angle
                float limb = max(0.0, vViewNormal.z);
                // Realistic solar limb darkening: stronger at edge, keeps center bright
                float limbDark = 0.3 + 0.7 * pow(limb, 0.45);

                // Base color: preset-driven (star spectral class)
                vec3 center = uLimbCenter;
                vec3 midLimb = uLimbMid;
                vec3 edge = uLimbEdge;
                // Two-stage limb color: center->mid at limb 0.6, mid->edge below
                float limbN = pow(limb, 0.5);
                vec3 limbColor = mix(edge, midLimb, smoothstep(0.0, 0.45, limbN));
                limbColor = mix(limbColor, center, smoothstep(0.45, 1.0, limbN));

                // Composite: base color * darkening * turbulence
                vec3 col = limbColor * limbDark;
                col *= 0.82 + n * 0.36;
                // Granulation: subtle bright network between convection cells
                col += vec3(0.12, 0.08, 0.02) * cells * limbDark;

                // HDR emissive boost: the disc must sit WELL above the
                // bloom threshold (0.8 scene-linear) so the pass builds a
                // real glare core around it — at 1.35 it barely cleared
                // the knee and read as a flat orange sticker. Limb stays
                // relatively darker so the disc keeps its sphere read
                // inside the glow.
                col *= 2.2;

                gl_FragColor = vec4(col, 1.0);
            }
        `,
        depthWrite: true,
    });
    const sunOrb = new THREE.Mesh(sunOrbGeo, sunOrbMat);
    sunOrb.frustumCulled = false;
    sunOrb.visible = true;
    scene.add(sunOrb);

    // Halos — billboard sprites with baked radial-gradient textures so
    // the glow reads as a soft atmospheric field rather than a hard
    // sphere silhouette. Previously used BackSide spheres, which
    // additive-accumulate thickest at the rim (longest ray path through
    // the surface), producing a distinct sphere outline instead of a
    // feathered halo. Sprites always face the camera, and the texture
    // carries the radial falloff.
    function makeHaloTexture(innerRGB, outerRGB, gamma) {
        const size = 256;
        const cvs = document.createElement('canvas');
        cvs.width = cvs.height = size;
        const ctx = cvs.getContext('2d');
        const img = ctx.createImageData(size, size);
        const c = size / 2;
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const dx = (x - c) / c;
                const dy = (y - c) / c;
                const r = Math.min(1, Math.sqrt(dx*dx + dy*dy));
                // Radial falloff — bright at center, soft to zero at rim.
                const t = Math.pow(1.0 - r, gamma);
                const idx = (y * size + x) * 4;
                img.data[idx]     = innerRGB[0] * t + outerRGB[0] * (1 - t);
                img.data[idx + 1] = innerRGB[1] * t + outerRGB[1] * (1 - t);
                img.data[idx + 2] = innerRGB[2] * t + outerRGB[2] * (1 - t);
                img.data[idx + 3] = t * 255;
            }
        }
        ctx.putImageData(img, 0, 0);
        const tex = new THREE.CanvasTexture(cvs);
        tex.anisotropy = 4;
        return tex;
    }

    // Inner corona: tight, bright, warm-white center → warm-yellow fade
    const innerHaloTex = makeHaloTexture([255, 240, 200], [255, 200, 130], 2.4);
    const sunHaloInnerMat = new THREE.SpriteMaterial({
        map: innerHaloTex,
        color: 0xffffff,
        transparent: true,
        opacity: 0.17,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
    });
    const sunHaloInner = new THREE.Sprite(sunHaloInnerMat);
    sunHaloInner.scale.setScalar(32); // diameter of bright inner field
    sunOrb.add(sunHaloInner);

    // Outer corona: wider, warmer, softer edge — reads as scattered light
    const outerHaloTex = makeHaloTexture([255, 180, 100], [255, 120, 40], 1.6);
    const sunHaloMat = new THREE.SpriteMaterial({
        map: outerHaloTex,
        color: 0xffffff,
        transparent: true,
        opacity: 0.11,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
    });
    const sunHalo = new THREE.Sprite(sunHaloMat);
    sunHalo.scale.setScalar(70);
    sunOrb.add(sunHalo);

    state.sunOrb = sunOrb;
    state._sunHaloMat = sunHaloMat;
    state._sunHaloInnerMat = sunHaloInnerMat;

    // --- Invisible hit spheres for easier click-and-drag targeting ---
    const sunHitGeo = new THREE.SphereGeometry(10, 16, 16);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });

    const sunHit = new THREE.Mesh(sunHitGeo, hitMat);
    sunHit.name = '_sunHitSphere';
    sunOrb.add(sunHit); // child of sunOrb — follows its position automatically
    state._sunHitSphere = sunHit;

    const moonHitGeo = new THREE.SphereGeometry(2, 16, 16);
    const moonHit = new THREE.Mesh(moonHitGeo, hitMat.clone());
    moonHit.material.visible = false;
    moonHit.name = '_moonHitSphere';
    // Match the moonOrb's layer so the easter-egg raycaster (which uses
    // the main camera's layer mask) can still hit this sphere.
    moonHit.layers.set(4);
    moonOrb.add(moonHit); // child of moonOrb
    state._moonHitSphere = moonHit;

    // --- Orbital-plane diagram -------------------------------------------
    // Two rings only: the island's heliocentric orbit (centered on the sun,
    // radius = sun→origin distance so it passes through the dish) and the
    // moon's orbit around the dish (centered on origin). No grid, no HZ
    // band, no ticks, no ecliptic — per explicit user direction.
    const diagramGroup = new THREE.Group();
    diagramGroup.name = 'orbitalDiagramGroup';
    scene.add(diagramGroup);

    const SUN_WORLD = SUN_WORLD_POSITION;
    const AU = Math.hypot(SUN_WORLD.x, SUN_WORLD.z);

    function _makeCircle(radius, material, center, segs) {
        const pts = [];
        const aProgress = [];
        for (let i = 0; i <= segs; i++) {
            const a = (i / segs) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
            aProgress.push(i / segs);
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        geo.setAttribute('aProgress', new THREE.Float32BufferAttribute(aProgress, 1));
        const line = new THREE.LineLoop(geo, material);
        line.position.copy(center);
        line.renderOrder = -5;
        line.frustumCulled = false;
        return line;
    }

    // Island heliocentric orbit: solid line, distance-faded so the far
    // half of the orbit vanishes into space instead of terminating at
    // the viewport edge. Fade starts close to the dish (40u) and is
    // fully transparent by 340u so only the near arc reads at all.
    const islandOrbitMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
            baseColor:   { value: new THREE.Color(0x5f95b8) },
            // Quieter than the old 0.22 — the rings should read as a
            // faint astro-diagram overlay, not neon hoops, now that the
            // physical scene carries photo-level materials.
            baseOpacity: { value: 0.15 },
            nearFalloff: { value: 40.0 },
            farFalloff:  { value: 340.0 },
            // Inner cutoff: the ring is centred on the sun with radius =
            // sun->origin, so its near arc passes straight through the
            // dish. The translucent ocean/glass don't occlude it, so it
            // read as a line drawn across the water. Dissolve it inside
            // the dish footprint (ocean r = 31.5) and let it emerge only
            // just beyond the rim.
            innerStart: { value: 33.0 },
            innerEnd:   { value: 50.0 },
        },
        vertexShader: `
            varying vec3 vWorldPos;
            void main() {
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `,
        fragmentShader: `
            uniform vec3 baseColor;
            uniform float baseOpacity;
            uniform float nearFalloff;
            uniform float farFalloff;
            uniform float innerStart;
            uniform float innerEnd;
            varying vec3 vWorldPos;
            void main() {
                float d = length(vWorldPos.xz);
                float fade = 1.0 - smoothstep(nearFalloff, farFalloff, d);
                // Kill the arc inside the dish/glass footprint.
                fade *= smoothstep(innerStart, innerEnd, d);
                if (fade < 0.01) discard;
                gl_FragColor = vec4(baseColor, baseOpacity * fade);
            }
        `,
    });
    // 1024 segments (was 256): at radius ~607 a 256-gon has ~15u straight
    // chords that read as visible SEGMENTS in the near arc.
    const islandOrbitRing = _makeCircle(AU, islandOrbitMat, SUN_WORLD, 1024);
    diagramGroup.add(islandOrbitRing);
    state._islandOrbitRing = islandOrbitRing;

    // Moon orbit: original solid line. Stays close to the dish so no
    // fade is necessary.
    const moonOrbitMat = new THREE.LineBasicMaterial({
        color: 0x6fa5c8, transparent: true, opacity: 0.16, depthWrite: false,
    });
    const moonOrbitRing = _makeCircle(MOON_ORBIT_RADIUS, moonOrbitMat, new THREE.Vector3(0, 0, 0), 512);
    // Match the moon orb's layer so the ring isn't picked up by the
    // water mirror camera (which renders layers 0 + 1). The comment
    // predates the actual call — the ring sat on layer 0 and the ocean
    // reflected an orbit ring with no moon on it.
    moonOrbitRing.layers.set(4);
    diagramGroup.add(moonOrbitRing);
    state._moonOrbitRing = moonOrbitRing;

    state._diagramGroup = diagramGroup;

    // --- Enable shadow casting/receiving on terrain meshes ---
    // Traverse islandGroup to find the mountain mesh (uses state.mtnGeo)
    // and enable castShadow + receiveShadow so the cone self-shadows.
    // Deferred to next frame so terrain.js has finished adding meshes.
    requestAnimationFrame(() => {
        if (state.islandGroup) {
            state.islandGroup.traverse((child) => {
                if (child.isMesh && child.geometry === state.mtnGeo) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    });

    // --- Atmospheric glow: subtle radial-gradient sphere around island ---
    // NOT the old hazeDome (BackSide, additive, sharp ring). This is a
    // FrontSide sphere with a custom shader that paints a soft radial
    // falloff in screen-space, visible only from outside. The gradient
    // peaks at the sphere edge and fades to zero at center, creating the
    // illusion of a thin atmosphere around the island cluster without a

    // --- Store references ---
    state.sunLight = sunLight;
    state.moonLight = moonLight;
    state.hemiLight = hemiLight;
    state.ambLight = ambLight;
    state.rimLight = rimLight;

}

// LOCKED by owner: "behind isle" placement — the sun rises just past
// the island's shoulder in the home framing, backlighting the peak.
const SUN_PHASE0 = -0.35;

// Scratch for the slow orbital sun drift (no per-frame allocation).
const _orbitSunPos = new THREE.Vector3();

// --- Per-frame update: static sun, orbiting moon, gateway, water, effects ---
export function updateScene(elapsed) {
    const {
        scene, camera,
        sunLight, moonLight,
        SUN_DIR, water,
    } = state;

    // Drag overrides (unused in current build, kept for extensibility).
    const drag = state._dragOverride || {};

    // --- Sun position: fully STATIC (owner-locked). ---
    // SUN_WORLD_POSITION rotated once by SUN_PHASE0 ("behind isle"
    // staging). No orbital drift, no backdrop parade — the sun, sky,
    // terminator, and every framing hold still for the whole visit.
    _orbitSunPos.copy(drag.sun || SUN_WORLD_POSITION);
    if (!drag.sun) {
        const c = Math.cos(SUN_PHASE0), s = Math.sin(SUN_PHASE0);
        const ox = _orbitSunPos.x, oz = _orbitSunPos.z;
        _orbitSunPos.x = ox * c - oz * s;
        _orbitSunPos.z = ox * s + oz * c;
    }
    const sunPos = _orbitSunPos;
    sunLight.position.copy(sunPos);
    SUN_DIR.copy(sunPos).normalize();

    if (state.sunOrb) {
        if (!drag.sun) state.sunOrb.position.copy(sunPos);
        if (state.sunOrb.material.uniforms) {
            // Wrapped: the granulation hash loses fp32 precision as its
            // time offset grows and degenerates into per-pixel flicker
            // after ~an hour of uptime (same class as the water-column
            // static). One invisible re-seed every 10 min instead.
            state.sunOrb.material.uniforms.uTime.value = elapsed % 600;
        }
    }

    // --- Moon: real circular orbit around the dish (origin) in the y=0 plane ---
    // Radius and period live in config.js. Phase chosen so t=0 places the
    // moon roughly behind/right of the dish — close to its old static spot.
    // --- Moon boost: terminal's /gogogo command pushes this structure ---
    // { factor, orbitsLeft } — while active, angle advances factor× faster
    // and orbitsLeft decrements each full 2π swept; restores on exhaust.
    const boost = window.__moonBoost;
    if (!state._moonPhase) state._moonPhase = MOON_ORBIT_PHASE;
    if (state._moonPrevElapsed === undefined) state._moonPrevElapsed = elapsed;
    const dt = Math.max(0, elapsed - state._moonPrevElapsed);
    state._moonPrevElapsed = elapsed;
    const rate = (Math.PI * 2) / MOON_ORBIT_PERIOD;
    const factor = (boost && boost.orbitsLeft > 0) ? boost.factor : 1;
    const delta = rate * factor * dt;
    state._moonPhase += delta;
    if (boost && boost.orbitsLeft > 0 && factor !== 1) {
        boost._swept = (boost._swept || 0) + Math.abs(delta);
        const oneOrbit = Math.PI * 2;
        while (boost._swept >= oneOrbit && boost.orbitsLeft > 0) {
            boost._swept -= oneOrbit;
            boost.orbitsLeft -= 1;
        }
        if (boost.orbitsLeft <= 0) window.__moonBoost = null;
    }
    const moonAngle = state._moonPhase;
    if (!drag.moon) {
        _moonScratch.set(
            Math.cos(moonAngle) * MOON_ORBIT_RADIUS,
            0,
            Math.sin(moonAngle) * MOON_ORBIT_RADIUS
        );
    }
    const moonPos = drag.moon || _moonScratch;

    if (state.moonOrb) {
        state.moonOrb.position.copy(moonPos);
        state.moonOrb.visible = true;

        // Track the sun in world-space so the lit hemisphere always faces it.
        if (state.moonOrb.material.uniforms && state.sunOrb) {
            state.moonOrb.material.uniforms.uSunWorldPos.value.copy(state.sunOrb.position);
        }

        moonLight.position.copy(moonPos);

        // --- Gateway: orbital capture system ---
        // Drag near sun or moon → gets captured into orbit around that body
        if (state.gateway) {
            const CAPTURE_R = 15;
            const gwOrbitR = 6;
            const gwPeriod = 50;

            if (drag.gateway) {
                // Being dragged — check proximity for orbit capture on release
                const gp = state.gateway.position;
                const dSun = state.sunOrb ? gp.distanceTo(state.sunOrb.position) : Infinity;
                const dMoon = state.moonOrb ? gp.distanceTo(state.moonOrb.position) : Infinity;
                if (dSun < CAPTURE_R) {
                    state._gwCaptureTarget = 'sun';
                } else if (dMoon < CAPTURE_R) {
                    state._gwCaptureTarget = 'moon';
                } else {
                    state._gwCaptureTarget = null;
                }
            } else {
                // Not dragged — orbit the captured (or default) body
                const target = state._gwCaptureTarget || state._gwOrbitTarget || 'moon';
                state._gwOrbitTarget = target;
                state._gwCaptureTarget = null;

                const hostPos = (target === 'sun' && state.sunOrb)
                    ? state.sunOrb.position
                    : (state.moonOrb ? state.moonOrb.position : null);

                if (hostPos) {
                    const gwPhase = (elapsed / gwPeriod) * Math.PI * 2;
                    state.gateway.position.set(
                        hostPos.x + Math.sin(gwPhase) * gwOrbitR * 0.5,
                        hostPos.y + Math.cos(gwPhase) * gwOrbitR,
                        hostPos.z + Math.cos(gwPhase) * gwOrbitR * 0.5
                    );
                    state.gateway.rotation.y = gwPhase * 0.5;
                }
                // Clear stale drag override
                if (drag.gateway) delete drag.gateway;
            }

            state.gateway.visible = true;

            // Specular glint — iterate the cached mesh list (no per-frame
            // traverse). View-dependent term is identical for every child
            // since they all share the gateway's world position, so compute
            // it once outside the loop.
            const meshes = state._gatewayEmissiveMeshes;
            if (meshes && meshes.length) {
                const toSun = _gwToSun
                    .subVectors(sunLight.position, state.gateway.position).normalize();
                const toCamera = _gwToCam
                    .subVectors(camera.position, state.gateway.position).normalize();
                // Tighter specular lobe (exp 64) so the glint is a brief, sharp
                // flash as the viewing angle sweeps past the reflection vector.
                // Intensity capped at 1.3 (was 4.0): at 4.0 the whole station
                // blew out into a uniform HDR white and its boxy silhouette
                // read as a solid WHITE SQUARE hovering at the rim whenever
                // its orbit crossed the sun-camera axis (live-bisected). 1.3
                // still clears the 0.8 bloom knee for a visible twinkle.
                const glint = Math.pow(Math.max(0, toSun.dot(toCamera)), 64);
                const r = glint * 1.0, g = glint * 1.0, b = glint * 1.2;
                const ei = glint * 1.3;
                for (let i = 0; i < meshes.length; i++) {
                    const mat = meshes[i].material;
                    mat.emissive.setRGB(r, g, b);
                    mat.emissiveIntensity = ei;
                }
            }
        }
    }

    // (Water sunDirection/sunColor/waterColor writes removed: they were
    // 100% masked dead work — updateOcean owns sunDirection (with the
    // elevation lift) and applyWeatherToScene owns both colors, running
    // later in the same frame. Leaving a second writer here was a latent
    // conflicting-writes trap if animate.js ever reordered.)

    // --- Light rays + caustics: fixed blend ---
    if (window._lightRays) {
        window._lightRays.uniforms.uDayBlend.value = 0.7;
    }
    if (window._caustics) {
        window._caustics.uniforms.uDayBlend.value = 0.7;
    }

    // --- Foam: fixed opacity (no dayBlend modulation) ---
    if (window._foam && window._foam.mesh && window._foam.mesh.visible) {
        // Gentle breathing around the material's intended faint level.
        // This used to pump 0.3-0.7 — an order of magnitude over the
        // 0.07 the foam ships with — and the reflected shoreline foam
        // strobed as a glittering patch on the water.
        window._foam.mat.opacity = 0.09 + Math.sin(elapsed * 0.8) * 0.035;
    }

    // --- Volcano lava glow: single uniform write, GPU does the per-vertex blend ---
    // Was an O(N_verts) JS loop + full color buffer re-upload every frame
    // (~263k verts × 3 floats). Now one float per frame. See ISSUES P1 #5.
    // The eruption sequence (volcano.js) multiplies this through
    // window._volcanoGlow so the crater veins simmer up during a burst.
    if (state.terrainPulseUniform) {
        state.terrainPulseUniform.value =
            0.6 * (0.8 + Math.sin(elapsed * 1.5) * 0.2) * (window._volcanoGlow || 1.0);
    }

    // --- Atmospheric glow: track camera position for fresnel ---
    // (atmospheric glow sphere removed — see initLighting comment)

}

