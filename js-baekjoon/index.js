const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [len] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const [value] = input[2].split(" ").map(Number);

let answer = 0;
let start = 0;
let end = Math.max(...arr);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      sum += arr[i];
    } else {
      sum += mid;
    }
  }
  if (value >= sum) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
