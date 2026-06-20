let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c) // [1, 2, 3, 4] concatenates arrays a and b into a new array c   


let d = [...a, ...b]; // Using spread operator to concatenate arrays a and b into a new array d
console.log(d) // [1, 2, 3, 4] concatenates arrays a and b into a new array d using spread operator


//join two arrays and add an element in between
let s = ["Pass", "Fail"].join(" or ");
console.log(s) // "Pass or Fail" joins the elements of the array with " or " in between them
