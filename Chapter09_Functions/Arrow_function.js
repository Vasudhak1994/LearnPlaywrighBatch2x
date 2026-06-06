const greet = function (name) {
    return (`Hello, ${name}!`);
}

const greetArrow = (name) => name;

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetArrow("Alice")); // Output: Alice

const doubleIt = num => num * 2;

console.log(doubleIt(5)); // Output: 10

const printName = name => console.log(name);
printName("Bela"); // Output: Bela