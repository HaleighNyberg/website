# haleighnyberg.com

Personal portfolio for Haleigh Nyberg — PhD candidate, Astrobiology, Purdue University.

An interactive [Three.js](https://threejs.org) scene (a volcanic island in a glass
dish) with scroll-driven, camera-linked navigation across five sections, real-time
water, day/night lighting, and a reduced no-WebGL fallback view.

## Running locally

Static site, no build step. Serve the folder with any static file server:

```
python -m http.server 8000
```

then open <http://localhost:8000>. Three.js is vendored under `js/vendor/three`,
so the site runs with no external network dependencies.

## Layout

- `index.html` — markup + section content
- `css/` — design tokens (`brand.css`), layout (`zones.css`), base (`style.css`)
- `js/` — scene modules (lighting, terrain, ocean, glass, effects) + UI (zones, chrome)
- `assets/` — fonts, photos, CV/résumé, textures, models
