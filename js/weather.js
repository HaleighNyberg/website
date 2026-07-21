// Living weather: the island runs its own slow meteorology instead of a
// user slider. A calm-biased epoch machine (clear → hazy → overcast →
// storm and back, no teleports) picks targets; t ramps toward them at
// weather-front speeds, with a small two-period gust wander inside each
// epoch so nothing ever sits mathematically still. Clouds, rain, water
// and the storm-lighting module all keep reading window._weather each
// frame exactly as before.
//
// First epoch is always CLEAR and holds ≥ 90 s - a first-time visitor
// judges the island in its shipping look before any weather moves in.
// Reduced-motion visitors stay clear permanently.

const PRM = typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window._weather = {
    t: 0,                          // 0 = clear, 1 = peak storm
    smoothed: 0,                   // eased-per-frame value consumers use
    suppressLightning: !!PRM,      // true under reduced-motion
};

// --- Epoch definitions ---------------------------------------------------
// base: centre of the band. spread: gust wander half-width. dwell in s.
const EPOCHS = {
    clear:    { base: 0.04, spread: 0.03, dwell: [70, 160] },
    hazy:     { base: 0.28, spread: 0.06, dwell: [45, 100] },
    overcast: { base: 0.55, spread: 0.06, dwell: [40, 90]  },
    storm:    { base: 0.90, spread: 0.07, dwell: [50, 110] },
};
// Neighbour transitions only - weather fronts, not channel surfing.
const NEXT = {
    clear:    [['hazy', 1.0]],
    hazy:     [['clear', 0.6], ['overcast', 0.4]],
    overcast: [['hazy', 0.55], ['storm', 0.45]],
    storm:    [['overcast', 1.0]],
};
// Ramp rates (t units per second). Fronts roll in faster than they clear.
const RATE_BUILD = 0.020;   // toward a stormier target (~45 s clear→storm)
const RATE_DECAY = 0.011;   // toward a calmer target (~80 s storm→clear)
let _rateBoost = 1;         // re-roll uses a temporary faster front

const _state = {
    epoch: 'clear',
    dwellLeft: 90 + Math.random() * 70,  // first epoch: never below 90 s
    target: EPOCHS.clear.base,
    phase1: Math.random() * Math.PI * 2, // gust oscillator phases
    phase2: Math.random() * Math.PI * 2,
    elapsed: 0,
};

function _pickNext(from) {
    const opts = NEXT[from];
    let r = Math.random();
    for (const [name, w] of opts) {
        if (r < w) return name;
        r -= w;
    }
    return opts[opts.length - 1][0];
}

function _enterEpoch(name) {
    const e = EPOCHS[name];
    _state.epoch = name;
    _state.dwellLeft = e.dwell[0] + Math.random() * (e.dwell[1] - e.dwell[0]);
    _state.target = Math.max(0, Math.min(1,
        e.base + (Math.random() * 2 - 1) * e.spread));
}

export function setWeather(t) {
    // Manual override (easter eggs / console). The living process resumes
    // from wherever this puts it - the next epoch change re-targets.
    const clamped = Math.max(0, Math.min(1, +t || 0));
    window._weather.t = clamped;
    window.dispatchEvent(new CustomEvent('weather:change', { detail: { t: clamped } }));
}

export function getWeather() {
    return window._weather.t;
}

export function setSuppressLightning(on) {
    window._weather.suppressLightning = !!on;
}

/** Re-seed the sky alongside an island re-roll: jump the machine to a
 *  weighted-random epoch and let the front move in visibly faster than
 *  natural weather (the click deserves a response), then settle back to
 *  normal pacing. Calm states stay the most likely draw. */
export function rerollWeather() {
    if (PRM) return 'clear';
    const r = Math.random();
    const name = r < 0.35 ? 'clear' : r < 0.65 ? 'hazy' : r < 0.85 ? 'overcast' : 'storm';
    _enterEpoch(name);
    _rateBoost = 3.2;
    return name;
}

/** Debug: jump straight to a named epoch at boosted front speed. */
export function forceEpoch(name) {
    if (!EPOCHS[name]) return;
    _enterEpoch(name);
    _rateBoost = 3.2;
}
window.__forceEpoch = forceEpoch;
window.__weatherEpoch = () => _state.epoch;
window.__rerollWeather = rerollWeather;

// Frame update: advance the epoch machine, ramp t toward the epoch
// target at front speed, ease `smoothed` after it. Called every frame
// from the render loop.
export function tickWeather(dt) {
    const w = window._weather;
    // Debug hooks: `manual` freezes the epoch machine (a panel slider
    // owns t), `speed` fast-forwards the whole process for review.
    if (w.manual) {
        const km = 1.0 - Math.exp(-dt * 1.25);
        w.smoothed += (w.t - w.smoothed) * km;
        return;
    }
    dt *= (w.speed || 1);
    if (!PRM && dt > 0) {
        const s = _state;
        s.elapsed += dt;
        s.dwellLeft -= dt;
        if (s.dwellLeft <= 0) _enterEpoch(_pickNext(s.epoch));

        // Gust wander: two incommensurate slow sines, so the value
        // breathes inside the band without ever looping visibly.
        const e = EPOCHS[s.epoch];
        const gust = e.spread *
            (Math.sin(s.elapsed * 0.48 + s.phase1) * 0.6 +
             Math.sin(s.elapsed * 0.211 + s.phase2) * 0.4);
        const goal = Math.max(0, Math.min(1, s.target + gust));

        const rate = (goal > w.t ? RATE_BUILD : RATE_DECAY) * _rateBoost;
        const step = rate * dt;
        w.t += Math.max(-step, Math.min(step, goal - w.t));
        // Re-roll boost relaxes once the front has arrived.
        if (_rateBoost > 1 && Math.abs(goal - w.t) < 0.02) _rateBoost = 1;
    }
    // 0.8s time constant - keeps per-frame consumers snap-free.
    const k = 1.0 - Math.exp(-dt * 1.25);
    w.smoothed += (w.t - w.smoothed) * k;
}

/** The living process needs no DOM - this exists so main.js has one
 *  explicit init point (and a place to pin reduced-motion clear). */
export function initWeather() {
    if (PRM) {
        window._weather.t = 0;
        window._weather.smoothed = 0;
    }
}
