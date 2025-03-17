const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, c] = input.shift().split(" ").map(Number);
let arr = input.map(Number);
arr.sort((a, b) => a - b);
let left = 1;
let right = arr[n - 1] - arr[0];
let result = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 1;
  let prevLocate = arr[0];
  for (const x of arr) {
    if (x - prevLocate >= mid) {
      prevLocate = x;
      cnt++;
    }
  }
  if (cnt >= c) {
    left = mid + 1;
    result = Math.max(result, mid);
  } else {
    right = mid - 1;
  }
}
console.log(result);
