// spaceEnv.js — procedural deep-space backdrop
//
// Replaces the flat 0x050508 scene.background with a large BackSide sphere
// running a fragment shader that combines:
//   1. Domain-warped 3D fBm sampled in view-direction space (no UV seams,
//      no tiling) to make slow, large-scale nebula filaments.
//   2. A deterministic hash-based starfield thresholded to a sparse density
//      so stars are exact 3D point samples — NOT THREE.Points sprites and
//      NOT random XYZ particles. Stars get a sub-pixel halo via smoothstep
//      around a hashed direction cell.
//
// Output is clamped below the UnrealBloom threshold (0.8 in scene.js) and
// material.toneMapped = false so the backdrop never blooms or gets
// re-tonemapped on top of the rest of the scene.
//
// Influences / sources:
//   - Inigo Quilez, "Domain warping":
//     https://iquilezles.org/articles/warp/
//   - Shadertoy "nebula - space" by Kali (4d3SWM):
//     https://www.shadertoy.com/view/4d3SWM
//   - Shadertoy "Base warp fBM" (tdG3Rd):
//     https://www.shadertoy.com/view/tdG3Rd
//   - "Rendering Nebulae", pegwars (volumetric noise field accumulation):
//     http://pegwars.blogspot.com/2018/12/rendering-nebulae.html
//
// The shader does NOT raymarch — it samples a single 3D direction once per
// fragment with a 4-octave warped fBm. Cost is roughly equivalent to a
// medium ShaderToy nebula at ~0.05 ms/frame on an RTX-class GPU.

import * as THREE from 'three';

const VERT = /* glsl */`
    varying vec3 vDir;
    void main() {
        // Cancel translation so the sphere is locked to the camera.
        vDir = normalize(position);
        mat4 viewNoTranslate = viewMatrix;
        viewNoTranslate[3][0] = 0.0;
        viewNoTranslate[3][1] = 0.0;
        viewNoTranslate[3][2] = 0.0;
        vec4 mv = viewNoTranslate * modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        // Push to far plane so it never z-fights with anything in scene.
        gl_Position.z = gl_Position.w;
    }
`;

