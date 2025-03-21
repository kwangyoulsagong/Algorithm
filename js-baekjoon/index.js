const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const batteries = Array(m).fill(0);
arr.sort((a, b) => b - a);
for (let i = 0; i < n; i++) {
  batteries.sort((a, b) => a - b);
  batteries[0] += arr[i];
}

console.log(Math.max(...batteries));
