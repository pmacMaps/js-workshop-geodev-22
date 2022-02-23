'use strict';

// new url for ArcGIS Server 'https://gis.example.com/gis/'
// old url for ArcGIS Server 'https://gis.example.com/arcgis/

// array of map services
// contains old url structure
const webServicesList = [
    'https://gis.example.com/arcgis/snowmobile_trails/MapServer',
    'https://gis.example.com/arcgis/local_parks/MapServer',
    'https://gis.example.com/arcgis/state_park_trails/MapServer',
    'https://gis.example.com/arcgis/state_park_boundaries/MapServer',
    'https://gis.example.com/arcgis/local_hiking_trails/MapServer',
    'https://gis.example.com/arcgis/atv_trails/MapServer'
];

// print list of urls
console.log(webServicesList);

// array for updated list of urls
const updatedList = [];

// loop over each url in array
// use forEach
/*
webServicesList.forEach(url => {
    // update url for map services
    // add updated url to array
    updatedList.push(url.replace('arcgis', 'gis'));
});
*/

// loop over each url in array
// use for...of
for (const url of webServicesList) {
    // update url for map services
    // add updated url to array
    updatedList.push(url.replace('arcgis', 'gis'));
};

// print list of urls
console.log(updatedList);