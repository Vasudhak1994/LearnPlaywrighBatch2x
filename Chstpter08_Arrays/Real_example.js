let browsers = ["chrome", "firefox", "safari", "edge"];
console.log(browsers.length); // Output: 4
browsers.pop(); // This will remove the last element from the array
console.log(browsers); // Output: ["chrome", "firefox", "safari"]

browsers.push("opera"); // This will add "opera" to the end of the array
console.log(browsers); // Output: ["chrome", "firefox", "safari", "opera"]

for (let i = 0; i < browsers.length; i++) {
    if (browsers[i] === "opera") {
        console.log(browsers[i]); // Output: "opera"
        console.log("Opera browser found!"); // Output: "Opera browser found!"
    }
}