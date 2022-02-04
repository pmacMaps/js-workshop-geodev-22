// show multiple conditions being true
const validateAddress = (address, city, state, zip) => {
    // expect Pennsylvania as state
    const pa = 'PA';
    // mock-up of array containing zip codes in Pennsylvania
    const zipcodes = ['15106', '17025', '18001', '15201'];    
    // test valid data entry
    if ((state.toLowerCase() === pa.toLowerCase()) && (zipcodes.includes(zip))) {
        console.log(`${address}, ${city}, ${state}, ${zip} is a valid address`);
        // do something else
    } else {
        console.log('address is invalid!');
    }
}
// validate address
validateAddress('3525 Liberty Ave', 'Pittsburgh', 'PA', '15201');
validateAddress('123 Main Street', 'Some City', 'WI', '12345');

// show either condition being true
const testBrowser = (browser) => {
    if (browser === 'IE' || browser === 'Opera') {
        console.log('your browser is unsupported');
    }
}
// call function
testBrowser('IE'); // 'Opera'

// show testing for not true
const getLoginStatus = (status) => {
    if (status !== 'logged-in') {
        console.log('Please sign in');
    } else {
        console.log('Welcome back!');
    }
}
// call function
getLoginStatus('logged-in'); // 'annoymous'