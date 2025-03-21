const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
arr.sort((a, b) => a - b);
let start = 1;
let end = arr[n - 1] - arr[0];
let result = 0;
while (start <= end) {
  let count = 1;
  const mid = Math.floor((start + end) / 2);
  let startHouse = arr[0];
  for (const house of arr) {
    if (house - startHouse >= mid) {
      startHouse = house;
      count++;
    }
  }

  if (count >= m) {
    result = Math.max(result, mid);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
