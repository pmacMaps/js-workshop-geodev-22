'use strict';

// url for Esri Colored Pencil web map item
const cpUrl = 'https://www.arcgis.com/sharing/rest/content/items/826498a48bd0424f9c9315214f2165d4?f=json';
// "bad url" to test error handling
//const cpUrl = 'https://www.arcgis.com/sharing/rest/content/items/826498a48bd0424f9c9315214f21zzzz?f=json';

// webpage element to write data to
const uiEl = document.getElementById('cpContent');

  fetch(cpUrl).then(response => response.json())
  .then(data => {
    for (const property in data) {
        // check for error property in returned data
        if (data.hasOwnProperty('error')) {
            // print message
            console.log(`Error: ${data.error.message} (code: ${data.error.code})`);
            // exit from function
            break;
        }

        // paragraph element
        const pEl = document.createElement('p');
        // add content to paragraph element
        pEl.innerHTML = `${property} : ${data[property]}`;
        // append paragraph element to div container
        uiEl.appendChild(pEl);
    }
  })
  .catch(error => {
    console.log(`Error: "${error}"`);
  });