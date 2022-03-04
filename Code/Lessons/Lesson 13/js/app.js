// initial scale and coordinates
import { initCoords, initScale } from './constants.js';
// basemap
import { esriStreetsRelief } from './basemaps.js';
// map controls
import { layerControl, zoomControl, scaleControl } from './map-controls.js';
// overlays (layers)
import { usgsContours, dcnrTrails } from './overlays.js';
// search control
import { searchControl } from './search.js';

// create a webmap
// define what DOM element to place map within
// set center coordinates (latitude, longitude)
// set intial zoom level
// can optionally define layers to load in map
export const map = L.map('webmap', {
    center: initCoords, //[40.25, -76.88],
    zoom: initScale, //12,
    zoomControl: false, // will use ZoomHome plugin's control
    layers: [esriStreetsRelief]
});


// add map widgets to map
layerControl.addTo(map);
zoomControl.addTo(map);
scaleControl.addTo(map);
searchControl.addTo(map);

// overlays
usgsContours.addTo(map);
dcnrTrails.addTo(map);