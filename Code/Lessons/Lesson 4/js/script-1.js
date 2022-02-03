// true boolean
const truth = true;
// false boolean
const falsity = false;
// print to console
console.log(`The truth is ${truth}\nThe opposite is ${falsity}`);

// null data
let noData = null;
// print to console
console.log(noData);

// undefined data
let someVariable;
// print to console
console.log(`the data type for "someVariable" is ${typeof(someVariable)}`);

// numeric data
const x =  5
const y = 3.5
// print to console
console.log(`5 - 3.5 = ${x - y}`);

// string data
const myCity = 'Harrisburg, Pennsylvania';
console.log(`I am currently in ${myCity}`);

// array data
const webmapLibs = ['Leaflet', 'Mapbox API', 'ArcGIS JS API', 'OpenLayers3', 'CesiumJS'];
// generate random number
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
// print to console
console.log(`my favorite web mapping library is ${webmapLibs[getRandomInt(webmapLibs.length)]}`);

// object data
// full details at https://www.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5?f=pjson
const esri_topo = {
    "id": "7dc6cea0b1764a1f9af2e679f642f0f5",
    "owner": "esri_vector",
    "orgId": "P3ePLMYs2RVChkJx",
    "created": 1509037543000,
    "modified": 1642100159000,
    "guid": null,
    "name": null,
    "title": "World Topographic Map",
    "type": "Vector Tile Service",    
    "url": "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",   
    "access": "public",    
    "commentsEnabled": true,
    "numComments": 11,
    "numRatings": 4,
    "avgRating": 3.700000047683716,
    "numViews": 133628,
    "contentStatus": "public_authoritative",
    "scoreCompleteness": 100,
    "groupDesignations": "livingatlas"
}

// print to console
console.log(`
${esri_topo.title} is of type "${esri_topo.type}".
It's access is ${esri_topo.access}, and content status is ${esri_topo.contentStatus}
`);