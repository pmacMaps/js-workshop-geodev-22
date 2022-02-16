// import function to build table
import { buildTable } from './table.js';
// import MPO data
import { mpoData } from './data.js';
// import function to get current date
import { getCurrentDate } from './date.js';
// import function to set HTML content
import { setContent } from './ui.js';

// table DOM element to add content to
const tableEl = document.getElementById('records');

// today's date
const today = getCurrentDate();
// print date to console
console.log(today);

// display current date on web page
setContent('dateUI', today);

// add date of MPO's to table
buildTable(tableEl, mpoData);