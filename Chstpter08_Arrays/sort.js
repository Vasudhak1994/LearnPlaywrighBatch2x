let fruits = ["Banana", "Apple", "Cherry", "Date"];

fruits.sort();
console.log(fruits) // ["Apple", "Banana", "Cherry", "Date"]

console.log("does not sort properly with numbers: Takes only first char for sorting");
let numbers = [10, 21, 2, 1, 100];
numbers.sort();
console.log(numbers) // [1, 10, 100, 2, 21] lexographical sort

console.log("Ascending sort:");
numbers.sort((a, b) => a - b);
console.log(numbers) // [1, 2, 10, 21, 100] numerical sort


console.log("Descending sort:");
numbers.sort((a, b) => b - a);
console.log(numbers) // [100, 21, 10, 2, 1] reverse numerical sort


let people = ["Alice", "Alex", "Abbie", "alexander"];
people.sort((a, b) => a.localeCompare(b));
console.log(people) // ["Abbie", "Alex", "Alice", "alexander"] case-sensitive sort