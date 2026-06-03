let results = ["Pass", "Fail", "error", "blocked", "pass", "defectFound"];

results.indexOf("error"); // 2

console.log(results.lastIndexOf("pass")); // 4

results.includes("blocked"); // true

results.includes("blocked", 4); // false

results.includes("hdferg");

let numbers = [1, 2, 3, 4, 5];

numbers.find(x => x > 3); // 4

numbers.findIndex(x => x > 3); // 3
numbers.find(x => x > 5); // undefined
numbers.findIndex(x => x > 5); // -1

numbers.findlast(x => x > 3); // 5
numbers.findlastIndex(x => x > 3); // 4
numbers.findlast(x => x > 5); // undefined
numbers.findlastIndex(x => x > 5); // -1



