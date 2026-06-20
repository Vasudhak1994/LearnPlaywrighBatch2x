let scores = [10, 20, 30, 40, 50]

// Map // creates a new array populated with the results of calling a provided function on every element in the calling array.s
let doubleScores = scores.map(score => score * 2)
console.log(doubleScores) // [20, 40, 60, 80, 100]  

let scoreChecks = scores.map(score => score >= 30 ? "Pass" : "Fail");
console.log(scoreChecks) // ["Fail", "Fail", "Pass", "Pass", "Pass"]

// Filter // creates a new array with all elements that pass the test implemented by the provided function.
let highScores = scores.filter(score => score >= 30)
console.log(highScores) // [30, 40, 50]

// Reduce // reduces the array to a single value by applying a function that takes an accumulator and the current element.
let totalScore = scores.reduce((total, score) => total + score, 0)
console.log(totalScore) // 150

//flatMap 
//maps each element to a new array and then flattens the result by one level in a single step.
//It’s like doing arr.map(...).flat() but more efficient and concise.
let nestedScores = [[10, 20], [30, 40], [50]]
let flatScores = nestedScores.flatMap(group => group)
console.log(flatScores) // [10, 20, 30, 40, 50]

