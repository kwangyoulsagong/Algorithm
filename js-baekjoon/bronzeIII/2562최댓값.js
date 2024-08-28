const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const numbers = input.map(Number);
const max = Math.max(...numbers);
console.log(max);
console.log(numbers.indexOf(max) + 1);
