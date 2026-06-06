function greet(name) {

    return (`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
//no output because the function returns a string but we are not printing it

console.log(greet("Alice")); // Output: Hello, Alice! because we are printing the return value of the function