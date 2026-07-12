// spaceEnv.js — the empty-space backdrop: ONE static void gradient.
//
// Everything else in the sky is real, live geometry: the stars are 3D
// points (starShell.js — the destination shell AND the infinite deep
// field — plus the flight corridor in transit.js) and the nebula is a
// permanent raymarched volume (corridor.js). This sphere is the only
// thing with no structure at all, because a STATIC IMAGE cannot survive
// this panel: a baked equirect sky was tried twice (2026-07-12) and
// REJECTED both times — at ~6x magnification baked stars are bilinear
// blobs ("PSX") and baked dark gradients band/macroblock ("pixelated"),
// unconditionally, at any encode quality. Structure in the sky must be
// computed per-pixel (the volume) or be real geometry (the points).
//
// Output stays clamped well below the UnrealBloom threshold and
// material.toneMapped = false, as before.

import * as THREE from 'three';
import { ACES_INVERSE_GLSL, VOID_SKY_GLSL } from './shaderChunks.js';

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
    uniform float uSkyPulse;

    ${VOID_SKY_GLSL}
    ${ACES_INVERSE_GLSL}

    void main() {
        vec3 col = voidSky(normalize(vDir)) * (1.0 + uSkyPulse * 0.10);
        gl_FragColor = vec4(displayToSceneLinear(col), 1.0);
    }
`;

/**
 * Build the backdrop and add it to the scene. Returns the mesh.
 *
 * Implementation note: giant inverted sphere, view-locked in the vertex
 * shader, slammed onto the far plane, drawn before everything else
 * (renderOrder -1000, depth writes off).
 */
export function buildSpaceEnvironment(scene /*, renderer */) {
    const geo = new THREE.SphereGeometry(1, 32, 16);
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            uSkyPulse: { value: 0 },
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
