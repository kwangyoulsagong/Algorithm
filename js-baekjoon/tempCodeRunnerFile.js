const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const startTime = arr.map((v) => v[0]).sort((a, b) => a - b);
const endTime = arr.map((v) => v[1]).sort((a, b) => a - b);

let start = 0;
let end = 0;
let count = 0;
let result = 0;
while (start < n) {
  if (startTime[start] >= endTime[end] + 10) {
    end++;
    count--;
  } else {
    start++;
    count++;
  }
  result = Math.max(count, count);
}
console.log(result);
