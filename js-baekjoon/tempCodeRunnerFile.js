const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const z = Math.floor((100 * k) / n);
let left = 0;
let right = n;
let res = 0;
if (z >= 99) {
  console.log(-1);
}
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (Math.floor((100 * (k + mid)) / n + mid) > z) {
    res = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
console.log(res);
