// Hubble sonification player. Streams MP4 files from NASA's CDN; the
// browser extracts the AAC audio track from the MP4 container. An
// AnalyserNode taps the audio graph for the visualizer (js/audioViz.js).
//
// Autoplay policy: the <audio> element is created with autoplay off. It
// only loads + plays after the user clicks the mute toggle (that click
// is the required gesture). Default state is muted so first-time
// visitors hear silence until they opt in.

import { SONIFICATIONS, pickRandom, SOURCE_PAGE, CREDIT_HTML } from './sonifications.js?v=real16';

const STORAGE_KEY = 'audio';

let audioEl = null;          // <audio> DOM element streaming the current track
let ctx = null;              // AudioContext
let source = null;           // MediaElementAudioSourceNode
let masterGain = null;
let analyser = null;         // AnalyserNode for visualizer
let bedGain = null;          // gain node for the procedural ambient ocean bed
let current = null;          // currently-loaded track from SONIFICATIONS
let mutedPref = true;
let enabled = false;
let listeners = [];          // subscribers for track changes

// Always boot muted. The previous behavior persisted "on" across sessions,
// which surprised users who expected a quiet site by default. The mute pref
// now lives only in the running tab — refresh = silence again.
function readMutedPref() { return true; }
function writeMutedPref() { /* intentional no-op */ }

export function isMuted()        { return mutedPref; }
export function isAudioAvailable() { return enabled; }
export function getCurrentTrack() { return current; }
export function getAnalyser()     { return analyser; }
export function getSourcePage()   { return SOURCE_PAGE; }
export function getCreditHTML()   { return CREDIT_HTML; }

export function subscribe(fn) {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
}
function notify(kind) {
    for (const fn of listeners) {
        try { fn(kind, current); } catch {}
    }
}

function applyMasterGain() {
    if (!masterGain || !ctx) return;
    const target = mutedPref ? 0 : 0.42;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(target, now + 0.6);
}

// Procedural ocean ambient bed: filtered brown-ish noise + low sub sine.
// Routes through a dedicated bedGain so it can ride at a low level under
// the sonifications without ducking them. bedGain -> masterGain -> dest,
// so the master mute gate still silences the bed.
function createOceanBed() {
    if (!ctx || !masterGain) return;

    // Brownian noise buffer (lowpass-integrated white noise).
    const buf = ctx.createBuffer(1, 2 * ctx.sampleRate, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;

    const low = ctx.createBiquadFilter();
    low.type = 'lowpass';
    low.frequency.value = 220;
    low.Q.value = 0.7;

    // Slow LFO tremolo for the swell.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.11;
    const lfoAmt = ctx.createGain();
    lfoAmt.gain.value = 0.09;
    const tremolo = ctx.createGain();
    tremolo.gain.value = 0.85;
    lfo.connect(lfoAmt).connect(tremolo.gain);

    // Sub oscillator for a hint of depth.
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = 52;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.08;

    bedGain = ctx.createGain();
    bedGain.gain.value = 0;

    noise.connect(low).connect(tremolo).connect(bedGain);
    sub.connect(subGain).connect(bedGain);
    bedGain.connect(masterGain);

    try {
        noise.start();
        lfo.start();
        sub.start();
    } catch {}
}

function applyBedGain() {
    if (!bedGain || !ctx) return;
    const target = mutedPref ? 0 : 0.16;
    const now = ctx.currentTime;
    bedGain.gain.cancelScheduledValues(now);
    bedGain.gain.setValueAtTime(bedGain.gain.value, now);
    bedGain.gain.linearRampToValueAtTime(target, now + 2.2);
}

function loadTrack(track) {
    if (!audioEl) return;
    current = track;
    audioEl.src = track.url;
    audioEl.load();
    notify('trackchange');
}

function playNextRandom() {
    const next = pickRandom(current ? current.url : null);
    loadTrack(next);
    if (!mutedPref && ctx) {
        audioEl.play().catch(() => {});
    }
}

export function setMuted(muted, opts = {}) {
    const wasMuted = mutedPref;
    mutedPref = !!muted;
    if (opts.persist !== false) writeMutedPref(mutedPref);
    applyMasterGain();
    applyBedGain();

    if (wasMuted && !mutedPref && ctx) {
        // First unmute — the toggle's click counts as the gesture that
        // satisfies autoplay policy. Resume context if needed and start
        // the currently-loaded track (or pick one if none loaded).
        const start = () => {
            if (!current) playNextRandom();
            else audioEl.play().catch(() => {});
        };
        if (ctx.state === 'running') start();
        else ctx.resume().then(start).catch(() => {});
    } else if (!wasMuted && mutedPref) {
        // Mute — pause the element. Keep the track loaded so unmuting
        // resumes where it was. Bed fades out via applyBedGain.
        if (audioEl) audioEl.pause();
    }
    notify('mute');
}

export function skipToNext() {
    if (!ctx) return;
    playNextRandom();
}

export function initAudio() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;

    audioEl = document.createElement('audio');
    audioEl.id = 'sonification-player';
    audioEl.crossOrigin = 'anonymous';
    audioEl.preload = 'auto';
    audioEl.addEventListener('ended', () => {
        // Fire-and-forget: as one track ends, pick another and play.
        playNextRandom();
    });
    audioEl.addEventListener('error', () => {
        // Track failed to load (CORS, 404, offline). Skip to the next.
        playNextRandom();
    });
    document.body.appendChild(audioEl);

    ctx = new AC();
    source = ctx.createMediaElementSource(audioEl);
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.55;

    // source -> analyser -> masterGain -> destination
    source.connect(analyser);
    analyser.connect(masterGain);
    masterGain.connect(ctx.destination);

    createOceanBed();

    mutedPref = readMutedPref();
    enabled = true;
    applyMasterGain();
    applyBedGain();

    // Scene-wide audio reactivity disabled — animate.js no longer reads
    // this. Leaving the global UNSET means even a stale cached animate.js
    // hits the "no analyser → decay to 0" branch in sampleAudio().
    // The visualizer bars (audioViz.js) call getAnalyser() directly,
    // so they keep working without this global.
    window.__audioReactive = null;

    // Pre-load the first track so the visualizer title can display it
    // even before the user unmutes.
    loadTrack(pickRandom());
}
