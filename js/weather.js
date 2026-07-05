// Weather system: cross-fades the scene from clear/sunny (t=0) to
// peak-storm (t=1). Clouds, rain, fog, and the storm-lighting module
// all read window._weather.t each frame. The slider UI writes it.
//
// Defaults are clear/sunny so the island's shipping look is untouched
// on first visit; the user opts into weather via the slider.

const PRM = typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window._weather = {
    t: 0,                          // 0 = clear, 1 = peak storm
    smoothed: 0,                   // eased-per-frame value consumers use
    suppressLightning: !!PRM,      // true under reduced-motion
};

const STORAGE_KEY = 'weather:v1';

export function setWeather(t, opts = {}) {
    const clamped = Math.max(0, Math.min(1, +t || 0));
    window._weather.t = clamped;
    if (opts.persist !== false) {
        try { localStorage.setItem(STORAGE_KEY, String(clamped)); } catch {}
    }
    window.dispatchEvent(new CustomEvent('weather:change', { detail: { t: clamped } }));
}

export function getWeather() {
    return window._weather.t;
}

export function setSuppressLightning(on) {
    window._weather.suppressLightning = !!on;
}

// Frame update: eases smoothed value toward t so cross-fades don't
// snap when the slider jumps. Called from the render loop.
export function tickWeather(dt) {
    const w = window._weather;
    const target = w.t;
    // 0.8s time constant — fast enough to feel responsive, slow
    // enough that dragging the slider doesn't flicker bloom/fog.
    const k = 1.0 - Math.exp(-dt * 1.25);
    w.smoothed += (target - w.smoothed) * k;
}

export function initWeatherUI() {
    let slider = document.getElementById('weather-slider');
    let label  = document.getElementById('weather-label');
    // No static markup ships for this control — build it into the
    // bottom-left chrome tile bar so the user can drive the weather.
    if (!slider) {
        const built = buildWeatherControl();
        if (!built) return;
        slider = built.slider;
        label = built.label;
    }

    // Every visit opens CLEAR. Weather changes only when the user moves
    // the slider in THIS session — restoring a persisted storm across
    // visits read as the site changing weather on its own.
    const initial = 0;
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    slider.value = String(initial);
    setWeather(initial, { persist: false });
    updateLabel(label, initial);

    slider.addEventListener('input', () => {
        const v = parseFloat(slider.value);
        setWeather(v);
        updateLabel(label, v);
    });
}

// Builds a weather tile matching the existing chrome tiles (mute /
// resources / mail) plus a small popover holding the slider. All
// nodes are created here so the shipped HTML stays untouched.
function buildWeatherControl() {
    const anyTile = document.querySelector('.chrome-tile');
    if (!anyTile || !anyTile.parentElement) return null;
    const bar = anyTile.parentElement;

    const tile = document.createElement('div');
    tile.className = 'chrome-tile';
    tile.style.position = 'relative';

    const btn = document.createElement('button');
    btn.className = 'chrome-tile__btn';
    btn.setAttribute('aria-label', 'Weather control');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
        '<svg aria-hidden="true" class="chrome-tile__icon" fill="none" height="16" ' +
        'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ' +
        'stroke-width="2" viewBox="0 0 24 24" width="16">' +
        '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>';
    tile.appendChild(btn);

    const pop = document.createElement('div');
    pop.id = 'weather-pop';
    pop.style.cssText = [
        'position:absolute', 'bottom:calc(100% + 12px)', 'left:0',
        'display:none', 'align-items:center', 'gap:10px',
        'padding:10px 14px', 'width:200px', 'box-sizing:border-box',
        'background:rgba(7,9,14,0.94)',
        'border:1px solid rgba(236,231,219,0.26)', 'border-radius:0',
        'z-index:30',
    ].join(';');

    const slider = document.createElement('input');
    slider.id = 'weather-slider';
    slider.type = 'range';
    slider.min = '0';
    slider.max = '1';
    slider.step = '0.01';
    slider.setAttribute('aria-label', 'Weather intensity');
    slider.style.cssText = 'flex:1;accent-color:#d9a441;cursor:pointer;min-width:0';
    pop.appendChild(slider);

    const label = document.createElement('span');
    label.id = 'weather-label';
    label.style.cssText = [
        'font-family:Inter,system-ui,sans-serif', 'font-weight:500',
        'font-size:10px', 'letter-spacing:0.18em', 'text-transform:uppercase',
        'color:#c9c3b4', 'min-width:62px', 'text-align:right', 'white-space:nowrap',
    ].join(';');
    pop.appendChild(label);

    tile.appendChild(pop);
    bar.appendChild(tile);

    btn.addEventListener('click', () => {
        const open = pop.style.display !== 'none' && pop.style.display !== '';
        pop.style.display = open ? 'none' : 'flex';
        btn.setAttribute('aria-expanded', String(!open));
    });

    return { slider, label };
}

function updateLabel(label, v) {
    if (!label) return;
    // Named bands so the slider feels meaningful, not just a number.
    let name;
    if (v < 0.08) name = 'clear';
    else if (v < 0.30) name = 'hazy';
    else if (v < 0.55) name = 'overcast';
    else if (v < 0.80) name = 'raining';
    else name = 'storm';
    label.textContent = name;
}
