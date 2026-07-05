#!/usr/bin/env bash
# Rebuild the shipped JS bundle from the source modules in js/.
# The site loads ONE minified file (js/app.bundle.js); the individual
# js/*.js modules are the editable source. Run this after editing them.
#   usage: ./build.sh
set -e
cd "$(dirname "$0")"
rm -rf .build && mkdir .build
cp js/*.js .build/
# Strip the ?v= cache-bust queries from relative imports so esbuild resolves them.
sed -i -E "s/(\.js)\?v=real[0-9]+/\1/g" .build/*.js
npx --yes esbuild .build/main.js \
  --bundle --minify --format=esm \
  --alias:three=./js/vendor/three/build/three.module.js \
  --alias:three/addons=./js/vendor/three/examples/jsm \
  --outfile=js/app.bundle.js \
  --log-level=warning
rm -rf .build
echo "built js/app.bundle.js ($(du -k js/app.bundle.js | cut -f1) KB) — remember to bump the ?v= token on the <script> in index.html"
