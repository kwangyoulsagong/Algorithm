const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift(" ").split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const startTime = arr.map((v) => v[1]).sort((a, b) => a - b);
const endTime = arr.map((v) => v[2]).sort((a, b) => a - b);

function solution(startTime, endTime, n) {
  let start = 0;
  let end = 0;
  let count = 0;
  let result = 0;
  while (start < n) {
    if (startTime[start] >= endTime[end]) {
      count--;
      end++;
    } else {
      start++;
      count++;
    }
    result = Math.max(result, count);
  }
  console.log(result);
}

solution(startTime, endTime, n);
