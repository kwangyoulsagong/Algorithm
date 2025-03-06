const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let min = Infinity;
let start = 0;
let end = 0;
let sum = 0;
while (end < n) {
  sum += arr[end];
  while (sum >= m) {
    min = Math.min(min, end - start + 1);
    sum -= arr[start];
    start++;
  }
  end++;
}
console.log(min === Infinity ? 0 : min);
