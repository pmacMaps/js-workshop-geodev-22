import { getCurrentPosition } from './get-user-location.js';
import { setQueryGeometry, queryFeatures } from './query-layer.js';

// ui element
const locationEl = document.getElementById('userLocation');
// user's latitude
let lat;
// user's longitude
let long;

try {
  const position = await getCurrentPosition();
  console.log(position)
  lat = position.coords.latitude;
  long = position.coords.longitude;
  locationEl.innerHTML = `Latitude: ${lat}; Longitude: ${long}`;
  const queryGeometry = setQueryGeometry(lat, long);
  console.log(queryGeometry);
  queryFeatures(queryGeometry, 25);
} catch(err) {
  console.log(err)
  locationEl.innerHTML = err.message;
}