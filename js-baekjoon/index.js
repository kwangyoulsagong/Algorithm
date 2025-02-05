const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [nm, ...rest] = input;
const [n, m] = nm.split(" ").map(Number);
const arr = rest[0].split(" ").map(Number);
let end = 0;
let interval_sum = 0;
let count = 0;
for (let i = 0; i < n; i++) {
  while (end < n && interval_sum < m) {
    interval_sum += arr[end];
    end++;
  }
  if (interval_sum === m) {
    count++;
  }
  interval_sum -= arr[i];
}
console.log(count);
