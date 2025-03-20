const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const [k] = input[1].split(" ").map(Number);
const arr = input[2].split(" ").map(Number);
arr.sort((a, b) => a - b);

const differenceArr = [];
for (let i = 0; i < n - 1; i++) {
  const value = arr[i + 1] - arr[i];
  differenceArr.push(value);
}
differenceArr.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < n - k; i++) {
  sum += differenceArr[i];
}
console.log(sum);
