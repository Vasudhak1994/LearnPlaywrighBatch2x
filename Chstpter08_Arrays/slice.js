let number = [10, 20, 30, 40, 50];
let slicedNumbers = number.slice(1, 4); // 1,4 is telling the index to start from 1 and end at 4 (4 is exclusive)
console.log(slicedNumbers) // [20, 30, 40] slice from index 1 to 3 (4 is exclusive)



number.slice(2) // slice from index 2 to the end of the array
console.log(number.slice(2)) // [30, 40, 50]
number.slice(-3) // slice from the end of the array, -3 means start from the third last element
console.log(number.slice(-3)) // [30, 40, 50]
number.slice(0, -2) // slice from index 0 to the second last element
console.log(number.slice(0, -2)) // [10, 20, 30] slice from index 0 to the second last element (40 and 50 are excluded)