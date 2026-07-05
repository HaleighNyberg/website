// easterEggs.js — hidden delights that reward curiosity
import * as THREE from 'three';
import { state } from './config.js?v=real9';

const _raycaster = new THREE.Raycaster();
const _ndc = new THREE.Vector2();

export function initEasterEggs() {
    const { renderer, camera } = state;
    if (!renderer || !camera) return;

    const dom = renderer.domElement;
    // The moon (and its hit sphere) live on layer 4 so they don't reflect in
    // the water. The raycaster must opt into every layer or moon clicks never
    // register (only the layer-0 gateway would) — this is why the moon easter
    // egg silently never fired.
    _raycaster.layers.enableAll();
    let moonCooldown = false;
    let gatewayCooldown = false;

    dom.addEventListener('click', (e) => {
        const rect = dom.getBoundingClientRect();
        _ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        _ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        _raycaster.setFromCamera(_ndc, camera);

        // --- Gateway click: "hello, gateway." + station flash. Checked
        //     first because its hit sphere is smaller and usually in
        //     front of the moon along the click ray. ---
        if (!gatewayCooldown && state.gateway) {
            const gwTargets = [];
            if (state._gatewayHitSphere) gwTargets.push(state._gatewayHitSphere);
            gwTargets.push(state.gateway);
            const gwHits = _raycaster.intersectObjects(gwTargets, true);
            if (gwHits.length > 0) {
                gatewayCooldown = true;
                showFloatingMessage('goodnight, gateway.', e.clientX, e.clientY);
                // Brief brightness pulse on the station meshes. Iterates any
                // children with an emissive intensity; NASA Gateway GLB has
                // several of these for its docking lights/solar panel edges.
                state.gateway.traverse((obj) => {
                    if (obj.material && 'emissiveIntensity' in obj.material) {
                        const orig = obj.material.emissiveIntensity;
                        obj.material.emissiveIntensity = orig + 2.5;
                        setTimeout(() => { obj.material.emissiveIntensity = orig + 0.8; }, 300);
                        setTimeout(() => { obj.material.emissiveIntensity = orig; }, 900);
                    }
                });
                setTimeout(() => { gatewayCooldown = false; }, 3000);
                return;
            }
        }

        // --- Moon click: glow pulse + fading message ---
        if (!moonCooldown && state.moonOrb) {
            const moonTargets = [state.moonOrb];
            if (state._moonHitSphere) moonTargets.push(state._moonHitSphere);
            const hits = _raycaster.intersectObjects(moonTargets, true);
            if (hits.length > 0) {
                moonCooldown = true;
                const moonMat = state.moonOrb.material;
                if (moonMat.uniforms && moonMat.uniforms.uAmbient) {
                    const origAmbient = moonMat.uniforms.uAmbient.value;
                    moonMat.uniforms.uAmbient.value = 0.6;
                    setTimeout(() => { moonMat.uniforms.uAmbient.value = 0.35; }, 300);
                    setTimeout(() => { moonMat.uniforms.uAmbient.value = origAmbient; }, 800);
                }
                showFloatingMessage('good morning, moon.', e.clientX, e.clientY);
                setTimeout(() => { moonCooldown = false; }, 3000);
            }
        }
    });
}

function showFloatingMessage(text, x, y) {
    const el = document.createElement('div');
    el.textContent = text;
    el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y - 20}px;
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: 0.14em;
        color: rgba(236, 231, 219, 0.9);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transform: translateY(0);
        transition: opacity 0.4s ease, transform 2.5s ease;
    `;
    document.body.appendChild(el);

    // Trigger animation
    requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(-30px)';
    });

    // Fade out and remove
    setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 500);
    }, 2000);
}
