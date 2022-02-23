'use strict';

// counter variable
let theNumber = 0

// run code while theNumber is less than or equal to 25
/*
while (theNumber < 25) {
    // incremement variable by one
    theNumber ++;
    // print variable to console
    console.log(theNumber);
}
*/

//theNumber = 26;

// run code while theNumber is less than or equal to 25
// code will run through once
/*
do {
    // incremement variable by one
    theNumber ++;
    // print variable to console
    console.log(theNumber);

} while (theNumber < 25)
*/

// run code while theNumber is less than or equal to 25
while (theNumber < 25) {
    // incremement variable by one
    theNumber ++;
    // test where number is divisible by 5
    if (theNumber % 5 ===0) {
        // skip to next iteration
        continue;
    }
    // print variable to console
    console.log(theNumber);
}