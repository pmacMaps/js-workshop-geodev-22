export const setQueryGeometry = (lat, long) => {
    return {
        x: long,
        y: lat,
        spatialReference: {
        wkid: 4326
        }
    }
};

// convert to function
// try to convert to async/await
// change to within a distance of > that is a parameter
/*
arcgisRest
        .queryFeatures({
          url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/LA_County_Parcels/FeatureServer/0",
          geometry: queryGeometry,
          geometryType: "esriGeometryPoint",
          spatialRel: "esriSpatialRelIntersects",
          authentication
        })
        .then((response) => {
          console.log(response.features);
          document.getElementById("result").textContent = JSON.stringify(response.features, null, 2);
        });
*/

export const queryFeatures = (geometry, distance) => {
    arcgisRest
        .queryFeatures({
          url: "https://mapservices.pasda.psu.edu/server/rest/services/pasda/ExplorePAtrails/MapServer/0",
          geometry: geometry,
          distance: 5, // make parameter
          units: "esriSRUnit_StatuteMile",
          geometryType: "esriGeometryPoint",
          spatialRel: "esriSpatialRelIntersects"
        })
        .then((response) => {
          console.log(response.features);
          document.getElementById("result").textContent = JSON.stringify(response.features, null, 2);
        });
}