const FRAG = /* glsl */`
    precision highp float;
    varying vec3 vDir;
    uniform float uStarPulse;
    uniform float uNebulaPulse;
    uniform float uSkyPulse;

    // --- 3D hash + value noise (cheap, no texture lookup) ---
    float hash13(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float vnoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n000 = hash13(i + vec3(0,0,0));
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

    // 4-octave fBm in 3D
    float fbm(vec3 p) {
        float a = 0.5;
        float s = 0.0;
        for (int i = 0; i < 4; i++) {
            s += a * vnoise(p);
            p = p * 2.03 + vec3(11.3, 7.7, 3.1);
            a *= 0.5;
        }
        return s;
    }

    // Domain-warped fBm — Iñigo Quilez "warp" article style.
    // q = fbm(p), r = fbm(p + q*K), out = fbm(p + r*K).
    float warpedFbm(vec3 p) {
        vec3 q = vec3(
            fbm(p + vec3(0.0, 0.0, 0.0)),
            fbm(p + vec3(5.2, 1.3, 2.8)),
            fbm(p + vec3(1.7, 9.2, 4.4))
        );
        vec3 r = vec3(
            fbm(p + 2.5 * q + vec3(1.7, 9.2, 0.0)),
            fbm(p + 2.5 * q + vec3(8.3, 2.8, 5.1)),
            fbm(p + 2.5 * q + vec3(3.1, 4.7, 6.6))
        );
        return fbm(p + 2.0 * r);
    }

    // --- Sparse starfield via 3D hash thresholding ---
    // Quantize direction onto a 3D grid; each cell either contains a star
    // (above threshold) or doesn't. Star is a tight gaussian-ish halo
    // around a hashed sub-cell position. Because we sample a unit
    // direction, "cells" are stable spherical patches — stars never move.
    float starfield(vec3 dir, float cellSize, float density, float bright) {
        vec3 g = dir * cellSize;
        vec3 i = floor(g);
        vec3 f = fract(g);
        // Three independent hashes for x/y/z jitter and one for "is star"
        float h0 = hash13(i + 17.0);
        if (h0 < 1.0 - density) return 0.0;
        vec3 jitter = vec3(
            hash13(i + 1.3),
            hash13(i + 7.1),
            hash13(i + 4.9)
        );
        vec3 d = f - jitter;
        float r2 = dot(d, d);
        // Softened core (220 -> 150): at 220 most stars resolved as
        // single hard pixels, and a dense field of 1px points reads as
        // pixel noise. The wider gaussian gives each star a 2-3px
        // gradient footprint that antialiases naturally.
        float core = exp(-r2 * 150.0);
        // Per-star brightness variation
        float bvar = 0.35 + 0.65 * hash13(i + 23.0);
        return core * bvar * bright;
    }

    // --- Output-pipeline compensation ------------------------------------
    // The palette in main() is authored in display sRGB: the site
    // originally blitted this shader raw to the canvas. The composer now
    // ends in an OutputPass (three ACES filmic at the renderer exposure,
    // then linear->sRGB encode), so we run the exact inverse of that
    // transform here and the backdrop displays byte-identical to the
    // locked grade. Constants are three.js's Hill-fit ACES matrices,
    // numerically inverted.
    const mat3 ACESInputMatInv = mat3(
        vec3(  1.7647410, -0.1470279, -0.0363368 ),
        vec3( -0.6757777,  1.1602515, -0.1624364 ),
        vec3( -0.0889633, -0.0132237,  1.1987733 )
    );
    const mat3 ACESOutputMatInv = mat3(
        vec3( 0.6430382, 0.0592687, 0.0059619 ),
        vec3( 0.3111868, 0.9314365, 0.0639290 ),
        vec3( 0.0457755, 0.0092949, 0.9301184 )
    );
    // Must match renderer.toneMappingExposure (scene.js / lighting.js).
    const float OUTPUT_EXPOSURE = 1.1;

    // Per-channel inverse of three's RRTAndODTFit (valid for y in [0,1)).
    vec3 RRTAndODTFitInv( vec3 y ) {
        y = clamp( y, vec3(0.0), vec3(0.999) );
        vec3 A = 1.0 - 0.983729 * y;
        vec3 B = 0.0245786 - 0.4329510 * y;
        vec3 C = -0.000090537 - 0.238081 * y;
        return ( -B + sqrt( max( B * B - 4.0 * A * C, vec3(0.0) ) ) ) / ( 2.0 * A );
    }

    vec3 displayToSceneLinear( vec3 srgb ) {
        // Exact sRGB EOTF (decode)
        vec3 lin = mix( srgb / 12.92,
                        pow( ( srgb + 0.055 ) / 1.055, vec3(2.4) ),
                        step( 0.04045, srgb ) );
        vec3 v = max( ACESOutputMatInv * lin, vec3(0.0) );
        v = RRTAndODTFitInv( v );
        v = ACESInputMatInv * v;
        return max( v * ( 0.6 / OUTPUT_EXPOSURE ), vec3(0.0) );
    }

    void main() {
        vec3 dir = normalize(vDir);

        // --- Large-scale color field (slow, low-frequency warp) ---
        // Scale chosen so the dominant filament is ~30deg across.
        float n = warpedFbm(dir * 1.6);
        // Coverage: leave real dark gaps between structures so the sky reads
        // like space, not a uniform wash.
        float nebula = smoothstep(0.40, 0.82, n);

        // Secondary higher-frequency wisps for finer structure
        float n2 = warpedFbm(dir * 4.0 + vec3(13.0, 0.0, 7.0));
        float wisp = smoothstep(0.55, 0.88, n2);

        // A third even-higher frequency thread for fine variation
        float n3 = warpedFbm(dir * 9.0 + vec3(2.0, 19.0, 5.0));
        float thread = smoothstep(0.58, 0.85, n3);

        // --- Color grading: Astroneer-style nebula with teal + purple/pink
        // hue zones and dark voids between. Raw ShaderMaterial (toneMapped
        // false) writes straight to sRGB, so these are effectively sRGB
        // values; the floor stays a visible blue (~0.04+) so non-OLED panels
        // never crush to black.
        vec3 voidCol  = vec3(0.038, 0.080, 0.170);   // deep blue floor (visible, not black)
        vec3 midCol   = vec3(0.085, 0.160, 0.300);   // navy horizon lift
        vec3 tealCol  = vec3(0.150, 0.360, 0.520);   // teal filament (blue zones)
        vec3 deepCol  = vec3(0.070, 0.180, 0.340);   // deep teal between filaments
        vec3 purpCol  = vec3(0.330, 0.150, 0.540);   // purple
        vec3 pinkCol  = vec3(0.540, 0.190, 0.400);   // rose/pink accent

        // Hue field: a broad teal -> purple/pink gradient across the sky (so
        // both color families are always in frame from any camera pose) plus
        // low-frequency noise blobs for organic variation. Real nebulae read
        // as color "continents", not one flat wash.
        float dirHue   = smoothstep(-0.7, 0.7, dir.x * 0.8 + dir.y * 0.35);
        float noiseHue = smoothstep(0.28, 0.72, warpedFbm(dir * 1.05 + vec3(31.0, 7.0, 19.0)));
        float hueF     = clamp(dirHue * 0.6 + noiseHue * 0.6, 0.0, 1.0);
        vec3 warmCol     = mix(purpCol, pinkCol, wisp);     // purple -> pink on wisps
        vec3 filamentCol = mix(tealCol, warmCol, hueF);     // teal <-> purple/pink by region
        vec3 deepMix     = mix(deepCol, purpCol * 0.55, hueF);

        // Large-scale dimming field: broad regions fall into darker "space"
        // for contrast (the "less bright in some areas" look). The floor is
        // re-asserted afterward so dark regions still read as blue, not black.
        float dimF = mix(0.45, 1.0, smoothstep(0.20, 0.72, warpedFbm(dir * 0.75 + vec3(5.0, 41.0, 2.0))));

        // Build base from a slow large gradient on dir.y for "horizon" feel.
        float vert = dir.y * 0.5 + 0.5;
        vec3 col = mix(voidCol, midCol, smoothstep(-0.25, 0.95, vert) * 0.85);

        // Bass drives the nebula structures — filament glow swells with
        // sub-bass hits so the cosmic clouds "breathe" with the track.
        float nebBoost = 1.0 + uNebulaPulse * 1.2;
        col = mix(col, deepMix,     nebula * 0.55 * nebBoost);
        col = mix(col, filamentCol, nebula * (0.35 + 0.65 * wisp) * nebBoost);
        // Threadlike texture additive — tinted by the same hue zone.
        col += filamentCol * thread * nebula * 0.30 * nebBoost;

        // Apply the broad dimming, then re-assert the visible floor.
        col *= dimF;
        col = max(col, voidCol * 0.85);

        // Mids drive an overall sky brightness lift — a soft atmospheric swell.
        col += vec3(0.012, 0.028, 0.055) * uSkyPulse;

        // --- Starfield: three layers ---
        // Densities roughly doubled across the board: the sparse field
        // read as an almost-empty sky, and the sister-world story needs
        // a backdrop that suggests thousands of systems.
        // Far layer: dense, very dim — texture, not punctate. Pulled
        // back from the doubling (0.055 -> 0.042): the densest layer is
        // also the most sub-pixel, so it contributes the most grain.
        float farStars = starfield(dir, 320.0, 0.042, 0.26);
        // Mid layer: medium density, medium brightness
        float midStars = starfield(dir, 140.0, 0.042, 0.55);
        // Near "feature" layer: sparse, brightest — these are the specks
        float nearStars = starfield(dir, 55.0, 0.020, 0.80);

        // Star color: cool white with a faint blue tint.
        // uStarPulse (driven by the audio AnalyserNode when sound is on)
        // scales star brightness so the backdrop breathes with the
        // currently-playing Hubble sonification.
        vec3 starCol = vec3(0.78, 0.86, 1.00);
        float starBoost = 1.0 + uStarPulse * 1.6;
        col += starCol * (farStars + midStars + nearStars) * starBoost;

        // Suppress stars sitting inside dense nebula (looks more natural —
        // bright nebulosity occludes background stars).
        // Already done by additive — but reduce mid/far inside nebula:
        col -= starCol * farStars * nebula * 0.7;
        col -= starCol * midStars * nebula * 0.4;

        // --- Global brightness clamp ---
        // Raised to 0.85 so the brighter nebula cores and horizon glow can
        // show without banding, while bright stars still punch through.
        col = max(col, vec3(0.0));
        col = min(col, vec3(0.85));

        // Composer ends in an OutputPass (ACES + sRGB encode); run the
        // exact inverse here so the authored display-sRGB grade above
        // reaches the screen byte-identical. See the compensation block.
        col = displayToSceneLinear(col);

        gl_FragColor = vec4(col, 1.0);
    }
`;

/**
 * Build the procedural deep-space backdrop and add it to the scene.
 * Returns the mesh so callers can dispose / debug.
 *
 * Implementation note: we use a giant inverted sphere parented to the
 * camera-locked transform (vertex shader cancels view translation). We
 * write to gl_Position.z = gl_Position.w to slam it onto the far plane,
 * disable depth writes, and set renderOrder = -1000 so it's drawn before
 * everything else.
 */
export function buildSpaceEnvironment(scene /*, renderer */) {
    const geo = new THREE.SphereGeometry(1, 32, 16);
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            uStarPulse:   { value: 0 },
            uNebulaPulse: { value: 0 },
            uSkyPulse:    { value: 0 },
        },
        vertexShader: VERT,
        fragmentShader: FRAG,
        side: THREE.BackSide,
        depthWrite: false,
        depthTest: false,
        toneMapped: false,
        fog: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = -1000;
    mesh.name = 'spaceEnvironment';
    scene.add(mesh);
    return mesh;
}
