// Content data + render: publications and projects.
//
// This is the one place to edit the two lists that change most often.
// Everything else (bios, hero, prose) stays hardcoded in index.html.
// renderContent() is called once from main.js on load, for both the
// full 3D view and the reduced (no-WebGL) reviewer view.

// --- Selected talks (lead author unless noted) ---
const TALKS = [
    {
        year: '2026',
        title: 'Effects of Planetary Obliquity on Wet-Dry Cycles, Pond Organics, and Urability',
        venue: 'AbSciCon 2026',
    },
    {
        year: '2025',
        title: 'Planetary Obliquity and Origin of Life Potential in Warm Little Ponds: Earth and Beyond',
        venue: 'AGU Fall Meeting 2025 (invited)',
    },
    {
        year: '2025',
        title: 'Planetary Obliquity Impacts Wet-Dry Cycling and the Potential for an Origin of Life in Warm Little Ponds',
        venue: 'Goldschmidt 2025',
    },
    {
        year: '2025',
        title: 'Quantifying Planetary Origin of Life Potential: Connecting Global Climate to Local Wet-Dry Cycling on Volcanic Islands',
        venue: 'Midwestern Geobiology Symposium 2025',
    },
    {
        year: '2024',
        title: 'Elucidating Planetary Scenarios That May Lead to an Origin of Life in Warm Little Ponds',
        venue: 'AGU Fall Meeting 2024 (as Brown)',
    },
    {
        year: '2024',
        title: 'Impacts of Planetary Obliquity on Wet-Dry Cycling: Early Earth and Beyond',
        venue: 'AbSciCon 2024 (as Brown)',
    },
];

// --- Proceedings and reports (co-author / collaborative) ---
const WORKS = [
    {
        year: '2025',
        authors: 'Mingsuwan, C. et al.',
        title: 'Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations',
        venue: 'IEEE SMC-IT/SCC, 6th AR/VR Workshop (co-author; presented 2025, to appear in the 2026 proceedings)',
    },
    {
        year: '2025',
        authors: 'Brown, H. E. et al.',
        title: 'Strengthening Community Across Artists and Scientists in Astrobiology',
        venue: 'NASA DARES report',
    },
];

// Profile links shown under the publication list (no citation metrics yet,
// the ORCID Works record is still being populated).
// --- Flagship projects ---
const PROJECTS = [
    {
        title: 'PALLAS (co-founder)',
        blurb: 'A platform connecting artists and scientists for paid collaboration across astrobiology. I co-founded it and designed and built the accessibility-audited front end. We helped secure AAS funding for pilot programming and ran multi-institution events.',
        tags: ['Front-end', 'Accessibility', 'Community building'],
        links: [
            { label: 'Live', href: 'https://pallas.gallery' },
        ],
    },
    {
        title: 'NASA Artemis Gateway visualization',
        blurb: 'Scrum master for two 16-member, multi-university teams building an Unreal Engine VR visualization and mission-planning tool for NASA\'s Lunar Gateway, in partnership with Barrios Technology and NASA\'s Johnson Space Center (two semesters, through Purdue\'s Data Mine).',
        tags: ['Unreal Engine', 'VR', 'Agile / Scrum'],
        // The backing IEEE SMC-IT/SCC paper has no public DOI yet, so it is
        // credited in the Research proceedings list rather than linked here.
        links: [],
    },
    {
        title: 'ExoPlaSim origin-of-life pipeline',
        blurb: 'My dissertation engine: 3D general circulation model parameter sweeps with a custom post-processing pipeline, building toward an Origin of Life Index that ranks worlds by their potential for wet-dry cycling, one of the leading proposed routes to an origin of life. (Model code is dissertation IP, not in the public repo.)',
        tags: ['Python', 'Fortran', 'HPC', 'NetCDF'],
        links: [],
    },
    {
        title: 'ML forecasting (Purdue / John Deere)',
        blurb: 'Multivariate time-series demand prediction (ARIMA, LSTM) on an industry data-science team through Purdue\'s Data Mine.',
        tags: ['ARIMA', 'LSTM', 'Time series'],
        links: [],
    },
];

// --- Render helpers ---

function talkEntry(item) {
    return (
        '<div class="pub-entry">' +
        '<span class="pub-year">' + item.year + '</span>' +
        '<div class="pub-authors"><strong>' + item.title + '</strong></div>' +
        '<div class="pub-venue">' + item.venue + '</div>' +
        '</div>'
    );
}

function workEntry(item) {
    return (
        '<div class="pub-entry">' +
        '<span class="pub-year">' + item.year + '</span>' +
        '<div class="pub-authors">' + item.authors + ' <strong>' + item.title + '</strong></div>' +
        '<div class="pub-venue">' + item.venue + '</div>' +
        '</div>'
    );
}

function renderPublications(mount) {
    if (!mount) return;
    mount.innerHTML =
        '<p class="pub-section-title">Selected Talks</p>' +
        TALKS.slice(0, 3).map(talkEntry).join('') +
        '<p class="pub-section-title">Proceedings &amp; Reports</p>' +
        WORKS.map(workEntry).join('');
}

function projectCard(p) {
    const tags = p.tags.map(function (t) {
        return '<span class="skill-tag">' + t + '</span>';
    }).join('');
    const links = p.links.map(function (l) {
        return '<a class="brand-link" href="' + l.href + '" rel="noopener" target="_blank">' + l.label + '</a>';
    }).join('');
    return (
        '<article class="project-card">' +
        '<h3 class="project-card__title">' + p.title + '</h3>' +
        '<p class="project-card__blurb">' + p.blurb + '</p>' +
        (tags ? '<div class="project-card__tags">' + tags + '</div>' : '') +
        (links ? '<div class="project-card__links">' + links + '</div>' : '') +
        '</article>'
    );
}

function renderProjects(mount) {
    if (!mount) return;
    mount.innerHTML = PROJECTS.map(projectCard).join('');
}

export function renderContent() {
    try {
        renderPublications(document.getElementById('pub-list'));
        renderProjects(document.getElementById('project-grid'));
    } catch (e) {
        console.warn('content render failed', e);
    }
}
