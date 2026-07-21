import {
	Color,
	FrontSide,
	Matrix4,
	Mesh,
	PerspectiveCamera,
	Plane,
	ShaderMaterial,
	UniformsLib,
	UniformsUtils,
	Vector3,
	Vector4,
	WebGLRenderTarget
} from 'three';

/**
 * Work based on :
 * https://github.com/Slayvin: Flat mirror for three.js
 * https://home.adelphi.edu/~stemkoski/ : An implementation of water shader based on the flat mirror
 * http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : Water shader explanations in WebGL
 */

class Water extends Mesh {

	constructor( geometry, options = {} ) {

		super( geometry );

		this.isWater = true;

		const scope = this;

		const textureWidth = options.textureWidth !== undefined ? options.textureWidth : 512;
		const textureHeight = options.textureHeight !== undefined ? options.textureHeight : 512;

		const clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
		const alpha = options.alpha !== undefined ? options.alpha : 1.0;
		const time = options.time !== undefined ? options.time : 0.0;
		const normalSampler = options.waterNormals !== undefined ? options.waterNormals : null;
		const sunDirection = options.sunDirection !== undefined ? options.sunDirection : new Vector3( 0.70707, 0.70707, 0.0 );
		const sunColor = new Color( options.sunColor !== undefined ? options.sunColor : 0xffffff );
		const waterColor = new Color( options.waterColor !== undefined ? options.waterColor : 0x7F7F7F );
		const eye = options.eye !== undefined ? options.eye : new Vector3( 0, 0, 0 );
		const distortionScale = options.distortionScale !== undefined ? options.distortionScale : 20.0;
		const side = options.side !== undefined ? options.side : FrontSide;
		const fog = options.fog !== undefined ? options.fog : false;

		//

		const mirrorPlane = new Plane();
		const normal = new Vector3();
		const mirrorWorldPosition = new Vector3();
		const cameraWorldPosition = new Vector3();
		const rotationMatrix = new Matrix4();
		const lookAtPosition = new Vector3( 0, 0, - 1 );
		const clipPlane = new Vector4();

		const view = new Vector3();
		const target = new Vector3();
		const q = new Vector4();

		const textureMatrix = new Matrix4();

		const mirrorCamera = new PerspectiveCamera();

		const renderTarget = new WebGLRenderTarget( textureWidth, textureHeight );

		const mirrorShader = {

			name: 'MirrorShader',

			uniforms: UniformsUtils.merge( [
				UniformsLib[ 'fog' ],
				UniformsLib[ 'lights' ],
				{
					'normalSampler': { value: null },
					'mirrorSampler': { value: null },
					'alpha': { value: 1.0 },
					'time': { value: 0.0 },
					'size': { value: 1.0 },
					'distortionScale': { value: 20.0 },
					'textureMatrix': { value: new Matrix4() },
					'sunColor': { value: new Color( 0x7F7F7F ) },
					'sunDirection': { value: new Vector3( 0.70707, 0.70707, 0 ) },
					'eye': { value: new Vector3() },
					'waterColor': { value: new Color( 0x555555 ) },
					'dishRotation': { value: 0.0 },
					'oceanRadius': { value: 31.5 },
					// Sun-glint character (scene picker presets):
					// lobe tightness and strength of the analytic sun
					// path - this term IS the sun's reflection (see the
					// clamp note at the mirror sample).
					'uGlintShiny': { value: 110.0 },
					'uGlintSpec': { value: 1.9 },
					// 0 clear .. 1 full storm. The shallow depth tint and
					// shore boost are DIRECT-SUN color terms; under a
					// heavy deck they must dim with the sun or the
					// shallow pool glows storm-proof (animate.js drives
					// this on the same quadratic ramp as the water color).
					'uStormDim': { value: 0.0 }
				}
			] ),

			vertexShader: /* glsl */`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,

			fragmentShader: /* glsl */`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;
				uniform float dishRotation; // angle of dish rotation - syncs wave scroll
				uniform float oceanRadius;  // for radial depth color variation
				uniform float uGlintShiny;
				uniform float uGlintSpec;
				uniform float uStormDim;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec2 rotateUV(vec2 uv, float angle) {
					float c = cos(angle);
					float s = sin(angle);
					return vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
				}

				vec4 getNoise( vec2 uv ) {
					// Rotate UV to match dish rotation so waves spin with the dish
					uv = rotateUV(uv, dishRotation);
					// Constant per-layer phase offsets: without them all
					// layers sample the same texture unshifted at time=0,
					// so right after page load they constructively align
					// into coarse high-contrast blotches that only decay
					// as the drifts decorrelate. Offsets kill the overlap.
					// Fine detail layer (original)
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 ) + vec2( 0.23, 0.71 );
					// Large-scale wave layer - visible from orbital distance
					vec2 uv2 = uv / vec2( 17.0, 19.0 ) + vec2( time / 101.0, time / 97.0 ) + vec2( 0.51, 0.13 );
					vec2 uv3 = uv / vec2( 23.0, 21.0 ) - vec2( time / 109.0, time / -113.0 ) + vec2( 0.88, 0.37 );
					// (A 5th micro-ripple tap lived here briefly - cut: the
					// water shader covers a huge screen area and renders
					// twice via the mirror pass, and the extra fetch cost
					// ~6fps. The four offset taps carry the detail.)
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					// Distance-based normal flattening (ocean LOD): far
					// from the camera the wave normals are SUB-PIXEL, and
					// their moving speculars strobe - the persistent
					// shimmer along the dish rim. Flattening toward the
					// up-vector with distance keeps full chop up close
					// (water-level views) and a calm, stable sheen at
					// range. This attenuates specular ALIASING, which no
					// post-AA can fix on moving sub-pixel detail.
					// Fade starts at 150u (was 60): the flicker floor is
					// structurally fixed elsewhere, so mid-range water
					// keeps its living chop - only the far rim (where
					// wavelets are genuinely sub-pixel) flattens.
					float camDist = length( eye - worldPosition.xyz );
					// Cap dropped again 0.65 -> 0.35: the flattening zone is
					// exactly where the sun's mirror trail lives (the far
					// half of the disc), and flat normals collapse what
					// should be a long shimmering COLUMN into a small pool -
					// the reason the glint presets read as doing nothing.
					// SMAA + specular caps now carry the strobe protection.
					float lodFade = clamp( ( camDist - 150.0 ) / 300.0, 0.0, 0.35 );
					surfaceNormal = normalize( mix( surfaceNormal, vec3( 0.0, 1.0, 0.0 ), lodFade ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					// Tight sun-path lobe (shiny 110): with the sun direction at
					// its real elevation the old broad 30/3.5 lobe aligned over
					// a huge patch of sea and bloomed into a white blob. A
					// tighter, dimmer lobe breaks against the wave normals into
					// a sparkling glint TRAIL along the sun azimuth instead.
					// Preset-driven lobe: this analytic term is the sun's
					// visible reflection on the sea (the mirrored disc
					// itself dies at the fresnel x clamp, see below).
					sunLight( surfaceNormal, eyeDirection, uGlintShiny, uGlintSpec, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					// Capped at 0.85: the mirrored sun disc is HDR (2.2x) and
					// uncapped it floods a patch of sea + feeds bloom into a
					// white blob. Clamping keeps the reflected sun as a
					// wave-broken trail that never crosses the bloom knee.
					// Reinhard soft clamp instead of a hard min(x, 0.85):
					// the hard clamp flattened the HDR sun disc to the same
					// level as bright sky, and after the ~0.05 steep-angle
					// fresnel the mirrored sun vanished entirely. The soft
					// curve keeps highlight SEPARATION (sun stays ~2x sky
					// in the mirror) while still bounding output at ~0.85
					// so nothing feeds bloom.
					vec3 reflRaw = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );
					// Storm deck occludes the sky the mirror reflects; the
					// reflection render itself never sees the cloud volume,
					// so the occlusion has to be applied here. Without it,
					// per-facet fresnel on storm chop keeps bouncing the
					// clear-sky glare and the sun-side pool glows storm-proof.
					vec3 reflectionSample = reflRaw / ( vec3( 1.0 ) + reflRaw ) * 1.7 * ( 1.0 - uStormDim * 0.60 );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.04; // physically-based water IOR ~1.33
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );

					// --- Radial depth color: shallow near island, deep at edges ---
					// Sun-facing factor dims the shallow teal on the night side so
					// the center doesn't glow unnaturally in top-down views.
					float radialDist = length(worldPosition.xz);
					float depthT = smoothstep(6.0, oceanRadius * 0.85, radialDist);
					vec2 sunDir2D = normalize(sunDirection.xz);
					vec2 fragDir2D = normalize(worldPosition.xz);
					float sunFacing = dot(fragDir2D, sunDir2D) * 0.5 + 0.5; // 0=night, 1=day
					sunFacing = mix(0.25, 1.0, sunFacing); // night side gets 25% of shallow brightness
					// The shallow teal is DIRECT SUNLIGHT scattered out of
					// clear shallow water - under a storm deck it dies with
					// the sun. This constant is what made the sun-side pool
					// glow storm-proof in top-down views (scatter runs it
					// through a 1.6x gain, so dim it at the source).
					vec3 shallowCol = vec3(0.05, 0.13, 0.18) * sunFacing * ( 1.0 - uStormDim * 0.70 );
					vec3 deepCol    = waterColor;
					vec3 localWaterColor = mix(shallowCol, deepCol, depthT);

					// Subsurface scatter - weaker on the night side. Raised
					// 1.2 -> 1.6 to hand back the brightness the diffuse cut
					// removed, but as WATER-COLORED light instead of grey.
					float sss = pow( max( 0.0, dot( surfaceNormal, eyeDirection ) ), 1.5 );
					vec3 scatter = sss * localWaterColor * 1.6 * sunFacing;
					// Depth-tinted ambient - darker water absorbs more red
					vec3 depthTint = localWaterColor * 0.15;
					// Shore proximity brightening - subtle lightening near island.
					// Was (1.0 - depthT) * 0.08: a flat white lift that spanned
					// from the island out to ~85% of the dish radius, which in
					// the top-down framing washed the whole inner ocean up to
					// the same brightness as the sunlit land and erased the
					// shoreline. Now a dimmer lift that hugs the island base.
					float shoreBoost = (1.0 - smoothstep(5.0, 12.0, radialDist)) * 0.03;
					// Dish-wide day/night gradient: the sun-facing half of
					// the ocean carries visibly more light than the far half,
					// so the water agrees with the island's terminator and
					// the viewer can read which side the sun is on.
					float sunSide = mix(0.55, 1.15, (sunFacing - 0.25) / 0.75);
					// Wave crests: where the summed normal field tips
					// steepest, real chop breaks into brief foam flecks.
					// Threshold sits high so only the sharpest few percent
					// of wavelets fire, day side only, capped below the
					// bloom knee so crests can never strobe.
					float crest = smoothstep(0.72, 0.94, 1.0 - surfaceNormal.y);
					// Grazing-view fade: seen edge-on (the rim band from
					// outside the dish), the crest flecks line up into a
					// chain of DISCRETE white dashes along the waterline.
					// Foam is a top-down phenomenon - kill it as the view
					// flattens toward the surface plane.
					float grazeView = pow(1.0 - abs(eyeDirection.y), 3.0);
					// Rim kill: at the glass boundary the flecks trace the
					// dish edge as a chain of discrete bright dashes from
					// low/under views (the grazing fade alone misses camera
					// poses below the surface plane). Crests are a mid-ocean
					// read - fade them out entirely over the last ~1.6u
					// before the wall.
					float crestRim = smoothstep(oceanRadius - 0.4, oceanRadius - 2.0, radialDist);
					vec3 crestCol = vec3(0.55, 0.62, 0.66) * crest * sunSide * 0.5 * (1.0 - grazeView * 0.9) * crestRim;
					// The reflected branch is capped as a WHOLE, and the cap
					// must sit BELOW the 0.8 bloom threshold - at 0.82 the
					// glint area still fed bloom and fuzzed into a white
					// patch. 0.74 renders as a crisp bright trail with zero
					// bloom contribution.
					vec3 reflBranch = min( vec3( 0.08 ) + reflectionSample * 0.92 + reflectionSample * specularLight, vec3( 0.74 ) );
					// Diffuse weight 0.3 -> 0.12: water has almost NO diffuse
					// reflectance in reality. At steep view angles fresnel is
					// ~0.05, so the lambert term dominated the whole surface
					// and printed the low-frequency wave-noise octave as a
					// grey MARBLE mottle (the milky look). Killing most of it
					// lets the deep body color carry the surface; the scatter
					// term is raised to keep the sun side alive.
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.12 + scatter + depthTint + shoreBoost + crestCol ) * sunSide * getShadowMask(), reflBranch, reflectance);
					// The sun's glitter path gets its OWN additive channel.
					// Buried inside reflBranch it is multiplied by the
					// mirror sample (near-black space, ~0.1) and then by
					// mean-surface fresnel (~0.05 at steep angles) - a
					// 30-60x crush that reduced every glint preset to one
					// blob at the horizon. Real sun glitter is per-facet:
					// wave faces tilted into the mirror geometry reflect
					// at near-grazing LOCAL incidence, so the trail stays
					// bright even when mean fresnel is small. Weight by a
					// floored fresnel, soft-clamp, and cap the summed
					// output at the 0.8 bloom knee so the trail can never
					// fuzz into the white patch again.
					vec3 glintPath = specularLight * mix( 0.35, 1.0, reflectance ) * getShadowMask();
					glintPath = glintPath / ( vec3( 1.0 ) + glintPath );
					vec3 outgoingLight = min( albedo + glintPath, vec3( 0.80 ) );
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`

		};

		const material = new ShaderMaterial( {
			name: mirrorShader.name,
			uniforms: UniformsUtils.clone( mirrorShader.uniforms ),
			vertexShader: mirrorShader.vertexShader,
			fragmentShader: mirrorShader.fragmentShader,
			lights: true,
			side: side,
			fog: fog
		} );

		material.uniforms[ 'mirrorSampler' ].value = renderTarget.texture;
		material.uniforms[ 'textureMatrix' ].value = textureMatrix;
		material.uniforms[ 'alpha' ].value = alpha;
		material.uniforms[ 'time' ].value = time;
		material.uniforms[ 'normalSampler' ].value = normalSampler;
		material.uniforms[ 'sunColor' ].value = sunColor;
		material.uniforms[ 'waterColor' ].value = waterColor;
		material.uniforms[ 'sunDirection' ].value = sunDirection;
		material.uniforms[ 'distortionScale' ].value = distortionScale;

		material.uniforms[ 'eye' ].value = eye;

		scope.material = material;

		scope.onBeforeRender = function ( renderer, scene, camera ) {

			mirrorWorldPosition.setFromMatrixPosition( scope.matrixWorld );
			cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );

			rotationMatrix.extractRotation( scope.matrixWorld );

			normal.set( 0, 0, 1 );
			normal.applyMatrix4( rotationMatrix );

			view.subVectors( mirrorWorldPosition, cameraWorldPosition );

			// Avoid rendering when mirror is facing away

			if ( view.dot( normal ) > 0 ) return;

			view.reflect( normal ).negate();
			view.add( mirrorWorldPosition );

			rotationMatrix.extractRotation( camera.matrixWorld );

			lookAtPosition.set( 0, 0, - 1 );
			lookAtPosition.applyMatrix4( rotationMatrix );
			lookAtPosition.add( cameraWorldPosition );

			target.subVectors( mirrorWorldPosition, lookAtPosition );
			target.reflect( normal ).negate();
			target.add( mirrorWorldPosition );

			mirrorCamera.position.copy( view );
			mirrorCamera.up.set( 0, 1, 0 );
			mirrorCamera.up.applyMatrix4( rotationMatrix );
			mirrorCamera.up.reflect( normal );
			mirrorCamera.lookAt( target );

			mirrorCamera.far = camera.far; // Used in WebGLBackground

			mirrorCamera.updateMatrixWorld();
			mirrorCamera.projectionMatrix.copy( camera.projectionMatrix );

			// Update the texture matrix
			textureMatrix.set(
				0.5, 0.0, 0.0, 0.5,
				0.0, 0.5, 0.0, 0.5,
				0.0, 0.0, 0.5, 0.5,
				0.0, 0.0, 0.0, 1.0
			);
			textureMatrix.multiply( mirrorCamera.projectionMatrix );
			textureMatrix.multiply( mirrorCamera.matrixWorldInverse );

			// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
			// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
			mirrorPlane.setFromNormalAndCoplanarPoint( normal, mirrorWorldPosition );
			mirrorPlane.applyMatrix4( mirrorCamera.matrixWorldInverse );

			clipPlane.set( mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant );

			const projectionMatrix = mirrorCamera.projectionMatrix;

			q.x = ( Math.sign( clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
			q.y = ( Math.sign( clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
			q.z = - 1.0;
			q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

			// Calculate the scaled plane vector
			clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );

			// Replacing the third row of the projection matrix
			projectionMatrix.elements[ 2 ] = clipPlane.x;
			projectionMatrix.elements[ 6 ] = clipPlane.y;
			projectionMatrix.elements[ 10 ] = clipPlane.z + 1.0 - clipBias;
			projectionMatrix.elements[ 14 ] = clipPlane.w;

			eye.setFromMatrixPosition( camera.matrixWorld );

			// Render

			const currentRenderTarget = renderer.getRenderTarget();

			const currentXrEnabled = renderer.xr.enabled;
			const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

			scope.visible = false;

			renderer.xr.enabled = false; // Avoid camera modification and recursion
			renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

			renderer.setRenderTarget( renderTarget );

			renderer.state.buffers.depth.setMask( true ); // make sure the depth buffer is writable so it can be properly cleared, see #18897

			// HACK: Enable layer 1 on mirror camera so reflection-only objects are visible
			mirrorCamera.layers.enable( 1 );

			if ( renderer.autoClear === false ) renderer.clear();
			renderer.render( scene, mirrorCamera );

			scope.visible = true;

			renderer.xr.enabled = currentXrEnabled;
			renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

			renderer.setRenderTarget( currentRenderTarget );

			// Restore viewport

			const viewport = camera.viewport;

			if ( viewport !== undefined ) {

				renderer.state.viewport( viewport );

			}

		};

	}

}

export { Water };
