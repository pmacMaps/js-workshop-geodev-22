'use strict';

// declare variable using 'const'
// within global scope
const testName = 'John Smith';

// function that takes a string and prints it to console
const printText = (str) => {
    // we are within the function scope
    const testName = 'Jane Doe';
    // print 'testName' in local (function) scope
    console.log(testName)
    // print argument passed into function
    console.log(str);
    // create variable within local scope
    const country = 'USA';
}

// call function
printText(testName);

// generates error
// variable 'country' not in global scope
//console.log(country);