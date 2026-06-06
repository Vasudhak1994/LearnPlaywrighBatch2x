let a = Array.isArray([1, 2, 3]);
console.log(a) // true

//every example 

let result = [80, 90, 89].every(score => score >= 60) // checks if every score is greater than or equal to 60
console.log(result) // true

//some example
let result1 = [80, 90, 78].some(score => score >= 60) // checks if at least one score is greater than or equal to 60
console.log(result1) // true