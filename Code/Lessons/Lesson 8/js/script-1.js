'use strict';

// get elements by tag name
// get all 'section' elements
const sectionEls = document.getElementsByTagName('section');
// print to console
console.log(sectionEls);

// get elements by class name
//class = .copy-txt
const copyTxtEls = document.getElementsByClassName('copy-txt');
// print to console
console.log(copyTxtEls);
// access first element with .copy-txt class
console.log(copyTxtEls[0]);

// get element by ID
// id = intBtn
const btnEl = document.getElementById('intBtn');
//print to console
console.log(btnEl);

// get element(s) by a query string
// add [0] to get first matching element back
const imgEl = document.querySelectorAll('section img.img-spc')[0];
// print to console
console.log(imgEl);
// change image display property from 'none' to 'block'

// add event listener to button
// can execute JS code when a user clicks the button
btnEl.addEventListener('click', () => {
    console.log('you clicked the button');

    // if image is hidden show
    // if it is shown, hide it
    if (imgEl.style.display !== 'block') {
        imgEl.style.display = 'block';
    } else {
        imgEl.style.display = 'none';
    }

    // set outline to 'section' elements
    for (element of copyTxtEls) {
        element.style.fontWeight = 'bold';
    }
});