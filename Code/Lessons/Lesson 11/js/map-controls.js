//  basemaps group
import { basemaps } from './basemaps.js';
// overlays group
import { overlays } from './overlays.js';

// layer control widget
export const layerControl = L.control.layers(basemaps, overlays/*null*/, {
    collapsed: false // control whether control is collapasble or not
});

// map scale widget
export const scaleControl = L.control.scale({
    maxWidth: 150,
    metric: false,
    imperial: true
});