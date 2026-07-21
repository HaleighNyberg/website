// Bottom-left chrome rail. Wires the audio tile to the audio module,
// adopts the audio-viz canvas into the audio popover, and toggles
// popovers for tiles that have one. Muted-by-default audio means the
// rail reads as four quiet tiles until the user opens one.

import { isAudioAvailable, isMuted, setMuted, subscribe as subscribeAudio } from './audio.js?v=real18';

function closeAllPops(panel, except) {
    panel.querySelectorAll('.chrome-tile[data-open="1"]').forEach(t => {
        if (t === except) return;
        t.dataset.open = '0';
        const btn = t.querySelector('.chrome-tile__btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });
}

function setTilePlayingState(tile) {
    const muted = isMuted();
    tile.dataset.playing = muted ? '0' : '1';
    const btn = tile.querySelector('.chrome-tile__btn');
    if (btn) {
        btn.setAttribute('aria-label', muted ? 'Play ambient audio' : 'Mute ambient audio');
        btn.title = muted ? 'Audio (muted)' : 'Audio (playing)';
    }
}

export function initChromePanel() {
    const panel = document.getElementById('chrome-panel');
    if (!panel) return;

    // Mobile uses different chrome - the rail is display:none at 768px.
    const desktop = window.matchMedia &&
                    window.matchMedia('(min-width: 769px) and (pointer: fine)').matches;
    if (!desktop) return;

    // --- Adopt the audio-viz canvas into the audio popover slot ---
    // audioViz.js appends itself to document.body on first init; bring
    // it into the popover so it shares the tile's expand/collapse.
    function adoptAudioViz() {
        const viz = document.getElementById('audio-viz');
        const slot = document.getElementById('chrome-pop-audio');
        if (viz && slot && viz.parentElement !== slot) {
            slot.appendChild(viz);
        }
    }
    adoptAudioViz();
    new MutationObserver(adoptAudioViz).observe(document.body, { childList: true });

    // --- Audio tile: click toggles mute. Open popover only when playing. ---
    const audioTile = panel.querySelector('[data-tile="audio"]');
    if (audioTile && isAudioAvailable()) {
        setTilePlayingState(audioTile);
        const audioBtn = audioTile.querySelector('.chrome-tile__btn');
        audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const willPlay = isMuted();
            setMuted(!willPlay ? true : false);
            // Open popover (showing the viz) when starting playback, close on mute.
            if (willPlay) {
                closeAllPops(panel, audioTile);
                audioTile.dataset.open = '1';
                audioBtn.setAttribute('aria-expanded', 'true');
            } else {
                audioTile.dataset.open = '0';
                audioBtn.setAttribute('aria-expanded', 'false');
            }
        });
        subscribeAudio((kind) => {
            if (kind === 'mute') setTilePlayingState(audioTile);
        });
    } else if (audioTile) {
        // Audio not available - hide the tile entirely.
        audioTile.style.display = 'none';
    }

    // --- Generic popover tiles: any data-tile with an embedded .chrome-pop
    //     that isn't the audio tile (which has bespoke wiring above). ---
    panel.querySelectorAll('.chrome-tile[data-tile]').forEach(tile => {
        if (tile === audioTile) return;
        const btn = tile.querySelector('.chrome-tile__btn');
        const pop = tile.querySelector('.chrome-pop');
        if (!btn || !pop) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = tile.dataset.open === '1';
            closeAllPops(panel);
            if (!wasOpen) {
                tile.dataset.open = '1';
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Click anywhere outside the rail closes every popover.
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target)) closeAllPops(panel);
    });
    // ESC closes too.
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllPops(panel);
    });

    // --- Reveal the rail when zone-dots reveals (approach complete). ---
    const dots = document.getElementById('zone-dots');
    if (!dots) {
        panel.classList.add('revealed');
        return;
    }
    if (dots.classList.contains('revealed')) {
        panel.classList.add('revealed');
    } else {
        new MutationObserver((muts, obs) => {
            if (dots.classList.contains('revealed')) {
                panel.classList.add('revealed');
                obs.disconnect();
            }
        }).observe(dots, { attributes: true, attributeFilter: ['class'] });
    }
}
