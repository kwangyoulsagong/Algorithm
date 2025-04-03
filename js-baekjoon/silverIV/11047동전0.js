const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n, k] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
arr.sort((a, b) => b - a);
let count = 0;
while (k > 0) {
  const value = arr[0];
  if (k >= value) {
    k -= value;
    count++;
  } else {
    arr.shift();
  }
}
console.log(count);
