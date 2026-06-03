let scores = [10, 20, 30, 40, 50]

// Map
let doubleScores = scores.map(score => score * 2)
console.log(doubleScores) // [20, 40, 60, 80, 100]  

let scoreChecks = scores.map(score => score >= 30 ? "Pass" : "Fail");
console.log(scoreChecks) // ["Fail", "Fail", "Pass", "Pass", "Pass"]

// Filter
let highScores = scores.filter(score => score >= 30)
console.log(highScores) // [30, 40, 50]

// Reduce
let totalScore = scores.reduce((total, score) => total + score, 0)
console.log(totalScore) // 150

//flatMap
let nestedScores = [[10, 20], [30, 40], [50]]
let flatScores = nestedScores.flatMap(group => group)
console.log(flatScores) // [10, 20, 30, 40, 50]

