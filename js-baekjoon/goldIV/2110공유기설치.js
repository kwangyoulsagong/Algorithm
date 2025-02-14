const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [nm, ...rest] = input;
let [N, C] = nm.split(" ").map(Number);
const arr = rest.map(Number);
arr.sort((a, b) => a - b);

let start = 1;
let end = arr[N - 1] - arr[0];
let result = 0;
while (start <= end) {
  let prevLocate = arr[0];
  let count = 1;
  const mid = Math.floor((start + end) / 2);
  for (const value of arr) {
    if (value - prevLocate >= mid) {
      count++;
      prevLocate = value;
    }
  }
  if (count >= C) {
    result = Math.max(result, mid);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
