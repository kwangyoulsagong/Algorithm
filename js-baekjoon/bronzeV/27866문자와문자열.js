const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const a = input[0];
console.log(a.substr(parseInt(input[1]) - 1, 1));
