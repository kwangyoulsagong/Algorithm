const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
let end = 0;
let count = 0;
for (let i = 0; i < n; i++) {
  if (end <= arr[i][0]) {
    count++;
    end = arr[i][1];
  }
}
console.log(count);
