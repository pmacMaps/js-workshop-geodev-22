//  basemaps group
import { basemaps } from './basemaps.js';
// initial scale and coordinates
import { initCoords, initScale } from './constants.js';

// layer control widget
export const layerControl = L.control.layers(basemaps, null, {
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

// print map widget
export const printControl = L.control.browserPrint({
    title: 'Print the Map', // tooltip of widget
    printModes: ['Portrait', 'Landscape'], // which print modes to allow
    documentTitle: 'Printed Leaflet Map' // title of printed map
});