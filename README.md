# haleighnyberg.com

Personal portfolio for Haleigh Nyberg — PhD candidate, Astrobiology, Purdue University.

An interactive [Three.js](https://threejs.org) scene (a volcanic island in a glass
dish) with a cinematic fly-in arrival, scroll-driven camera-linked navigation
across five sections, real-time water, day/night lighting, and a reduced
no-WebGL fallback view.

## Running locally

Serve the folder with any static file server:

```
python -m http.server 8000
```

then open <http://localhost:8000>. Three.js is vendored under `js/vendor/three`,
so the site runs with no external network dependencies. The fly-in plays once per
browser; add `?intro=1` to replay it.

## Editing — there IS a build step

The browser loads ONE minified bundle, `js/app.bundle.js`. The modules in `js/`
are the editable source — changes to them do nothing until you rebuild:

1. edit `js/*.js`
2. `./build.sh` (needs Node; bundles + minifies with esbuild)
3. bump the `?v=realNN` token on the `<script>` tag in `index.html`
   (and on the css `<link>` tags whenever `css/` changed)

Skip step 2 or 3 and you will be staring at the old build wondering why nothing
changed. The tokens are pure cache-busters; keep them in lockstep.

## Layout

- `index.html` — markup, section content, meta
- `css/` — design tokens (`brand.css`), layout (`zones.css`), base (`style.css`)
- `js/` — source modules:
  - scene: `scene.js`, `lighting.js`, `terrain.js`, `ocean.js`, `glass.js`,
    `effects.js`, `volcano.js`, `stormLighting.js`, `zones.js`
  - fly-in: `loadingApproach.js` (flight orchestrator + GPU warm pipeline),
    `transit.js` (route star corridor), `corridor.js` (volumetric nebula),
    `starShell.js` (drifting star layers + destination shell),
    `spaceEnv.js` (void backdrop), `shaderChunks.js` (shared color-pipeline GLSL)
  - UI/entry: `main.js`, `chrome.js`, `reviewer.js`, `content.js`
  - `vendor/three/` — vendored Three.js (build-time dependency of the bundle)
- `assets/` — fonts, photos, CV
- root `*.jpg` / `*.webp` / `*.glb` — scene textures and the deferred station model

## Deploying

Push to `main`; GitHub Pages serves it at haleighnyberg.com (`CNAME`).
Pre-push checklist: rebuild, bump tokens, then load the site once locally with
`?intro=1` — the intro must land with zero console errors.
