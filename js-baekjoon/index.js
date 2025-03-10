const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let start = 0;
let end = n - 1;
let min = Infinity;
let x = 0;
let y = 0;
while (start < end) {
  let sum = arr[start] + arr[end];
  if (min > Math.abs(sum)) {
    min = Math.abs(sum);
    x = arr[start];
    y = arr[end];
  }
  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}
console.log(x, y);
