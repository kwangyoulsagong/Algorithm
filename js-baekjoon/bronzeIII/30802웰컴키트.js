const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const [t, p] = input[0].split(" ").map(Number);

let sum = 0;

for (const value of arr) {
  let tmp = 0;
  if (value % t === 0) tmp = Math.floor(value / t);
  else tmp = Math.floor(value / t + 1);
  sum += tmp;
}
console.log(sum);
console.log(Math.floor(n / p), Math.floor(n % p));
