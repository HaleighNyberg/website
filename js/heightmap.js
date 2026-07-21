// Heightmap source. The current PNG is a generic mountain shape; when a
// real ExoPlaSim-derived heightmap is available (pre-processed to grayscale
// with the red channel encoding elevation, sized to fit the existing
// circular island), change this constant.
//
// The loader in js/config.js::loadHeightmap reads only the red channel and
// normalizes by /255, so any grayscale PNG with matching dimensions will
// slot in without code changes.

export const HEIGHTMAP_URL = 'mountain_height_8bit.webp';

// Soft validation: warn if the loaded image looks wrong (colormap instead
// of grayscale, or aspect ratio wildly off). Called by terrain.js from
// inside the loadHeightmap callback. Cheap - runs once at startup.
export function validateHeightmap(imgData, w, h) {
    const expectedAspect = 1;
    const aspect = w / h;
    if (Math.abs(aspect - expectedAspect) > 0.1) {
        console.warn(`heightmap aspect ${aspect.toFixed(2)} differs from expected ${expectedAspect}; island shape may distort`);
    }
    let rSum = 0, gSum = 0, bSum = 0;
    const step = Math.max(1, Math.floor(imgData.length / 4 / 256));
    let samples = 0;
    for (let i = 0; i < imgData.length; i += 4 * step) {
        rSum += imgData[i];
        gSum += imgData[i + 1];
        bSum += imgData[i + 2];
        samples++;
    }
    const rMean = rSum / samples, gMean = gSum / samples, bMean = bSum / samples;
    const rgSpread = Math.abs(rMean - gMean) / 255;
    const rbSpread = Math.abs(rMean - bMean) / 255;
    if (rgSpread > 0.1 || rbSpread > 0.1) {
        console.warn('heightmap red channel differs strongly from green/blue; this may be a colormap, not grayscale elevation');
    }
}
