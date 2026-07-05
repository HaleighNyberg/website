// Fake terminal under the home-zone scan message. Pattern-matches a
// small curated command set — never evaluates user input. The prompt
// echoes back, renders inert text. Safe as shipped: no eval, no
// innerHTML, bounded history, single-line input. Both `cmd` and
// `/cmd` forms route to the same handlers.

const MAX_HISTORY_LINES = 40;

function openTab(url) {
    const w = window.open(url, '_blank', 'noopener');
    if (!w) console.warn(`terminal: popup blocked for ${url}`);
}

function downloadAsset(path, filename) {
    const a = document.createElement('a');
    a.href = path;
    a.download = filename;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const NASA_SONIFICATIONS = 'https://science.nasa.gov/mission/hubble/multimedia/sonifications/';
const GITHUB_URL = 'https://github.com/HaleighNyberg';

const KONAMI_SEQ = 'up up down down left right left right b a';

const COMMANDS = {
    help: () => [
        'commands (slash optional — /help == help):',
        '  print("text")   echo a string',
        '  whoami          short bio',
        '  ls              list site sections',
        '  cat <section>   open a section (about / research / cv / toolkit / connect / dissertation)',
        '  scan            re-run the scanner',
        '  scan all        extended scan sweep',
        '  resources       credits and sources',
        '  email           open mail client (haleigh@purdue.edu)',
        '  cv              download Nyberg_CV.pdf',
        '  github          open github profile',
        '  nasa            open NASA Hubble sonifications page',
        '  gogogo          spin the moon orbit fast for 2 revolutions',
        '  freeze          pause the moon orbit',
        '  reset           restore normal moon orbit',
        '  hello           say hi',
        '  konami          enter the konami code',
        '  sudo <cmd>      permission denied (you are not root)',
        '  clear           clear the terminal',
        '  exit            hide this terminal',
    ],
    whoami: () => [
        'haleigh e. nyberg',
        'phd candidate, astrobiology @ purdue',
        'nsf grfp fellow · olson lab',
    ],
    ls: () => [
        'home · about · research · resume/cv · toolkit · connect · dissertation',
    ],
    scan: () => [
        '> scanning... volcanic island detected.',
        '> shoreline ponds active. rna precursor cycling in progress.',
    ],
    'scan all': () => [
        '> extended sweep initiated...',
        '> atmosphere: thin. O2 trace. CH4 elevated.',
        '> hydrosphere: liquid water confirmed. salinity moderate.',
        '> geochem: basalt substrate. hydrothermal vents present.',
        '> biosignature candidates: 3. cross-checking with archive...',
        '> match: prebiotic chemistry consistent with olson et al. framework.',
        '> scan complete.',
    ],
    resources: () => [
        'ambient audio: nasa hubble sonifications · system sounds',
        'built with: three.js, vanilla js, node/bash',
    ],
    email: () => {
        window.location.href = 'mailto:haleigh@purdue.edu';
        return ['opening mail client → haleigh@purdue.edu'];
    },
    cv: () => {
        downloadAsset('assets/Nyberg_CV.pdf', 'Nyberg_CV.pdf');
        return ['downloading Nyberg_CV.pdf...'];
    },
    github: () => {
        openTab(GITHUB_URL);
        return [`opening ${GITHUB_URL}`];
    },
    nasa: () => {
        openTab(NASA_SONIFICATIONS);
        return ['opening nasa hubble sonifications...'];
    },
    gogogo: () => {
        window.__moonBoost = { factor: 24, orbitsLeft: 2, _swept: 0 };
        return [
            '> moon orbit boost engaged.',
            '> factor x24 · 2 orbits queued.',
        ];
    },
    freeze: () => {
        window.__moonBoost = { factor: 0, orbitsLeft: Infinity, _swept: 0 };
        return ['> moon orbit frozen. type "reset" to resume.'];
    },
    reset: () => {
        window.__moonBoost = null;
        return ['> orbit restored to nominal rate.'];
    },
    hello: () => [
        'hi. the ponds are wet today.',
    ],
    konami: () => [
        `try typing: ${KONAMI_SEQ}`,
    ],
    [KONAMI_SEQ]: () => [
        '> konami code accepted.',
        '> +30 lives. the moon winks at you.',
        '> (try /gogogo)',
    ],
};

// Map `cat <section>` + nav-click dispatch.
const SECTION_NAV = {
    about: 1,
    research: 2,
    'resume': 3,
    'resume/cv': 3,
    cv: 3,
    toolkit: 4,
    skills: 4,
    connect: 5,
    contact: 5,
    dissertation: 6,
};

// Strip an optional leading slash from commands. Single slash only — `//foo`
// stays unknown. Keeps `print("…")` arguments untouched because we match on
// the already-trimmed prefix.
function stripSlash(s) {
    return s.startsWith('/') && !s.startsWith('//') ? s.slice(1).trimStart() : s;
}

function parse(line) {
    const trimmed = stripSlash(line.trim());
    if (!trimmed) return null;

    // print("...") or print('...') — echo the quoted argument
    const printMatch = trimmed.match(/^print\s*\(\s*(["'])(.*?)\1\s*\)\s*;?$/);
    if (printMatch) return { kind: 'echo', value: printMatch[2] };

    // sudo anything — joke handler
    const sudoMatch = trimmed.match(/^sudo\s+(.+)$/i);
    if (sudoMatch) return { kind: 'sudo', arg: sudoMatch[1] };

    // scan all — multi-word command, check before single-word cat
    const lower = trimmed.toLowerCase();
    if (COMMANDS[lower]) return { kind: 'cmd', name: lower };

    // cat <section>
    const catMatch = trimmed.match(/^cat\s+(\S+)$/i);
    if (catMatch) return { kind: 'cat', section: catMatch[1].toLowerCase() };

    return { kind: 'unknown', raw: trimmed };
}

export function initTerminal() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    const wrap = document.createElement('div');
    wrap.id = 'home-terminal';
    wrap.className = 'home-terminal';

    const output = document.createElement('div');
    output.className = 'home-terminal__out';
    wrap.appendChild(output);

    const row = document.createElement('div');
    row.className = 'home-terminal__row';
    const prompt = document.createElement('span');
    prompt.className = 'home-terminal__prompt';
    prompt.textContent = '>';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'home-terminal__input';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('aria-label', 'Terminal input');
    input.placeholder = 'type help';
    row.appendChild(prompt);
    row.appendChild(input);
    wrap.appendChild(row);

    mount.appendChild(wrap);

    const ctx = {
        clearHistory() { output.textContent = ''; },
        hide() { wrap.style.display = 'none'; },
    };

    function emit(line) {
        // Bounded history — drop oldest line once limit hit.
        const lines = output.textContent ? output.textContent.split('\n') : [];
        lines.push(line);
        while (lines.length > MAX_HISTORY_LINES) lines.shift();
        output.textContent = lines.join('\n');
        output.scrollTop = output.scrollHeight;
    }

    function run(line) {
        emit(`> ${line}`);
        const parsed = parse(line);
        if (!parsed) return;

        if (parsed.kind === 'echo') {
            emit(parsed.value);
            return;
        }
        if (parsed.kind === 'sudo') {
            emit(`${parsed.arg}: permission denied (nice try — you are not root)`);
            return;
        }
        if (parsed.kind === 'cat') {
            const idx = SECTION_NAV[parsed.section];
            if (idx !== undefined) {
                emit(`opening ${parsed.section}...`);
                const navItem = document.querySelector(`.section-nav__item[data-zone="${idx}"]`);
                if (navItem) setTimeout(() => navItem.click(), 300);
            } else {
                emit(`cat: ${parsed.section}: no such section`);
            }
            return;
        }
        if (parsed.kind === 'cmd') {
            const out = COMMANDS[parsed.name](ctx);
            for (const o of out) emit(o);
            return;
        }
        if (parsed.kind === 'unknown') {
            emit(`command not found: ${parsed.raw.split(/\s+/)[0]}`);
            emit('type "help" for commands');
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        const line = input.value;
        input.value = '';
        if (line.trim()) run(line);
    });
}
