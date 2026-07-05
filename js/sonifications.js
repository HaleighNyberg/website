// Hubble sonification manifest. The audio module picks one at random on
// load, plays it end-to-end via <audio src="...">, then picks the next.
//
// Streamed directly from NASA's CDN rather than bundled locally — the
// full set is ~727MB which is unshippable for a portfolio. NASA content
// is public domain; each track credits SYSTEM Sounds (M. Russo, A.
// Santaguida) or NASA/CXC/SAO/K. Arcand. Credit is shown in the audio
// visualizer (js/audioViz.js) when a track is playing.
//
// Source: https://science.nasa.gov/mission/hubble/multimedia/sonifications/

const CDN = 'https://assets.science.nasa.gov/content/dam/science/missions/hubble/multimedia/sonifications/';

export const SONIFICATIONS = [
    { title: 'The Mice Galaxies',        slug: 'the-mice-galaxies' },
    { title: 'Arp 140',                  slug: 'arp-140' },
    { title: 'V838 Monocerotis',         slug: 'v838-monocerotis' },
    { title: 'RS Puppis',                slug: 'rs-puppis' },
    { title: 'Pismis 24',                slug: 'pismis-24' },
    { title: 'NGC 1300',                 slug: 'ngc-1300' },
    { title: 'M87 Black Hole',           slug: 'black-hole-at-the-center-of-galaxy-m87' },
    { title: 'NGC 1569',                 slug: 'ngc-1569' },
    { title: 'Hoag\u2019s Object',        slug: 'hoags-object' },
    { title: 'Bubble Nebula',            slug: 'bubble-nebula' },
    { title: 'Butterfly Nebula',         slug: 'butterfly-nebula' },
    { title: 'NGC 2392',                 slug: 'ngc-2392' },
    { title: 'Westerlund 2',             slug: 'wusterland-2' },
    { title: 'Hubble Ultra Deep Field',  slug: 'hubble-ultra-deep-field-2014' },
    { title: 'The Whirlpool Galaxy',     slug: 'the-whirlpool-galaxy' },
    { title: 'Cat\u2019s Eye Nebula',     slug: 'cats-eye-nebula' },
    { title: 'Supernova 1987A',          slug: 'supernova-1987a' },
    { title: 'Bullet Cluster',           slug: 'bullet-cluster' },
    { title: 'Caldwell 73',              slug: 'caldwell-73' },
    { title: 'The Crab Nebula',          slug: 'the-crab-nebula' },
    { title: 'Abell 370',                slug: 'abell-370' },
    { title: 'Helix Nebula',             slug: 'helix-nebula' },
    { title: 'Twin Galaxies AM 2026-424', slug: 'twin-galaxies-am-2026-424' },
    { title: 'Cosmic Reef',              slug: 'cosmic-reef' },
    { title: 'Lensing Galaxy Cluster',   slug: 'lensing-galaxy-cluster' },
    { title: 'Pillars of Creation',      slug: 'pillars-of-creation' },
    { title: 'Milky Way Center',         slug: 'milky-way-center' },
].map(t => ({ ...t, url: `${CDN}hubble-sonification-${t.slug}.mp4` }));

export const SOURCE_PAGE = 'https://science.nasa.gov/mission/hubble/multimedia/sonifications/';
export const CREDIT_HTML = 'NASA &middot; SYSTEM Sounds';

export function pickRandom(exclude = null) {
    let pick;
    do {
        pick = SONIFICATIONS[Math.floor(Math.random() * SONIFICATIONS.length)];
    } while (exclude && SONIFICATIONS.length > 1 && pick.url === exclude);
    return pick;
}
