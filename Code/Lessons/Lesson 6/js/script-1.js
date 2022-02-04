// Set the initial map zoom level based upon viewport width
// helps for map loading on desktop or mobile phone
const setInitialMapZoom = (windowWidth) => {
    let mapZoom;
    if (windowWidth < 500) {
        mapZoom = 14;
    } else {
        mapZoom = 15;
    }
    return mapZoom;
}

// width of browser window
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// set map's initial zoom level
const mapInitZoom = setInitialMapZoom(screenWidth);
// print message to console
console.log(mapInitZoom);