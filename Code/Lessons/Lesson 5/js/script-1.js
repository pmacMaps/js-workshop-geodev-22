'use strict';

// reduce number of decimals to two
const reduceNumberDecimals = (data, decimals) => {
    return data.toFixed(decimals);
}

// function returns a value, so we assign it to a variable
const result = reduceNumberDecimals(40.1453674, 3)
// print output of function to console
console.log(result);

// print business and address to console
const displayData = (business, address)  => {
    console.log(`${business} is located at ${address}`);
    // this variable is only accessible within function scope
    //const otherBusiness = 'Burger Yum';
    //console.log(otherBusiness);
}

// call function
displayData('Broad Street Market', '1233 N 3rd St, Harrisburg, PA 17102');

//displayData(otherBusiness, '400 North 2nd Street');