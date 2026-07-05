import * as THREE from 'three';
import {
    state, OCEAN_LEVEL, OCEAN_RADIUS, TERRAIN_HEIGHT,
    BASE_DEPTH, FLOOR_Y,
    RAIN_COUNT, RAIN_AREA, RAIN_HEIGHT, RAIN_SPEED,
} from './config.js?v=real16';

export function initEffects() {
    const { islandGroup, scene, camera, SUN_DIR } = state;

    // --- Underwater caustics on seabed (subtle, edge-focused) ---
    const causticGeo = new THREE.CircleGeometry(OCEAN_RADIUS, 64);
    causticGeo.rotateX(-Math.PI / 2);
    const causticMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uSunDir: { value: SUN_DIR },
            uDayBlend: { value: 0.5 },
            uRadius: { value: OCEAN_RADIUS },
            // Integrated drift offsets (world-units of UV). The shader
            // previously offset its pattern by sunDir * ABSOLUTE time —
            // and with a rotating sun direction that product traces an
            // ever-accelerating spiral: the caustic web visibly swept
            // around the dish faster and faster until it flickered.
            // ocean.js integrates these incrementally (dir * dt) instead.
            uDrift1: { value: new THREE.Vector2(0, 0) },
            uDrift2: { value: new THREE.Vector2(0, 0) },
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vPos;
            void main() {
                vUv = uv;
                vPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec3 uSunDir;
            uniform float uDayBlend;
            uniform float uRadius;
            uniform vec2 uDrift1;
            uniform vec2 uDrift2;
            varying vec2 vUv;
            varying vec3 vPos;

            // --- Voronoi helpers for sharp caustic network ---
            vec2 hash2(vec2 p) {
                p = vec2(dot(p, vec2(127.1, 311.7)),
                         dot(p, vec2(269.5, 183.3)));
                return fract(sin(p) * 43758.5453);
            }

            // Returns (F1, F2) — closest and second-closest Voronoi distances
            vec2 voronoi(vec2 p) {
                vec2 n = floor(p);
                vec2 f = fract(p);
                float d1 = 8.0, d2 = 8.0;
                for (int j = -1; j <= 1; j++) {
                    for (int i = -1; i <= 1; i++) {
                        vec2 g = vec2(float(i), float(j));
                        vec2 o = hash2(n + g);
                        vec2 r = g + o - f;
                        float d = dot(r, r);
                        if (d < d1) { d2 = d1; d1 = d; }
                        else if (d < d2) { d2 = d; }
                    }
                }
                return vec2(sqrt(d1), sqrt(d2));
            }

            void main() {
                float dist = length(vPos.xz);
                if (dist > uRadius) discard;

                // Two overlapping Voronoi layers at different scales/speeds
                // produce the sharp bright-line network of real water caustics
                vec2 sunXZ = normalize(uSunDir.xz + vec2(0.001));
                // Drift comes in PRE-INTEGRATED (see uniform comment):
                // direction changes only steer future motion, they can
                // never spin the accumulated offset.
                vec2 uv1 = vPos.xz * 0.25 + uDrift1;
                vec2 uv2 = vPos.xz * 0.38 + uDrift2 + vec2(5.1, 2.7);

                vec2 v1 = voronoi(uv1);
                vec2 v2 = voronoi(uv2);

                // F2 - F1 gives the bright edges between cells — the caustic lines
                float edge1 = smoothstep(0.0, 0.18, v1.y - v1.x);
                float edge2 = smoothstep(0.0, 0.18, v2.y - v2.x);

                // Combine: where both layers have edges = bright focal line
                float caustic = edge1 * edge2;
                // Add individual contributions at lower intensity for fill
                caustic += (edge1 + edge2) * 0.15;
                caustic = pow(caustic, 0.7); // compress dynamic range slightly

                // Visible across the whole floor, slightly stronger at edges
                float radialFade = 0.5 + 0.5 * smoothstep(uRadius * 0.3, uRadius * 0.85, dist);

                // Sun-facing side stronger
                float sunFace = dot(normalize(vPos.xz + vec2(0.001)), sunXZ) * 0.35 + 0.65;

                // 0.15 (was 0.28): subtle shimmer, not a light show.
                float light = caustic * radialFade * sunFace * uDayBlend * 0.15;

                if (light < 0.003) discard;

                // Slightly blue-green tint — underwater light
                vec3 col = vec3(0.55, 0.72, 0.82) * light;
                gl_FragColor = vec4(col, light);
            }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
        side: THREE.FrontSide,
    });
    const causticMesh = new THREE.Mesh(causticGeo, causticMat);
    causticMesh.position.y = -1.88;
    causticMesh.renderOrder = 3;
    // DISABLED FOR LAUNCH (owner decision, and good riddance): this
    // shader caused two separate runaway artifacts — the accelerating
    // rotating light-sweep (direction x absolute-time spiral) and then
    // the edge-weighted flashing ring (unbounded drift offsets rotting
    // the Voronoi hash's fp32 precision). It was also buried invisible
    // under the bathymetry for months, so the scene never depended on
    // it. The seabed reads clean without it.
    causticMesh.visible = false;
    islandGroup.add(causticMesh);
    window._caustics = causticMat;
    window._causticsMesh = causticMesh;

    // --- Underwater light rays (caustics visible from the side) ---
    const rayH = BASE_DEPTH + 0.1;
    const rayGeo = new THREE.CylinderGeometry(OCEAN_RADIUS - 0.2, OCEAN_RADIUS - 0.2, rayH, 64, 16, true);
    const rayMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uSunDir: { value: SUN_DIR },
            uDayBlend: { value: 0.5 },
            uRadius: { value: OCEAN_RADIUS },
            // Locked-in beam strength (cathedral look, dialed down from
            // the 2.2 audition value — full strength read too hot).
            uBeamMul: { value: 1.5 },
        },
        vertexShader: `
            varying vec3 vPos;
            varying vec3 vWorld;
            varying vec3 vNormal;
            void main() {
                vPos = position;
                // World position for the day/night gate: the mesh is a child
                // of the rotating island group, so an object-space gate rode
                // the lit beams around to the night side. World space keeps
                // them pinned to the sun-facing half as the island turns.
                vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec3 uSunDir;
            uniform float uDayBlend;
            uniform float uRadius;
            uniform float uBeamMul;
            varying vec3 vPos;
            varying vec3 vWorld;
            varying vec3 vNormal;

            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p), f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
                           mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
            }

            void main() {
                float cylAngle = atan(vPos.z, vPos.x);
                float dist = length(vPos.xz);
                float normY = (vPos.y + ${(BASE_DEPTH + 0.1).toFixed(1)} * 0.5) / ${(BASE_DEPTH + 0.1).toFixed(1)};

                // Sun position drives everything
                vec2 sunXZ = normalize(uSunDir.xz + vec2(0.001));
                float sunAngle = atan(sunXZ.y, sunXZ.x);
                float sunElev = uSunDir.y; // raw, not clamped — negative = below horizon

                // Beam intensity scales smoothly with sun elevation
                float sunStrength = smoothstep(-0.3, 0.8, sunElev); // gradual 0->1
                float beamWidth = 0.3 + sunStrength * 0.5; // narrow at dusk, wide at noon

                // Tilt follows sun XZ angle directly
                float tilt = dot(normalize(vPos.xz), sunXZ) * (0.1 + sunStrength * 0.2) * (1.0 - normY);

                // Wobble — livelier, faster
                float wobble = noise(vec2(cylAngle * 6.0 + uTime * 0.25, normY * 3.0 + uTime * 0.1)) * 0.15;

                // Many fine beams — 40+ shafts, very thin
                float b1 = sin(cylAngle * 40.0 + tilt + wobble + sunAngle);
                b1 = smoothstep(1.0 - beamWidth * 0.3, 1.0, b1);

                float b2 = sin(cylAngle * 65.0 + tilt * 1.2 + wobble * 2.0 + sunAngle * 0.7 + 2.1);
                b2 = smoothstep(1.0 - beamWidth * 0.2, 1.0, b2) * 0.5;

                float b3 = sin(cylAngle * 90.0 + tilt * 0.6 - uTime * 0.05 + sunAngle * 1.3);
                b3 = smoothstep(1.0 - beamWidth * 0.15, 1.0, b3) * 0.25;

                float beam = b1 + b2 + b3;

                // Lively flicker — faster, more variation
                float flicker = noise(vec2(cylAngle * 15.0 + uTime * 0.5, normY * 4.0 - uTime * 0.3));
                float flicker2 = noise(vec2(cylAngle * 25.0 - uTime * 0.3, normY * 2.0 + uTime * 0.2));
                beam *= 0.4 + flicker * 0.35 + flicker2 * 0.25;

                // Depth fade. pow base clamped: normY interpolates a
                // hair NEGATIVE at the bottom edge and pow(negative, x)
                // NaNs on ANGLE/D3D — the NaN quads rendered as the big
                // BLACK SQUARES when the beams were enabled (same bug
                // class as the historical bloom black-rectangle frames).
                float depthFade = pow(max(normY, 1e-4), 1.5);

                // Edge-focused
                float radialFade = smoothstep(uRadius * 0.65, uRadius, dist);

                // Sun-facing: DAY EDGES ONLY. The old window opened at
                // dot -0.2 (past the terminator) and a 0.03 uncondition-
                // al floor kept a ghost of the beams on the night glass.
                // Window now starts clearly inside the lit half and the
                // floor is gone — the cathedral light lives and dies
                // with the day side.
                // Gate in WORLD space so the lit beams never rotate onto the
                // night side with the island. Hard window on the lit half so
                // they die before the terminator.
                float sunFacing = dot(normalize(vWorld.xz), sunXZ);
                sunFacing = smoothstep(0.30, 0.74, sunFacing);

                float light = beam * depthFade * radialFade * sunFacing;

                // Scale with sun — smooth swell/shrink, NOT binary
                light *= sunStrength * 0.38;

                // Faint moonlight scatter, same day-side gate.
                float moonGlow = (1.0 - sunStrength) * 0.02 * beam * depthFade * radialFade * sunFacing;
                light += moonGlow;

                if (light < 0.003) discard;

                // Color shifts with sun position
                float warmth = sunElev * 0.5 + 0.5; // 0=cool, 1=warm
                vec3 col = mix(vec3(0.2, 0.35, 0.55), vec3(0.6, 0.5, 0.35), warmth) * light;

                gl_FragColor = vec4(col * uBeamMul, light * 0.35 * uBeamMul);
            }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
        side: THREE.FrontSide,
    });
    const rayMesh = new THREE.Mesh(rayGeo, rayMat);
    rayMesh.position.y = FLOOR_Y + rayH / 2 + 0.05;
    rayMesh.renderOrder = 5;
    rayMesh.visible = true; // locked-in look: beams always on
    islandGroup.add(rayMesh);
    // Publish the handle the per-frame updaters already expect —
    // lighting.js and ocean.js both wrote to window._lightRays but no
    // one ever assigned it, so re-enabling the beams would have frozen
    // them at their init time/sun values.
    window._lightRays = rayMat;
    window._lightRaysMesh = rayMesh;

    // --- Rain system — instanced billboard quads with SDF capsule shading ---
    // Each drop is a camera-aligned plane (not a line). The fragment shader
    // draws an uneven capsule SDF stacked 5x vertically so the streak reads
    // as motion-blur rather than a geometric line. Billboard aligns the
    // quad's local +Y with world-down crossed against the camera look
    // direction — i.e. the streak lies flat across the viewing plane so it
    // always presents its full width regardless of yaw.
    // Scene is macro-scale (island radius ~12, dish ~32). Few, long, wide
    // streaks read far better than many thin lines at this scale.
    const PRM = typeof window !== 'undefined' && window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Island radius is ~12u and the scene reads as a *massive* landform
    // seen from middle distance. Real rain at that mental scale is a
    // fine veil, not stripes. Drops are deliberately under-scaled — a
    // few hundredths of a unit wide, under half a unit tall — so they
    // register as specks rather than boulders.
    const RAIN_N = PRM ? 70 : 140;
    const RAIN_R = 11.5;
    const RAIN_TOP = TERRAIN_HEIGHT + 2.2;
    const RAIN_BOTTOM = OCEAN_LEVEL + 0.2;
    // Halved: at 0.38/0.042 each drop read as a falling rod against the
    // island scale — rain at this distance should be fine streaks.
    const RAIN_STREAK = 0.20;      // quad height in world units
    const RAIN_WIDTH = 0.022;      // quad width in world units
    const rainHeads = new Float32Array(RAIN_N * 3);
    const rainVelocities = new Float32Array(RAIN_N);
    const rainScales = new Float32Array(RAIN_N); // per-drop size jitter
    // Cheap 2D density probe matching the cloud shader's base fBm,
    // sampled on a 48x48 grid over the cloud disc at mid-Y. Used by
    // the rain respawn to bias drops toward dense cells.
    const DENS_RES = 48;
    const densGrid = new Float32Array(DENS_RES * DENS_RES);
    (function bakeDensityGrid() {
        function h3(x, y, z) { const s = Math.sin(x*127.1 + y*311.7 + z*74.7) * 43758.5453; return s - Math.floor(s); }
        function n3(x, y, z) {
            const ix=Math.floor(x), iy=Math.floor(y), iz=Math.floor(z);
            const fx=x-ix, fy=y-iy, fz=z-iz;
            const sx=fx*fx*(3-2*fx), sy=fy*fy*(3-2*fy), sz=fz*fz*(3-2*fz);
            const a=h3(ix,iy,iz), b=h3(ix+1,iy,iz), c=h3(ix,iy+1,iz), d=h3(ix+1,iy+1,iz);
            const e=h3(ix,iy,iz+1), f=h3(ix+1,iy,iz+1), g=h3(ix,iy+1,iz+1), h=h3(ix+1,iy+1,iz+1);
            return (a+(b-a)*sx)*(1-sy)*(1-sz) + (c+(d-c)*sx)*sy*(1-sz)
                 + (e+(f-e)*sx)*(1-sy)*sz    + (g+(h-g)*sx)*sy*sz;
        }
        for (let j = 0; j < DENS_RES; j++) {
            for (let i = 0; i < DENS_RES; i++) {
                const u = i / DENS_RES, v = j / DENS_RES;
                let sum = 0, amp = 1, norm = 0, freq = 3.0;
                for (let o = 0; o < 4; o++) {
                    sum += amp * n3(u*freq, 1.5, v*freq);
                    norm += amp; amp *= 0.5; freq *= 2.0;
                }
                densGrid[j * DENS_RES + i] = sum / norm;
            }
        }
    })();
    for (let i = 0; i < RAIN_N; i++) {
        const theta = Math.random() * Math.PI * 2;
        const rad = Math.sqrt(Math.random()) * RAIN_R;
        rainHeads[i*3]   = Math.cos(theta) * rad;
        rainHeads[i*3+1] = RAIN_BOTTOM + Math.random() * (RAIN_TOP - RAIN_BOTTOM);
        rainHeads[i*3+2] = Math.sin(theta) * rad;
        rainVelocities[i] = 0.85 + Math.random() * 0.40;
        rainScales[i] = 0.82 + Math.random() * 0.38;
    }

    // Quad geometry: pivot at the HEAD (leading edge). Plane hangs from
    // origin UPWARD in local +Y (from y=0 to y=+RAIN_STREAK). When the
    // instance matrix rotates local +Y to point OPPOSITE velocity, the
    // plane trails BEHIND the head along the velocity axis — i.e. the
    // head (pivot, UV.y=0) is the leading/dense end and the tail
    // (UV.y=1) feathers out upstream, just like real motion blur.
    const rainGeo = new THREE.PlaneGeometry(RAIN_WIDTH, RAIN_STREAK);
    rainGeo.translate(0, RAIN_STREAK * 0.5, 0);

    const rainMat = new THREE.ShaderMaterial({
        uniforms: {
            uIntensity: { value: 0.42 },
            // Color cools toward slate blue under storm; runtime lerps this
            // from the baseline set here toward a darker tint in animate.js.
            uColor:     { value: new THREE.Color(0x9fb6d4) },
            uColumnR:   { value: RAIN_R },
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vInstancePos; // world XZ (y unused) of head
            void main() {
                vUv = uv;
                // Column center comes from the instance translation.
                // Extract xyz from instanceMatrix column 3.
                vInstancePos = vec3(instanceMatrix[3].x, instanceMatrix[3].y, instanceMatrix[3].z);
                vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: `
            precision highp float;
            varying vec2 vUv;
            varying vec3 vInstancePos;
            uniform float uIntensity;
            uniform vec3  uColor;
            uniform float uColumnR;

            // Uneven capsule SDF. r1=wide (head), r2=narrow (tail), h=height.
            // p is the local coord with origin at the head center.
            float sdUnevenCapsule(vec2 p, float r1, float r2, float h) {
                p.x = abs(p.x);
                float b = (r1 - r2) / h;
                float a = sqrt(1.0 - b * b);
                float k = dot(p, vec2(-b, a));
                if (k < 0.0) return length(p) - r1;
                if (k > a * h) return length(p - vec2(0.0, h)) - r2;
                return dot(p, vec2(a, b)) - r1;
            }

            void main() {
                // Remap uv → local capsule frame. Head is at uv.y=0 (pivot).
                // c.x centered [-1,1], c.y measured from head along tail
                // direction [0 at head, 2 at tail end].
                vec2 c = vec2((vUv.x - 0.5) * 2.0, vUv.y * 2.0);

                // Stacked blur: 5 capsule samples vertically offset so the
                // streak reads as motion-blurred rather than geometric.
                float acc = 0.0;
                for (int i = 0; i < 5; i++) {
                    vec2 pp = c - vec2(0.0, 0.2 * float(i));
                    float d = sdUnevenCapsule(pp, 0.05, 0.0, 2.0);
                    acc += 1.0 - smoothstep(0.0, 0.08, d);
                }
                acc /= 5.0;

                // Column edge fade — drops near the rim taper out so the
                // shower doesn't terminate on a hard disc boundary.
                float rad = length(vInstancePos.xz);
                float columnFade = 1.0 - smoothstep(uColumnR * 0.70, uColumnR, rad);

                // Head-bright tail-dim so the leading edge pops and the
                // tail feels like true motion decay. Head is at uv.y=0.
                float headLift = smoothstep(0.15, 0.0, vUv.y);
                float alpha = acc * (0.55 + 0.45 * headLift) * uIntensity * columnFade;

                if (alpha < 0.005) discard;
                gl_FragColor = vec4(uColor, alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: THREE.NormalBlending,
        side: THREE.DoubleSide,
    });

    const rainMesh = new THREE.InstancedMesh(rainGeo, rainMat, RAIN_N);
    rainMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    rainMesh.frustumCulled = false; // per-instance billboard, bounds change
    rainMesh.visible = true;
    rainMesh.renderOrder = 12;
    rainMesh.layers.set(2);
    islandGroup.add(rainMesh);

    // --- Splash rings at the ocean surface ---
    // Procedural ring SDF that expands and fades. Pool of ~28 rings; each
    // ring independently drifts through its 0→1 progress, respawns at a
    // random disc point under the rain column when its life ends.
    const SPLASH_N = PRM ? 0 : 55;
    let splashMesh = null, splashData = null;
    if (SPLASH_N > 0) {
        // Ring plane stays small (0.26u) and expands via the vertex
        // shader's progress-based scale — final outer ripple stays
        // under ~0.5u so splashes read as pinprick impacts, not craters.
        // 0.08 (owner-tuned down twice from 0.26): raindrop impacts are
        // barely-there pinpricks at this scene scale.
        const splashGeo = new THREE.PlaneGeometry(0.08, 0.08);
        splashGeo.rotateX(-Math.PI / 2); // lie flat on ocean surface
        const splashMat = new THREE.ShaderMaterial({
            uniforms: {
                uIntensity: { value: 0.42 },
                uColor:     { value: new THREE.Color(0xc4d4e8) },
            },
            vertexShader: `
                attribute float aProgress;
                varying vec2 vUv;
                varying float vProgress;
                void main() {
                    vUv = uv;
                    vProgress = aProgress;
                    // Scale the plane as the ring expands so outer ripple
                    // gets room to travel. instanceMatrix provides position.
                    float s = 0.4 + aProgress * 1.4;
                    vec3 p = position * s;
                    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                varying float vProgress;
                uniform float uIntensity;
                uniform vec3  uColor;
                void main() {
                    if (vProgress <= 0.0 || vProgress >= 1.0) discard;
                    vec2 c = vUv - 0.5;
                    float r = length(c) * 2.0;
                    // Two rings — primary expanding crown + inner secondary.
                    float ringR1 = vProgress * 0.95;
                    float ringR2 = vProgress * 0.55;
                    float w = 0.05 + vProgress * 0.05;
                    float ring1 = smoothstep(w, 0.0, abs(r - ringR1));
                    float ring2 = smoothstep(w * 0.7, 0.0, abs(r - ringR2)) * 0.5;
                    float ring = ring1 + ring2;
                    // Fade ring with progress so impact flashes then dies.
                    float life = (1.0 - vProgress) * smoothstep(0.0, 0.08, vProgress);
                    float alpha = ring * life * uIntensity * 0.9;
                    if (alpha < 0.005) discard;
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending,
            side: THREE.DoubleSide,
        });
        splashMesh = new THREE.InstancedMesh(splashGeo, splashMat, SPLASH_N);
        splashMesh.frustumCulled = false;
        const aProgress = new Float32Array(SPLASH_N);
        const splashProgress = new Float32Array(SPLASH_N);
        const splashLife = new Float32Array(SPLASH_N); // seconds per ring
        const splashPos = new Float32Array(SPLASH_N * 2); // x,z
        for (let i = 0; i < SPLASH_N; i++) {
            const theta = Math.random() * Math.PI * 2;
            const rad = Math.sqrt(Math.random()) * RAIN_R;
            splashPos[i*2]   = Math.cos(theta) * rad;
            splashPos[i*2+1] = Math.sin(theta) * rad;
            splashProgress[i] = Math.random(); // stagger
            splashLife[i] = 0.6 + Math.random() * 0.5;
            aProgress[i] = splashProgress[i];
        }
        splashGeo.setAttribute('aProgress', new THREE.InstancedBufferAttribute(aProgress, 1));
        splashMesh.renderOrder = 11;
        splashMesh.layers.set(2);
        islandGroup.add(splashMesh);
        splashData = { mesh: splashMesh, mat: splashMat,
                       progress: splashProgress, life: splashLife,
                       pos: splashPos, aProgress, count: SPLASH_N };
    }

    window._rain = {
        enabled: true,
        mesh: rainMesh,
        mat: rainMat,
        heads: rainHeads,
        velocities: rainVelocities,
        scales: rainScales,
        count: RAIN_N,
        radius: RAIN_R,
        top: RAIN_TOP,
        bottom: RAIN_BOTTOM,
        speed: 13.0,
        streak: RAIN_STREAK,
        width: RAIN_WIDTH,
        intensity: 0.42,
        densGrid,
        densRes: DENS_RES,
        // Matches cloud shader drift (x: 0.0085, z: 0.0055 per uTime unit)
        // scaled to world units — cells drift, rain drifts with them.
        driftX: 0.0085 * 14.0,
        driftZ: 0.0055 * 14.0,
        splash: splashData,
        reducedMotion: PRM,
    };

    // --- Shore steam vents (3 spots, 8 particles each) ---
    const VENT_CT = 3, VENT_PP = 8, VENT_TOTAL = VENT_CT * VENT_PP;
    const svp = new Float32Array(VENT_TOTAL * 3);
    const svv = new Float32Array(VENT_TOTAL * 3);
    const svl = new Float32Array(VENT_TOTAL);
    const ventAngles = [];
    for (let v = 0; v < VENT_CT; v++) {
        const va = (v / VENT_CT) * Math.PI * 2 + 0.5;
        ventAngles.push(va);
        const vx = Math.cos(va) * 5.5, vz = Math.sin(va) * 5.5;
        for (let i = 0; i < VENT_PP; i++) {
            const j = v * VENT_PP + i;
            svp[j*3] = vx + (Math.random()-0.5)*0.3;
            svp[j*3+1] = OCEAN_LEVEL + 0.05;
            svp[j*3+2] = vz + (Math.random()-0.5)*0.3;
            svv[j*3] = (Math.random()-0.5)*0.06; svv[j*3+1] = 0.12+Math.random()*0.06; svv[j*3+2] = (Math.random()-0.5)*0.06;
            svl[j] = Math.random() * 2.0;
        }
    }
    const svg = new THREE.BufferGeometry();
    svg.setAttribute('position', new THREE.BufferAttribute(svp, 3));
    const svm = new THREE.PointsMaterial({
        color: 0xffffff, size: 0.03, transparent: true,
        opacity: 0.10, depthWrite: false, sizeAttenuation: true,
    });
    // Hidden for launch: the discrete steam-dot particles read as
    // cartoonish next to the photo terrain. Systems stay built so the
    // effect can be re-enabled by flipping this visibility.
    const shoreVentPts = new THREE.Points(svg, svm);
    shoreVentPts.visible = false;
    islandGroup.add(shoreVentPts);
    window._shoreVent = { pos: svp, vel: svv, life: svl, geo: svg, count: VENT_TOTAL, angles: ventAngles, pp: VENT_PP, mesh: shoreVentPts };

    // --- Volumetric clouds above the island ---
    // Raymarched density field bounded to a shallow disc inside the dome.
    // Physically-motivated lighting: Henyey-Greenstein dual-lobe phase
    // (strong forward peak + wide back lobe), Beer-Lambert extinction with
    // per-channel absorption (blue survives deeper → cloud bottoms go cool),
    // 5-tap cone-march toward the sun for self-shadow, Wrenninge-style
    // multiple-scattering energy term that recovers the fluffy inside
    // glow that single-scatter alone undersells, and a sky ambient lift
    // for the shadowed undersides. Adaptive march with early-out; most
    // camera rays miss the disc bound and cost nothing.
    {
        // Volume sits well above the island peak inside the dish. The
        // deck was previously centered 2u above the summit, which — with
        // CLOUD_HEIGHT/2 = 3.9u — put the cloud FLOOR nearly 2u BELOW
        // the peak, so cells visibly clipped through the mountaintop.
        // Raised so the LCL base sits a clear margin above the summit:
        // CLOUD_Y - CLOUD_HEIGHT/2 = TERRAIN_HEIGHT + 2.4. Height
        // reduced slightly so tops stay inside the dome (SHIELD_RADIUS
        // 37, interior safe to ~28 vertical).
        const CLOUD_SIZE = 28;
        const CLOUD_HEIGHT = 5.4;
        const CLOUD_Y = TERRAIN_HEIGHT + 3.5;
        const CLOUD_RES = 64;

        // 3D noise texture: low-frequency worley-ish base + high-freq
        // detail packed into G channel. R = base (big puff shapes),
        // G = detail (flocculent edges). Two channels cost one sampler.
        const cloudData = new Uint8Array(CLOUD_RES * CLOUD_RES * CLOUD_RES * 2);
        function hash3D(x, y, z) {
            const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
            return s - Math.floor(s);
        }
        function noise3D(x, y, z) {
            const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
            const fx = x - ix, fy = y - iy, fz = z - iz;
            const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
            const n000 = hash3D(ix, iy, iz), n100 = hash3D(ix+1, iy, iz);
            const n010 = hash3D(ix, iy+1, iz), n110 = hash3D(ix+1, iy+1, iz);
            const n001 = hash3D(ix, iy, iz+1), n101 = hash3D(ix+1, iy, iz+1);
            const n011 = hash3D(ix, iy+1, iz+1), n111 = hash3D(ix+1, iy+1, iz+1);
            const nx00 = n000 + (n100 - n000) * sx, nx10 = n010 + (n110 - n010) * sx;
            const nx01 = n001 + (n101 - n001) * sx, nx11 = n011 + (n111 - n011) * sx;
            const nxy0 = nx00 + (nx10 - nx00) * sy, nxy1 = nx01 + (nx11 - nx01) * sy;
            return nxy0 + (nxy1 - nxy0) * sz;
        }
        // Tileable 3D fBm by averaging wrapped noise samples at integer
        // offsets. Cheap way to get wrap-continuous periodicity for drift.
        function fbmTileable(x, y, z, octaves, period) {
            let sum = 0, amp = 1, norm = 0, freq = 1;
            for (let o = 0; o < octaves; o++) {
                const p = period * freq;
                // Wrap to p then sample with hash — noise3D handles interp.
                const xw = ((x * freq) % p + p) % p;
                const yw = ((y * freq) % p + p) % p;
                const zw = ((z * freq) % p + p) % p;
                sum += amp * noise3D(xw, yw, zw);
                norm += amp;
                amp *= 0.5;
                freq *= 2.0;
            }
            return sum / norm;
        }
        // Tileable inverted Worley (cellular) noise: one feature point per
        // grid cell, neighbor lookups wrapped mod period so the field
        // repeats seamlessly. Returns 1 at feature points falling to 0
        // away from them, which reads as packed rounded lobes (the
        // cauliflower basis real cumulus has and value-noise fog lacks).
        function worleyTileable(x, y, z, period) {
            const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
            let minD2 = 1e9;
            for (let dz = -1; dz <= 1; dz++) {
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        const cx = ix + dx, cy = iy + dy, cz = iz + dz;
                        const wx = ((cx % period) + period) % period;
                        const wy = ((cy % period) + period) % period;
                        const wz = ((cz % period) + period) % period;
                        const px = cx + hash3D(wx, wy, wz);
                        const py = cy + hash3D(wx + 57.3, wy + 21.7, wz);
                        const pz = cz + hash3D(wx, wy + 113.1, wz + 45.9);
                        const d2 = (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
                        if (d2 < minD2) minD2 = d2;
                    }
                }
            }
            return Math.max(0, 1 - Math.sqrt(minD2));
        }
        // 3-octave Worley fBm (Hillaire tileable-volume weights).
        function worleyFbm(x, y, z, period) {
            return worleyTileable(x,     y,     z,     period)     * 0.625 +
                   worleyTileable(x * 2, y * 2, z * 2, period * 2) * 0.25  +
                   worleyTileable(x * 4, y * 4, z * 4, period * 4) * 0.125;
        }
        let ci = 0;
        for (let z = 0; z < CLOUD_RES; z++) {
            for (let y = 0; y < CLOUD_RES; y++) {
                for (let x = 0; x < CLOUD_RES; x++) {
                    const fx = x / CLOUD_RES, fy = y / CLOUD_RES, fz = z / CLOUD_RES;
                    // Base: Perlin-Worley — value fBm remapped onto an
                    // inverted-Worley floor (Schneider/Hillaire). Worley
                    // carves the continuous fog field into distinct
                    // rounded lumps; the fBm keeps their outlines ragged.
                    const per = fbmTileable(fx * 3.0, fy * 3.0, fz * 3.0, 4, 3.0);
                    const wor = worleyFbm(fx * 3.0, fy * 3.0, fz * 3.0, 3);
                    const base = wor + per * (1.0 - wor);
                    // Detail: high-freq Worley fBm — billowed scalloped
                    // edges instead of the old value-noise fuzz.
                    const det = worleyFbm(fx * 8.0, fy * 8.0, fz * 8.0, 8);
                    cloudData[ci++] = Math.max(0, Math.min(255, base * 255));
                    cloudData[ci++] = Math.max(0, Math.min(255, det * 255));
                }
            }
        }
        const cloudTex = new THREE.Data3DTexture(cloudData, CLOUD_RES, CLOUD_RES, CLOUD_RES);
        cloudTex.format = THREE.RGFormat;
        cloudTex.type = THREE.UnsignedByteType;
        cloudTex.minFilter = THREE.LinearFilter;
        cloudTex.magFilter = THREE.LinearFilter;
        cloudTex.wrapS = THREE.RepeatWrapping;
        cloudTex.wrapT = THREE.RepeatWrapping;
        cloudTex.wrapR = THREE.RepeatWrapping;
        cloudTex.unpackAlignment = 1;
        cloudTex.needsUpdate = true;

        const cloudMat = new THREE.RawShaderMaterial({
            glslVersion: THREE.GLSL3,
            uniforms: {
                map:        { value: cloudTex },
                cameraPos:  { value: new THREE.Vector3() },
                sunDirLocal:{ value: new THREE.Vector3(-0.93, 0.0, -0.37).normalize() },
                // Warm-cream rim (held back from saturated orange) for
                // silver-lining on the sun-facing silhouette. Cool teal
                // sky ambient + cool blue ground bounce so shadowed sides
                // read blue, matching the dish glass + deep ocean palette.
                sunColor:   { value: new THREE.Color(0.99, 0.95, 0.84) },
                skyColor:   { value: new THREE.Color(0.30, 0.44, 0.66) },
                groundColor:{ value: new THREE.Color(0.06, 0.10, 0.16) },
                coverage:   { value: 0.72 },
                densityScale:{ value: 3.2 },
                absorption: { value: new THREE.Vector3(0.72, 0.78, 1.05) },
                // Sun intensity bumped (was 7.4) and multi-scatter
                // contribution dropped (was 0.55) so the sun-facing side
                // reads visibly brighter than the shadowed side — the
                // clouds were rendering too uniformly. The MS term fills
                // the dark side with bounced light; reducing it preserves
                // a true terminator on cumulus puffs.
                sunIntensity:{ value: 10.5 },
                // 0 clear .. 1 full storm: darkens the deck (storm clouds
                // are optically thick and swallow their own light).
                uStormDark:  { value: 0.0 },
                anisoForward:{ value: 0.82 },
                anisoBack:   { value: -0.30 },
                lobeMix:     { value: 0.38 },
                msAtten:     { value: 0.40 },
                msContrib:   { value: 0.30 },
                msPhase:     { value: 0.70 },
                frame:      { value: 0 },
                uTime:      { value: 0 },
                uDensityMul:{ value: 1.0 },
                // Wind multiplier scales the drift velocities in sampleDensity.
                // Clear=1.0, storm pushes to ~3.0 so cells visibly shear
                // across the sky instead of idling in place.
                uWindMul:   { value: 1.0 },
                uWindT:     { value: 0.0 },
                // Mesh scale of the volume box. Directions must be divided
                // by this to go island-local -> unit-cube space, otherwise
                // the shallow box flattens the sun elevation ~5x and the
                // deck reads side-lit no matter where the sun is.
                uVolScale:  { value: new THREE.Vector3(CLOUD_SIZE, CLOUD_HEIGHT, CLOUD_SIZE) },
            },
            vertexShader: `
                in vec3 position;
                uniform mat4 modelMatrix;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform vec3 cameraPos;
                out vec3 vOrigin;
                out vec3 vDirection;
                void main() {
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.0)).xyz;
                    vDirection = position - vOrigin;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                precision highp float;
                precision highp sampler3D;
                in vec3 vOrigin;
                in vec3 vDirection;
                out vec4 color;

                uniform sampler3D map;
                uniform vec3  sunDirLocal;
                uniform vec3  sunColor;
                uniform vec3  skyColor;
                uniform vec3  groundColor;
                uniform vec3  absorption;
                uniform float coverage;
                uniform float densityScale;
                uniform float sunIntensity;
                uniform float uStormDark;
                uniform float anisoForward;
                uniform float anisoBack;
                uniform float lobeMix;
                uniform float msAtten;
                uniform float msContrib;
                uniform float msPhase;
                uniform float frame;
                uniform float uTime;
                uniform float uDensityMul;
                uniform float uWindMul;
                uniform float uWindT;
                uniform vec3  uVolScale;

                // Unit cube bound in object space (mesh is scaled to fill).
                vec2 hitBox(vec3 orig, vec3 dir) {
                    const vec3 box_min = vec3(-0.5);
                    const vec3 box_max = vec3(0.5);
                    vec3 inv_dir = 1.0 / dir;
                    vec3 t0s = (box_min - orig) * inv_dir;
                    vec3 t1s = (box_max - orig) * inv_dir;
                    vec3 tmin = min(t0s, t1s);
                    vec3 tmax = max(t0s, t1s);
                    return vec2(max(tmin.x, max(tmin.y, tmin.z)),
                                min(tmax.x, min(tmax.y, tmax.z)));
                }

                // Blue-noise-ish dither so the first march step jitters
                // per-pixel per-frame. Kills slab banding in thin bounds.
                float ign(vec2 p, float f) {
                    p += f * vec2(47.0, 113.0);
                    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
                }

                // Sample density at object-space p (range -0.5..0.5).
                // Tiled wrap + two drift velocities for the big base and
                // the fine detail, so the edges shimmer while the body
                // moves slower — reads as turbulent convection.
                float sampleDensity(vec3 p) {
                    // Drift: body moves slow, detail moves faster but
                    // scaled down so the small-scale shimmer doesn't
                    // outrun the macro motion. Divergent direction per
                    // octave to avoid a marching conveyor look.
                    // uWindT is an INTEGRATED wind phase (accumulated per
                    // frame in animate.js), not absolute time times a
                    // multiplier: with uTime * uWindMul, dragging the
                    // weather slider changed the multiplier and the whole
                    // deck TELEPORTED to a new phase — clouds raced,
                    // formed, and tore during the drag. Integrate, never
                    // multiply absolute time (the caustics lesson).
                    vec3 qBase = p + vec3(uWindT * 0.0085, 0.0, uWindT * 0.0055);
                    vec3 qDet  = p + vec3(uWindT * 0.022, uWindT * 0.006, uWindT * 0.018);
                    // Domain warp: bend the sample coordinates by a very
                    // low-frequency tap before the tiled lookups. From
                    // TOP-DOWN the raw tiling read as a square repeating
                    // grid — the warp shears every repeat differently so
                    // the pattern never lines up with itself.
                    vec3 warp = vec3(
                        texture(map, p * 0.31 + vec3(0.13, 0.71, 0.37)).r - 0.5,
                        0.0,
                        texture(map, p * 0.29 + vec3(0.83, 0.29, 0.61)).r - 0.5
                    ) * 0.55;
                    qBase += warp;
                    qDet += warp * 1.4;
                    float base = texture(map, qBase + 0.5).r;
                    float det  = texture(map, qDet  * 2.3 + 0.5).g;
                    // Second tap at a different phase breaks the uniform
                    // puck into distinct cumulus cells. Must vary FASTER
                    // than once per volume (the old 0.6x sampling gave a
                    // near-constant field across the disc, so the deck
                    // stayed one merged blob no matter the coverage) —
                    // 2.2x gives roughly 4-6 lobes across the footprint.
                    float cell = texture(map, qBase * 2.2 + vec3(0.37, 0.19, 0.73)).r;

                    // Radial disc falloff — warped by noise so the cloud
                    // cluster's outline is organic, not a perfect circle.
                    // Noise pushes the effective radius ±0.12 unit per
                    // cell so some edges bulge out, others cut in.
                    float outlineWarp = (cell - 0.5) * 0.24;
                    float r = length(p.xz) * 2.0;
                    // Cauliflower narrowing with height: the disc pulls
                    // inward as it climbs, so cumulus SIDE-ON reads as
                    // a rounded dome instead of a puck. Upper half of
                    // the volume loses up to 42% of its radius; the LCL
                    // stays wide so the flat base keeps its footprint.
                    float hyNorm = p.y + 0.5;
                    float vertNarrow = 1.0 - smoothstep(0.42, 0.95, hyNorm) * 0.42;
                    float outerR = 0.96 * vertNarrow + outlineWarp;
                    float innerR = 0.50 * vertNarrow + outlineWarp;
                    float discMask = smoothstep(outerR, innerR, r);

                    // Cumulus vertical profile: hard floor at the LCL
                    // (lifting condensation level) so the base reads
                    // FLAT rather than tapered — real cumulus looks
                    // like someone sliced the bottom off with a razor.
                    // Base height jitters per cell (0.02..0.10) so it's
                    // not a perfect plane, and the ramp over just 0.04
                    // produces a crisp dark underside. Top varies per
                    // cell (short puffs vs tall towers) with extra
                    // jitter so overhead view doesn't look like a ceiling.
                    float hy = p.y + 0.5;
                    float baseH = mix(0.02, 0.10, cell);
                    // Steepened cell response: the Perlin-Worley cell
                    // field clusters around 0.65, so a linear map put
                    // nearly every cell at the same cap height and the
                    // deck skyline read as a flat-topped puck edge-on.
                    // Squaring the spread gives mostly low puffs with a
                    // few genuine towers.
                    float tCell = smoothstep(0.42, 0.95, cell);
                    float topCap = mix(0.32, 1.05, tCell * tCell);
                    topCap += (base - 0.5) * 0.24;
                    // Virga: under the densest cells, leak a whisper of
                    // density below the LCL — reads as trailing rain-shaft
                    // wisps connecting cloud base to shower column. Only
                    // active where the cell is dense (cell > 0.55) and
                    // modulated by detail noise so it breaks into strands
                    // rather than a uniform drool.
                    float baseRamp = smoothstep(baseH, baseH + 0.04, hy);
                    float virgaMask = smoothstep(0.55, 0.85, cell) *
                                      smoothstep(0.0, baseH, hy) *
                                      (0.3 + 0.7 * det) * 0.18;
                    float vProf = max(baseRamp, virgaMask) *
                                  smoothstep(topCap, topCap - 0.55, hy);

                    // Multiply by cell mask so the coverage threshold
                    // varies spatially — some regions clear sky, some
                    // thick cumulus. The Perlin-Worley base sits higher
                    // than the old value-noise field, so the cell swing
                    // must be wide (0.30..1.15 through a steepened cell
                    // response) or the whole disc saturates into one
                    // merged cottonball with no gaps between cells.
                    float cellW = smoothstep(0.40, 0.92, cell);
                    float localCov = coverage * mix(0.30, 1.15, cellW);

                    float d = base;
                    d = smoothstep(1.0 - localCov, 1.0 - localCov + 0.30, d);
                    d *= discMask * vProf;
                    // Erode with the high-freq Worley detail so
                    // silhouettes break into billowed scallops rather than
                    // terminating on a smooth contour. Weight rises where
                    // density is thin, so interiors stay solid.
                    d = max(0.0, d - (1.0 - d) * det * 0.85);
                    return d * densityScale * uDensityMul;
                }

                // Dual-lobe Henyey-Greenstein. Strong forward lobe for
                // silver-lining + wide back lobe for side-lit softness.
                float hg(float cosT, float g) {
                    float g2 = g * g;
                    float denom = 1.0 + g2 - 2.0 * g * cosT;
                    return (1.0 - g2) / (12.566370614 * pow(max(denom, 1e-4), 1.5));
                }
                float phase(float cosT) {
                    return mix(hg(cosT, anisoForward), hg(cosT, anisoBack), lobeMix);
                }

                // Short cone-march toward the sun through the volume.
                // Returns optical depth (density*length sum) rather than
                // transmittance so we can evaluate Beer-Lambert with
                // per-channel absorption outside the loop.
                float sunMarch(vec3 p, vec3 sunCube) {
                    const int SUN_STEPS = 5;
                    // Geometric step schedule: short near-sample steps
                    // catch the hot occluder, long far steps catch bulk.
                    float stepLens[5] = float[5](0.03, 0.04, 0.06, 0.10, 0.18);
                    float tau = 0.0;
                    vec3 q = p;
                    float t = 0.0;
                    for (int i = 0; i < SUN_STEPS; i++) {
                        float s = stepLens[i];
                        t += s;
                        q = p + sunCube * t;
                        if (any(greaterThan(abs(q), vec3(0.5)))) break;
                        float d = sampleDensity(q);
                        tau += d * s;
                    }
                    return tau;
                }

                void main() {
                    vec3 rayDir = normalize(vDirection);
                    vec2 bounds = hitBox(vOrigin, rayDir);
                    if (bounds.x > bounds.y || bounds.y < 0.0) discard;
                    bounds.x = max(bounds.x, 0.0);

                    float marchLen = bounds.y - bounds.x;
                    // Adaptive step count: thin grazing paths get few
                    // steps, long vertical paths get more. Clamp 20..64.
                    int STEPS = int(clamp(marchLen * 40.0, 20.0, 64.0));
                    float stepSize = marchLen / float(STEPS);

                    // Dither start to break slab banding.
                    float j = ign(gl_FragCoord.xy, frame);
                    vec3 p = vOrigin + rayDir * (bounds.x + stepSize * j);

                    // The march happens in unit-cube space but the box is
                    // scaled (wide, shallow), so directions must be mapped
                    // between spaces. sunCube drives the shadow march
                    // (true top-down occlusion); the phase angle is taken
                    // between the REAL island-local directions or the
                    // silver-lining lobe lands on the wrong silhouette.
                    vec3 sunCube = normalize(sunDirLocal / uVolScale);
                    vec3 rayLocal = normalize(rayDir * uVolScale);
                    float cosT = dot(rayLocal, sunDirLocal);
                    float ph = phase(cosT);
                    // Wrenninge-style multiple scattering: sum N octaves
                    // of lower-attenuation, flatter-phase light so the
                    // inside of the cloud glows instead of going black.
                    float phMS = mix(ph, 0.25 / 12.566370614, msPhase);

                    vec3 scatter = vec3(0.0);
                    vec3 trans = vec3(1.0);

                    for (int i = 0; i < 64; i++) {
                        if (i >= STEPS) break;
                        // Early-out when nearly opaque.
                        if (max(trans.r, max(trans.g, trans.b)) < 0.01) break;

                        float d = sampleDensity(p);
                        if (d > 0.002) {
                            // Per-step extinction (Beer-Lambert).
                            vec3 sigmaE = absorption * d;
                            vec3 stepTrans = exp(-sigmaE * stepSize);

                            // Light at this sample: direct sun through
                            // cone-march depth, plus multi-scatter octaves
                            // with decaying attenuation & contribution.
                            float tauSun = sunMarch(p, sunCube);
                            vec3 sunAtt = exp(-absorption * tauSun);
                            vec3 sunAtt2 = exp(-absorption * tauSun * msAtten);
                            vec3 sunAtt3 = exp(-absorption * tauSun * msAtten * msAtten);

                            // Powder / dark-edge cue (Schneider): thin
                            // fringe density scatters little back toward
                            // the eye, so fresh billow edges read darker
                            // than the bright interior behind them. Only
                            // modulates the direct sun term.
                            float powder = 1.0 - exp(-d * 4.0);

                            vec3 lit = sunColor * sunIntensity * (
                                sunAtt * ph * mix(0.35, 1.0, powder) +
                                sunAtt2 * phMS * msContrib +
                                sunAtt3 * phMS * msContrib * msContrib
                            );

                            // Sky ambient from above, ground bounce from
                            // below. Tighter ramp (0.15..0.9) so the
                            // flat cumulus base stays dark & blue rather
                            // than glowing from the sky lift.
                            float hy = p.y + 0.5;
                            vec3 amb = mix(groundColor, skyColor, smoothstep(0.15, 0.9, hy));
                            lit += amb;
                            // Storm decks are optically thick: swallow
                            // scattered light as the weather rises so the
                            // deck goes properly DARK — and shift it cool,
                            // the bruised blue-gray of a real cell, not a
                            // sunlit cream puff.
                            lit *= mix(vec3(1.0), vec3(0.20, 0.23, 0.28), uStormDark);

                            // Integrate: scattered radiance over this
                            // interval (Sebastien Hillaire form).
                            vec3 integScatter = (lit - lit * stepTrans) / max(sigmaE, vec3(1e-4));
                            scatter += trans * integScatter;
                            trans *= stepTrans;
                        }
                        p += rayDir * stepSize;
                    }

                    float alpha = 1.0 - dot(trans, vec3(0.3333));
                    if (alpha < 0.005) discard;

                    // Mild tone curve so the sun-intensity pump doesn't
                    // clip when the bloom pass amps highlights.
                    vec3 rgb = scatter / (1.0 + scatter * 0.6);

                    // Aerial perspective — distant (near-horizon) rays
                    // travel through more atmosphere. Keep the fade
                    // modest or the sun-facing silver lining washes out
                    // into a bright smear. Softer ramp + lower mix keep
                    // the silhouette legible while still pulling
                    // distant puffs toward the sky palette.
                    float horiz = 1.0 - smoothstep(0.02, 0.55, abs(rayDir.y));
                    vec3 hazeCol = mix(skyColor, vec3(0.60, 0.66, 0.74), 0.30);
                    rgb = mix(rgb, hazeCol, horiz * 0.22);
                    alpha *= 1.0 - horiz * 0.12;

                    color = vec4(rgb, alpha);
                }
            `,
            side: THREE.BackSide,
            transparent: true,
            depthWrite: false,
        });
        const cloudGeo = new THREE.BoxGeometry(1, 1, 1);
        const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
        cloudMesh.scale.set(CLOUD_SIZE, CLOUD_HEIGHT, CLOUD_SIZE);
        cloudMesh.position.y = CLOUD_Y;
        cloudMesh.renderOrder = 16;
        cloudMesh.visible = true;
        // Layer 2 — matches glass dish. Keeps clouds out of Water.js's
        // layer-1 mirror pass (which would double the sky as a ghost
        // reflection) and out of the moon spotlight cone.
        cloudMesh.layers.set(2);
        islandGroup.add(cloudMesh);
        window._cloud = { mesh: cloudMesh, mat: cloudMat };

        // --- Cloud shadow disc: the single strongest "these clouds are
        //     actually in 3D space" cue. A horizontal plane sits just
        //     above the ocean surface and samples the same 3D noise
        //     texture to darken the terrain/water where clouds are
        //     overhead. Multiplicative blend. Drifts with the clouds. ---
        const shadowGeo = new THREE.CircleGeometry(CLOUD_SIZE / 2, 96);
        shadowGeo.rotateX(-Math.PI / 2);
        const shadowMat = new THREE.ShaderMaterial({
            uniforms: {
                map:       { value: cloudTex },
                uTime:     { value: 0 },
                uStrength: { value: 0.42 },
                uRadius:   { value: CLOUD_SIZE / 2 },
                uDensityMul:{ value: 1.0 },
                uWindMul:  { value: 1.0 },
                uWindT:    { value: 0.0 },
                // Mirrors the volume's coverage so the shadow pattern
                // grows and shrinks with the actual cloud amount.
                uCoverage: { value: 0.72 },
                // Sun-projected lateral offset (island-local xz, world
                // units): shadows fall down-sun of their caster instead of
                // directly underneath. Set per frame in animate.js.
                uSunOffset:{ value: new THREE.Vector2(0, 0) },
            },
            vertexShader: `
                varying vec3 vLocal;
                void main() {
                    vLocal = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                precision highp sampler3D;
                varying vec3 vLocal;
                uniform sampler3D map;
                uniform float uTime;
                uniform float uStrength;
                uniform float uRadius;
                uniform float uDensityMul;
                uniform float uWindMul;
                    uniform float uWindT;
                uniform vec2  uSunOffset;
                uniform float uCoverage;
                void main() {
                    float r = length(vLocal.xz) / uRadius;
                    if (r > 0.99) discard;

                    // Sample the cloud 3D texture at the point up-sun of
                    // this ground point (shadows land down-sun of their
                    // caster). Same drift velocities as the cloud shader
                    // so shadows track their caster. Vertical coordinate
                    // is mid-volume so we read the densest band.
                    vec3 p;
                    p.x = (vLocal.x + uSunOffset.x) / uRadius * 0.5 + 0.5 + uWindT * 0.0085 / 2.0;
                    p.z = (vLocal.z + uSunOffset.y) / uRadius * 0.5 + 0.5 + uWindT * 0.0055 / 2.0;
                    p.y = 0.55;
                    float d = texture(map, p).r;
                    // Same coverage-modulated threshold as the volume
                    // shader (cell mask widening the local coverage), so
                    // the shadow pattern tracks the actual cloud amount:
                    // zero coverage = zero shadow, broken cumulus = spot
                    // shadows, overcast = broad shade.
                    vec3 pc = p * 2.2 + vec3(0.37, 0.19, 0.73);
                    float cell = texture(map, pc).r;
                    float cellW = smoothstep(0.40, 0.92, cell);
                    float localCov = uCoverage * mix(0.30, 1.15, cellW);
                    d = smoothstep(1.0 - localCov, 1.0 - localCov + 0.30, d) * uDensityMul;

                    // Soft radial falloff at the disc rim so shadow doesn't
                    // terminate in a hard line — clouds don't have edges.
                    float rim = smoothstep(0.98, 0.55, r);
                    float shadow = d * uStrength * rim;

                    // Output color for MultiplyBlending: white = no change,
                    // dark = shadow. Cool blue tint matches the cool ocean
                    // palette rather than the previous warm-grey cast.
                    vec3 col = mix(vec3(1.0), vec3(0.32, 0.38, 0.52), shadow);
                    gl_FragColor = vec4(col, 1.0);
                }
            `,
            blending: THREE.MultiplyBlending,
            transparent: true,
            depthWrite: false,
            depthTest: true,
        });
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.position.y = OCEAN_LEVEL + 0.18;
        shadowMesh.renderOrder = 9;
        shadowMesh.layers.set(2);
        islandGroup.add(shadowMesh);
        window._cloudShadow = { mesh: shadowMesh, mat: shadowMat };
    }
}

// Scratch allocations reused by updateRain each frame. Module-scope so
// we don't churn the GC at ~90 instances × 60fps.
const _rainMat4 = new THREE.Matrix4();
const _rainPos = new THREE.Vector3();
const _rainVel = new THREE.Vector3();
const _rainCamDir = new THREE.Vector3();
const _rainBillY = new THREE.Vector3();
const _rainBillX = new THREE.Vector3();
const _rainBillZ = new THREE.Vector3();
const _rainScaleV = new THREE.Vector3();
const _splashMat4 = new THREE.Matrix4();
const _splashQuat = new THREE.Quaternion();

export function updateRain(dt, elapsed) {
    const r = window._rain;
    if (!r || !r.enabled) { if (r) r.mesh.visible = false; return; }
    r.mesh.visible = true;
    r.mat.uniforms.uIntensity.value = r.intensity;

    // Storm-time knobs, all written from animate.js each frame. Defaults
    // here so the rain still works if weather wiring isn't loaded.
    const wt = r.stormT != null ? r.stormT : 0;    // 0..1 smoothed weather
    const widthMul  = 1.0 + wt * 0.35;             // streak gets fatter
    const lengthMul = 1.0 + wt * 0.30;             // streak gets longer
    const speedMul  = 1.0 + wt * 0.45;             // falls faster
    const windMul   = 1.0 + wt * 3.0;              // sideways drift
    const hdriftBase = -0.35;
    const hdrift = hdriftBase * windMul;

    const heads = r.heads;
    const span = r.top - r.bottom;
    const driftTx = (elapsed || 0) * r.driftX * windMul;
    const driftTz = (elapsed || 0) * r.driftZ * windMul;
    const N = r.densRes;
    const grid = r.densGrid;
    const R = r.radius;
    const cam = state.camera;

    // Camera position in islandGroup local space — rain lives in the
    // rotating group, so the billboard must align to the local-space
    // camera direction, not the world-space one.
    state.islandGroup.worldToLocal(_rainCamDir.copy(cam.position));

    for (let i = 0; i < r.count; i++) {
        const vy = r.speed * r.velocities[i] * speedMul;
        const dx = hdrift * r.driftX;
        const dz = hdrift * r.driftZ;
        heads[i*3]   += dx * dt;
        heads[i*3+1] -= vy * dt;
        heads[i*3+2] += dz * dt;

        if (heads[i*3+1] < r.bottom) {
            // Rejection-sampled respawn: pick a disc point, read the
            // 2D density probe at (x - drift, z - drift) so the high-
            // density lanes track the cloud's motion, accept if above
            // threshold. Falls back after 6 tries to avoid stalls.
            let x = 0, z = 0, accepted = false;
            for (let t = 0; t < 6; t++) {
                const theta = Math.random() * Math.PI * 2;
                const rad = Math.sqrt(Math.random()) * R;
                const cx = Math.cos(theta) * rad;
                const cz = Math.sin(theta) * rad;
                let u = (cx - driftTx) / (R * 2) + 0.5;
                let v = (cz - driftTz) / (R * 2) + 0.5;
                u = ((u % 1) + 1) % 1; v = ((v % 1) + 1) % 1;
                const gi = Math.min(N - 1, Math.max(0, Math.floor(u * N)));
                const gj = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
                const d = grid[gj * N + gi];
                if (Math.random() < d * d * 2.2) { x = cx; z = cz; accepted = true; break; }
            }
            if (!accepted) {
                const theta = Math.random() * Math.PI * 2;
                const rad = Math.sqrt(Math.random()) * R * 0.6;
                x = Math.cos(theta) * rad;
                z = Math.sin(theta) * rad;
            }
            heads[i*3]   = x;
            heads[i*3+1] = r.top - Math.random() * span * 0.25;
            heads[i*3+2] = z;
        }

        const hx = heads[i*3], hy = heads[i*3+1], hz = heads[i*3+2];
        _rainPos.set(hx, hy, hz);

        // Velocity-aligned billboard: local -Y of the quad points along
        // the apparent velocity (so the streak runs in motion direction),
        // local X is perpendicular to (view direction) × (velocity) so
        // the quad faces the camera while still carrying its streak
        // along velocity. Works from any camera angle without per-frame
        // full billboard rebuild.
        _rainVel.set(dx, -vy, dz).normalize();
        // local +Y of the plane = -velocity (so plane top is the head).
        _rainBillY.copy(_rainVel).multiplyScalar(-1);
        // View vector from drop to camera (local space).
        _rainBillZ.copy(_rainCamDir).sub(_rainPos).normalize();
        // local +X = normalize(Y × Z) — right vector on the camera plane.
        _rainBillX.crossVectors(_rainBillY, _rainBillZ);
        const xl = _rainBillX.length();
        if (xl < 1e-4) {
            // Degenerate: camera looking exactly down the velocity axis.
            // Fall back to world-X so we still produce a valid frame.
            _rainBillX.set(1, 0, 0);
        } else {
            _rainBillX.multiplyScalar(1 / xl);
        }
        // Re-orthogonalize Z so the basis is clean.
        _rainBillZ.crossVectors(_rainBillX, _rainBillY).normalize();

        const sc = r.scales[i];
        // Storm thickens (X) and lengthens (Y) the streak independently
        // so a heavy deck reads as fat streaks, not just more of them.
        const sx = sc * widthMul;
        const sy = sc * lengthMul;
        _rainMat4.set(
            _rainBillX.x * sx, _rainBillY.x * sy, _rainBillZ.x * sc, hx,
            _rainBillX.y * sx, _rainBillY.y * sy, _rainBillZ.y * sc, hy,
            _rainBillX.z * sx, _rainBillY.z * sy, _rainBillZ.z * sc, hz,
            0, 0, 0, 1
        );
        r.mesh.setMatrixAt(i, _rainMat4);
    }
    r.mesh.instanceMatrix.needsUpdate = true;

    // --- Splash rings on the ocean surface ---
    if (r.splash && !r.reducedMotion) {
        const s = r.splash;
        s.mat.uniforms.uIntensity.value = r.intensity;
        for (let i = 0; i < s.count; i++) {
            s.progress[i] += dt / s.life[i];
            if (s.progress[i] >= 1.0) {
                // Respawn: density-biased disc point under the rain column.
                let x = 0, z = 0, accepted = false;
                for (let t = 0; t < 4; t++) {
                    const theta = Math.random() * Math.PI * 2;
                    const rad = Math.sqrt(Math.random()) * R;
                    const cx = Math.cos(theta) * rad;
                    const cz = Math.sin(theta) * rad;
                    let u = (cx - driftTx) / (R * 2) + 0.5;
                    let v = (cz - driftTz) / (R * 2) + 0.5;
                    u = ((u % 1) + 1) % 1; v = ((v % 1) + 1) % 1;
                    const gi = Math.min(N - 1, Math.max(0, Math.floor(u * N)));
                    const gj = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
                    const d = grid[gj * N + gi];
                    if (Math.random() < d * d * 2.2) { x = cx; z = cz; accepted = true; break; }
                }
                if (!accepted) {
                    const theta = Math.random() * Math.PI * 2;
                    const rad = Math.sqrt(Math.random()) * R * 0.6;
                    x = Math.cos(theta) * rad;
                    z = Math.sin(theta) * rad;
                }
                s.pos[i*2] = x; s.pos[i*2+1] = z;
                s.progress[i] = 0.0;
                s.life[i] = 0.55 + Math.random() * 0.55;
            }
            s.aProgress[i] = s.progress[i];
            _splashQuat.identity();
            _splashMat4.compose(
                // +0.07: ON the water surface (the Water mesh sits at
                // OCEAN_LEVEL + 0.05 and depth-writes). At the old +0.01
                // every splash ring was z-buried 0.04u under the water
                // plane — the whole system was simulated but invisible.
                _rainPos.set(s.pos[i*2], OCEAN_LEVEL + 0.07, s.pos[i*2+1]),
                _splashQuat,
                _rainScaleV.set(1, 1, 1)
            );
            s.mesh.setMatrixAt(i, _splashMat4);
        }
        s.mesh.instanceMatrix.needsUpdate = true;
        const progAttr = s.mesh.geometry.getAttribute('aProgress');
        if (progAttr) progAttr.needsUpdate = true;
    }
}

export function updateVolcanicEffects(dt) {
    // Shore steam — skipped while launch-hidden.
    const sv = window._shoreVent;
    if (sv && sv.mesh && sv.mesh.visible) {
        for (let i = 0; i < sv.count; i++) {
            sv.life[i] += dt;
            if (sv.life[i] > 2.0) {
                const v = Math.floor(i / sv.pp);
                const va = sv.angles[v];
                sv.pos[i*3] = Math.cos(va)*5.5+(Math.random()-0.5)*0.3;
                sv.pos[i*3+1] = OCEAN_LEVEL+0.05;
                sv.pos[i*3+2] = Math.sin(va)*5.5+(Math.random()-0.5)*0.3;
                sv.vel[i*3] = (Math.random()-0.5)*0.06; sv.vel[i*3+1] = 0.12+Math.random()*0.06; sv.vel[i*3+2] = (Math.random()-0.5)*0.06;
                sv.life[i] = 0;
            }
            sv.pos[i*3] += sv.vel[i*3]*dt; sv.pos[i*3+1] += sv.vel[i*3+1]*dt; sv.pos[i*3+2] += sv.vel[i*3+2]*dt;
        }
        sv.geo.attributes.position.needsUpdate = true;
    }
}
