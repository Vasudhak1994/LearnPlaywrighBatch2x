//let browsers = [chrome, firefox, safari, edge]; // This will throw an error because the variables are not defined

// To fix this, we need to define the variables or use strings instead
let browsers = ["chrome", "firefox", "safari", "edge"]; // This is the correct way to create an array of browser names
console.log(browsers); // Output: ["chrome", "firefox", "safari", "edge"]

// Another way to create an array is using the Array constructor
let moreBrowsers = new Array("opera", "brave", "vivaldi");
console.log(moreBrowsers); // Output: ["opera", "brave", "vivaldi"] 

// We can also create an array with a specific length using the Array constructor
let emptyArray = new Array(5);
console.log(emptyArray); // Output: [undefined, undefined, undefined, undefined, undefined]

// However, this creates an array with empty slots, not actual undefined values
console.log(emptyArray.length); // Output: 5
console.log(emptyArray[0]); // Output: undefined (but it's an empty slot, not an actual undefined value)    

let test = Array.of(1, 2, 3, 4, 5);
console.log(test); // Output: [1, 2, 3, 4, 5] (Array.of creates an array from the provided arguments)

let arrayFromString = Array.from("Hello");
console.log(arrayFromString); // Output: ["H", "e", "l", "l", "o"] (Array.from creates an array from an iterable, in this case, a string)

