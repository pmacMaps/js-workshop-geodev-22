// icon for HU
import { collegeIcon } from './icons.js';

// HU marker
export const hu = L.marker([40.261976, -76.880252], {
    icon: collegeIcon,
    alt: 'College icons created by Good Ware - Flaticon'
});

// add popup for HU
hu.bindPopup('<h4 style="text-align:center;">Harrisburg University of Science & Technology</h3><p>Home of the GeoDev Summit!</p>', {maxWidth: 125});

// coordinates for path around City Island
const polylineCoords = [
    [40.25591056988711, -76.8883220308601],
    [40.25597386091663, -76.88831884115808],
    [40.256132088231425, -76.88843367043104],
    [40.25685506064796, -76.88940971925463],
    [40.257293221999895, -76.88999343473168],
    [40.257670525326205, -76.89029326672373],
    [40.258364271112676, -76.89164570038761],
    [40.2585468346136, -76.89265683593452],
    [40.258478677632695, -76.89283545924802],
    [40.258308284880066, -76.89291520179869],
    [40.25733216954326, -76.89269511236377],
    [40.256825849802816, -76.89185622072758],
    [40.256012809220124, -76.89156914754106],
    [40.255732867827, -76.89138733452236],
    [40.25557707386223, -76.89104603640551],
    [40.254732349050585, -76.8899602967555],
    [40.25457411847107, -76.88960623983071],
    [40.254795641190455, -76.8891979579713],
    [40.255165655544005, -76.88926175201183],
    [40.25580830726123, -76.88843561918192]
];

// City Island path
export const cityIslandPath = L.polyline(polylineCoords, {
    color: '#FF5349', // color of line
    weight: 4, // thickness of line
    dashArray: '15, 15' // define pattern for dashed line
});

// add tool tip to City Island path
cityIslandPath.bindTooltip('<span style="font-size: 1.25em;font-weight:bold;">City Island Walkway<span>');

// overlays for layer control widget
export const overlays = {
    "Harrisburg University": hu,
    "City Island Path": cityIslandPath
};