// basemap
import { osm } from './basemaps.js';
// map controls
import { layerControl, scaleControl } from './map-controls.js';
// overlays (layers)
import { hu, cityIslandPath } from './overlays.js';

// create a webmap
// define what DOM element to place map within
// set center coordinates (latitude, longitude)
// set intial zoom level
// can optionally define layers to load in map
const map = L.map('webmap', {
    center: [40.25, -76.88],
    zoom: 12//,
    //layers: [osm]
});

// add OSM to map
osm.addTo(map);

// add map widgets to map
layerControl.addTo(map);
scaleControl.addTo(map);

// add layers to map
hu.addTo(map);
cityIslandPath.addTo(map);