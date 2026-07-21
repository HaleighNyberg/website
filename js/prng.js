// Deterministic seeded PRNG. Mulberry32 - small, fast, good enough for
// visual parameters (not cryptographic).
// Shared utility: used by dailyPlanet; room for audio or future procedural
// work without re-introducing Math.random nondeterminism.

export function mulberry32(seed) {
    let a = seed | 0;
    return function rng() {
        a = (a + 0x6D2B79F5) | 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function dayOfYearSeed(date = new Date()) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const dayOfYear = Math.floor(diff / 86400000);
    return dayOfYear + date.getFullYear() * 1000;
}

export function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
}

export function lerp(a, b, t) {
    return a + (b - a) * t;
}
