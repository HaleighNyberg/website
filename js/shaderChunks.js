// shaderChunks.js - GLSL shared by the sky and flight shaders.
//
// The nebula skybox (spaceEnv.js), the interstellar medium (corridor.js)
// and the star shell (starShell.js) are all authored in display sRGB -
// their palettes were graded against the final screen. The composer ends
// in an OutputPass (three's ACES filmic at the renderer exposure, then a
// linear->sRGB encode), so each of them runs the exact inverse of that
// transform and reaches the screen byte-identical to the authored grade.
// ONE copy of the inverse lives here so a grade tweak can never
// desynchronize near and far layers of the same sky.
//
// Constants are three.js's Hill-fit ACES matrices, numerically inverted.
// OUTPUT_EXPOSURE must match renderer.toneMappingExposure (scene.js /
// lighting.js).

// The empty-space backdrop: ONE static gradient (deep-blue void floor with
// a gentle vertical lift - the floor keeps non-OLED panels from crushing to
// black). Everything else in the sky is real geometry: the star shell and
// the raymarched nebula volume. Returns display-sRGB; callers run it
// through displayToSceneLinear like every other authored color.
export const VOID_SKY_GLSL = /* glsl */`
    vec3 voidSky(vec3 dir) {
        vec3 voidCol = vec3(0.038, 0.080, 0.170);
        vec3 midCol  = vec3(0.085, 0.160, 0.300);
        float vert = dir.y * 0.5 + 0.5;
        return mix(voidCol, midCol, smoothstep(-0.25, 0.95, vert) * 0.85);
    }
`;

export const ACES_INVERSE_GLSL = /* glsl */`
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
`;
