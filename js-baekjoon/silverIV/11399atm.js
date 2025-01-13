const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n] = input.shift(" ").split(" ").map(Number);
const map = input[0].split(" ").map(Number);

map.sort((a, b) => a - b);
let total = 0;
let prevTotal = 0;
for (const v of map) {
  total += prevTotal + v;
  prevTotal += v;
}
console.log(total);
