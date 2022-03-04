// Dauphin County Voting Districts
export const dauphinVoteDistrict = L.geoJson.ajax('../assets/Voting_Districts.geojson', {
    fillOpacity: 0, // remove fill color
    color: '#000',
    weight: 2.5
});

// set popup for voting districts
dauphinVoteDistrict.bindPopup(function(evt) {
    // html container for popup content
    let popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{NAME2}</h3><hr />';
    popupContent += '<ul>';
    popupContent += '<li>Municipality: {MCD_NAME}</li>'
    popupContent += '<li>Ward: {WARD}</li>'
    popupContent += '<li>Precinct: {PRECINCT}</li>'
    popupContent += '</ul>';
    popupContent += '</div>';

    return L.Util.template(popupContent, evt.feature.properties);
}, {closeOnClick: true, maxWidth: 200})