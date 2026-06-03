let fruits = []; //empty array
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
let mixed = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

console.log(fruits); // Output: []

names[0] = "David"; // Modifying an element in the array

console.log(numbers[0]);    // Output: 1
console.log(names[1]);      // Output: Bob
console.log(names.length);  // Output: 3

console.log(names[names.length - 1]); // Output: Charlie
console.log(names.at(-1)); // Output: Charlie (using at() method to access the last element)
console.log(names.at(-2)); // Output: Bob (using at() method to access the second to last element)
console.log(names.at(-4)); // Output: undefined (index out of bounds)
console.log(names[3]);      // Output: undefined (index out of bounds)

console.log(typeof fruits); // Output: object (arrays are a type of object in JavaScript)
console.log(Array.isArray(fruits)); // Output: true (checks if it's an array)
console.log(Array.isArray({})); // Output: false (not an array)
console.log(Array.isArray("Hello")); // Output: false (not an array)

console.log(mixed); // Output: [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]]
console.log(mixed[5].name); // Output: John (accessing object property)
console.log(mixed[6][1]); // Output: 2 (accessing nested array element)

