//  basemaps group
import { basemaps } from './basemaps.js';
// overlays group
import { overlays } from './overlays.js';
// initial scale and coordinates
import { initCoords, initScale } from './constants.js';

// layer control widget
export const layerControl = L.control.layers(basemaps, overlays, {
    collapsed: false // control whether control is collapasble or not
});

// zoom scale widget
export const zoomControl = L.Control.zoomHome({
    homeCoordinates: initCoords, // coordinates to set map
    homeZoom: initScale // map scale to set map to
});

// map scale widget
export const scaleControl = L.control.betterscale({
    maxWidth: 250, // width of scalebar
    metric: false, // boolean to use metric system
    imperial: true // boolean to use imperial system
});