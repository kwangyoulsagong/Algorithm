const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);
let closest = Infinity;
let result = [0, 0];

let start = 0;
let end = n - 1;
while (start < end) {
  let sum = arr[start] + arr[end];
  if (Math.abs(sum) < closest) {
    closest = Math.abs(sum);
    result[0] = arr[start];
    result[1] = arr[end];
  }
  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(result[0], result[1]);
