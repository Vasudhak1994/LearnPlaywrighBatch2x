console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2: API response received");
}, 2000);

console.log("Test 3: moving to next test");

// **Why does Test 3 print before Test 2?** its due to the asynchronous nature of JavaScript. The setTimeout function is non-blocking, meaning it schedules the callback function to be executed after the specified delay (2000 milliseconds in this case) and immediately moves on to execute the next line of code. Therefore, "Test 3: moving to next test" is printed before "Test 2: API response received".s