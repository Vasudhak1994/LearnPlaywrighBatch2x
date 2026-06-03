let names = ["Alice", "Bob", "Charlie"];

names.push("David"); // Adds "David" to the end of the array
console.log(names); // Output: ["Alice", "Bob", "Charlie", "David"]

names.unshift("Eve"); // Adds "Eve" to the beginning of the array
console.log(names); // Output: ["Eve", "Alice", "Bob", "Charlie", "David"]

names.pop(); // Removes the last element ("David") from the array
console.log(names); // Output: ["Eve", "Alice", "Bob", "Charlie"]

names.shift(); // Removes the first element ("Eve") from the array
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

names.push("Frank", "Grace"); // Adds "Frank" and "Grace" to the end of the array
console.log(names); // Output: ["Alice", "Bob", "Charlie", "Frank", "Grace"]

names.unshift("Heidi", "Ivan"); // Adds "Heidi" and "Ivan" to the beginning of the array
console.log(names); // Output: ["Heidi", "Ivan", "Alice", "Bob", "Charlie", "Frank", "Grace"]

names.slice(2, 4); // Removes elements from index 2 to 3 (Alice and Bob)
console.log(names); // Output: ["Heidi", "Ivan", "Charlie", "Frank", "Grace"]

names.splice(1, 0, "Judy"); // Inserts "Judy" at index 1 without removing any elements
console.log(names); // Output: ["Heidi", "Judy", "Ivan", "Charlie", "Frank", "Grace"]

names.splice(1, 2, "Karl", "louis"); // Removes 2 elements starting from index 1 and inserts "Karl" and "Louis"
console.log(names); // Output: ["Heidi", "Karl", "Louis", "Charlie", "Frank", "Grace"]

