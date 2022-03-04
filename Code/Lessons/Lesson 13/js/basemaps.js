// esri api key
import { esriKey } from './constants.js';

// Esri Streets Relief > vector tiles
export const esriStreetsRelief = L.esri.Vector.vectorBasemapLayer('ArcGIS:StreetsRelief', {
    apikey: esriKey
});

// PEMA orthoimagery hosted on PASDA > tile map service
const pemaImagery = L.esri.tiledMapLayer({
    url: 'https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer'
});

// Esri Imagery Labels
const esriImageryLabels = L.esri.Vector.vectorBasemapLayer('ArcGIS:Imagery:Labels', {
    apikey: esriKey
});

// group layer combining PEMA imagery and Esri labels
const imageryBasemap = L.layerGroup([pemaImagery, esriImageryLabels]);

// USGS Topographic
export const usgsWms = L.tileLayer.wms("https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "USGS &copy; 2021"
});

// basemap layers for layer control widget
export const basemaps = {
    "Streets (Esri)": esriStreetsRelief,
    //"Imagery (PEMA)": pemaImagery,
    "Imagery": imageryBasemap
};