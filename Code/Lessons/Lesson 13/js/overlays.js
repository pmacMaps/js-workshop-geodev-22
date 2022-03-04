// USGS elevation contours - map service (dynamic map layer)
export const usgsContours = L.esri.dynamicMapLayer({
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer',
    layers: [19]
});

// recreation trails from DCNR's Explore PA Trails - map service (feature layer)
export const dcnrTrails = L.esri.featureLayer({
    url: 'https://www.gis.dcnr.state.pa.us/agsprod/rest/services/BRC/EPAT_NEW/MapServer/1',
    ignoreRenderer: true, // if using renderer's plugin, set to true to ingore arcgis server symbology
    style: function(feature) {
        return {
            color: '#FF5349',
            weight: 2
        }
    }
});

// bind popup to trails
dcnrTrails.bindPopup(function(layer) {
    let popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{NAME01}</h3>';
    popupContent += '<p>{DESCRIPTION}</p>';
    popupContent += '</div>';
    return L.Util.template(popupContent, layer.feature.properties);
}, {closeOnClick: true, maxWidth: 200, maxHeight: 150});

// overlays layers for layer control widget
export const overlays = {
    "Elevation Contours (USGS)": usgsContours,
    "Recreation Trails (DCNR)": dcnrTrails
};