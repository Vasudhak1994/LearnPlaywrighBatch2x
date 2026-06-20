// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");

// /This code uses the rest parameter (...results) to collect all extra arguments after suiteName
//  into an array. It then logs the suite name and the collected results array for each call.