const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const [k] = input[1].split(" ").map(Number);
const arr = input[2].split(" ").map(Number);
arr.sort((a, b) => a - b);
const depth = [];
for (let i = 0; i < n - 1; i++) {
  depth.push(arr[i + 1] - arr[i]);
}
depth.sort((a, b) => a - b);
let result = 0;
for (let i = 0; i < n - k; i++) {
  result += depth[i];
}
console.log(result);
