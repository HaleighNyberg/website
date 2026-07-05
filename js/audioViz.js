// Bottom-left audio visualizer. Shows the currently-playing Hubble
// sonification title (clickable to the NASA source MP4), a skip button,
// credit line, and a bar-style frequency visualizer driven by the
// AnalyserNode exposed from js/audio.js.
//
// Only visible when audio is unmuted and actively playing. When muted
// (default), the widget is hidden and only the small ♪ toggle shows.

import {
    isAudioAvailable, isMuted, subscribe as subscribeAudio,
    getCurrentTrack, getAnalyser, getCreditHTML, skipToNext,
} from './audio.js?v=real9';

const WIDTH = 220;
const HEIGHT = 28;
const BARS = 28;

let root = null;
let titleEl = null;
let canvas = null;
let skipBtn = null;
let ctx2d = null;
let rafId = null;
let _vizBins = null; // reused frequency buffer (no per-frame allocation)
let mounted = false;

function buildUI() {
    if (root) return;
    root = document.createElement('div');
    root.id = 'audio-viz';
    root.className = 'audio-viz';
    root.innerHTML = `
        <canvas class="audio-viz__canvas" width="${WIDTH}" height="${HEIGHT}"></canvas>
        <div class="audio-viz__row">
            <a class="audio-viz__title" target="_blank" rel="noopener" href="#"></a>
            <button class="audio-viz__skip" type="button" title="Next sonification" aria-label="Skip to next sonification">&raquo;</button>
        </div>
        <div class="audio-viz__credit">${getCreditHTML()}</div>
    `;
    canvas = root.querySelector('.audio-viz__canvas');
    titleEl = root.querySelector('.audio-viz__title');
    skipBtn = root.querySelector('.audio-viz__skip');
    ctx2d = canvas.getContext('2d');

    skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        skipToNext();
    });

    document.body.appendChild(root);
    mounted = true;
}

function updateTitle() {
    if (!titleEl) return;
    const t = getCurrentTrack();
    if (!t) {
        titleEl.textContent = '—';
        titleEl.removeAttribute('href');
        return;
    }
    titleEl.textContent = t.title;
    titleEl.href = t.url;
}

function setVisibility(visible) {
    if (!root) return;
    root.dataset.visible = visible ? '1' : '0';
}

function drawFrame() {
    if (!ctx2d || !canvas) return;
    const analyser = getAnalyser();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = WIDTH;
    const cssH = HEIGHT;
    if (canvas.width !== cssW * dpr) {
        canvas.width = cssW * dpr;
        canvas.height = cssH * dpr;
        ctx2d.scale(dpr, dpr);
    }
    ctx2d.clearRect(0, 0, cssW, cssH);

    if (!analyser) {
        rafId = requestAnimationFrame(drawFrame);
        return;
    }

    // Reuse one buffer across frames (this ran a fresh allocation per
    // rAF for as long as audio played).
    if (!_vizBins || _vizBins.length !== analyser.frequencyBinCount) {
        _vizBins = new Uint8Array(analyser.frequencyBinCount);
    }
    const bins = _vizBins;
    analyser.getByteFrequencyData(bins);

    const gap = 2;
    const barW = Math.max(1, (cssW - gap * (BARS - 1)) / BARS);
    for (let i = 0; i < BARS; i++) {
        // Map bar index to a frequency bin, weighted toward the low end
        // where sonification pitches live (the top bins tend to be flat).
        const binIdx = Math.floor(Math.pow(i / BARS, 1.8) * (bins.length * 0.7));
        const v = bins[binIdx] / 255;
        const h = Math.max(1, v * cssH);
        const x = i * (barW + gap);
        const y = cssH - h;
        const alpha = 0.35 + v * 0.55;
        ctx2d.fillStyle = `rgba(111, 195, 232, ${alpha.toFixed(2)})`;
        ctx2d.fillRect(x, y, barW, h);
    }

    rafId = requestAnimationFrame(drawFrame);
}

function startAnim() {
    if (rafId) return;
    rafId = requestAnimationFrame(drawFrame);
}
function stopAnim() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    if (ctx2d && canvas) ctx2d.clearRect(0, 0, WIDTH, HEIGHT);
}

export function initAudioViz() {
    if (!isAudioAvailable()) return;
    buildUI();
    updateTitle();
    setVisibility(!isMuted());
    if (!isMuted()) startAnim();

    subscribeAudio((kind) => {
        if (kind === 'trackchange') updateTitle();
        if (kind === 'mute') {
            const vis = !isMuted();
            setVisibility(vis);
            if (vis) startAnim();
            else stopAnim();
        }
    });
}
