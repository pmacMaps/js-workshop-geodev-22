// esri api key
import { esriKey } from './constants.js';
// webmap object
import { map } from './app.js';

// search control widget
// uses esri's world geocoding service
export const searchControl = L.esri.Geocoding.geosearch({
    position: 'topright',
    expanded: true,
    collapseAfterResult: false,
    placeholder: 'Enter an address or place',
    useMapBounds: false,
    providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
        apikey: esriKey,
        countries: 'USA'
        })
    ]
});

// process results
searchControl.on('results', function(data) {
    // make sure there is a result
    if (data.results.length > 0) {
        // set map view
        map.setView(data.results[0].latlng, 7);
        // open pop-up for location
        const popup = L.popup({closeOnClick: true}).setLatLng(data.results[0].latlng).setContent(data.results[0].text).openOn(map);
    } else {
        // open pop-up with no results message
        const popup = L.popup({closeOnClick: true}).setLatLng(map.getCenter()).setContent('No results were found. Please try a different address.').openOn(map);
    }
});