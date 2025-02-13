const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, ...rest] = input;
const [N] = n.split(" ").map(Number);
const arr = rest[0].split(" ").map(Number);
arr.sort((a, b) => a - b);
const result = arr[Math.floor((N - 1) / 2)];
console.log(result);
