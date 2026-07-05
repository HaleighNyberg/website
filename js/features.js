// Feature flags. Default OFF. Flip to true in the final commit of the
// feature's branch before fast-forward merge. Any flag OFF on main for
// 30 days should either ship (remove the flag, default-on) or delete
// (remove the flag + module + init calls). No permanent OFF flags.

export const FEATURES = {
    realHeightmap: true,
    audio:         true,
    reviewerMode:  true,
    dissertation:  true,
    dailyPlanet:   true,
};
