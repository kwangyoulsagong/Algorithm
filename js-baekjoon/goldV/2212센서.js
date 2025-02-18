const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const [k] = input.shift().split(" ").map(Number);
const map = input[0].split(" ").map(Number);
const diffArr = [];
map.sort((a, b) => a - b);
for (let i = 0; i < n - 1; i++) {
  diffArr[i] = map[i + 1] - map[i];
}
diffArr.sort((a, b) => a - b);
let sum = 0;
for (let j = 0; j < n - k; j++) {
  sum += diffArr[j];
}
console.log(sum);
