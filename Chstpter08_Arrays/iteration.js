let names = ["Alice", "Bob", "Charlie", "David"];

console.log("Using traditional for loop:");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("Using for...of loop:");

for (name of names) {
    console.log(name);
}

console.log("Using forEach method:");

names.forEach(name => console.log(name));

names.forEach((name, index) => {
    console.log(`${index}: ${name}`);
});



for (let index in names) {
    console.log(`${index}: ${names[index]}`);
}

