// Open Street Map
export const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

// USGS Topographic
export const usgsWms = L.tileLayer.wms("https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "USGS &copy; 2021"
});

// basemap layers for layer control widget
export const basemaps = {
    "Open Street Map": osm,
    "USGS Topographic": usgsWms
};