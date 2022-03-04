// initial scale and coordinates
import { initCoords, initScale } from './constants.js';
// basemap
import { osm } from './basemaps.js';
// map controls
import { layerControl, zoomControl, scaleControl, printControl } from './map-controls.js';
// overlays (layers)
import { dauphinVoteDistrict } from './overlays.js';

// create a webmap
// define what DOM element to place map within
// set center coordinates (latitude, longitude)
// set intial zoom level
// can optionally define layers to load in map
const map = L.map('webmap', {
    center: initCoords, //[40.25, -76.88],
    zoom: initScale, //12,
    zoomControl: false // will use ZoomHome plugin's control
});

// add OSM to map
osm.addTo(map);

// add map widgets to map
layerControl.addTo(map);
zoomControl.addTo(map);
scaleControl.addTo(map);
printControl.addTo(map);

// add layers to map
dauphinVoteDistrict.addTo(map);