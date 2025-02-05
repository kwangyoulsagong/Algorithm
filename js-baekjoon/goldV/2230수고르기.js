const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [nm, ...rest] = input;
const [n, m] = nm.split(" ").map(Number);
const arr = rest.map(Number);
let start = 0;
let end = 0;
let interval_sum = 0;
arr.sort((a, b) => a - b);
let min = Infinity;
while (end < n) {
  interval_sum = arr[end] - arr[start];

  if (interval_sum >= m) {
    if (min > interval_sum) {
      min = interval_sum;
    }
    start++;
  } else {
    end++;
  }
}

console.log(min);
