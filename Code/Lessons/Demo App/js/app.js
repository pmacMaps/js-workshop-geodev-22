import { getCurrentPosition } from './get-user-location.js';

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
} catch(err) {
  console.log(err)
  locationEl.innerHTML = err.message;
}