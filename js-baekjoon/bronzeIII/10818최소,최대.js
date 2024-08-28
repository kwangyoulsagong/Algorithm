const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [t] = input.shift().split(" ").map(Number);
const numbers = input[0].split(" ").map(Number);
console.log(Math.min(...numbers), Math.max(...numbers));
