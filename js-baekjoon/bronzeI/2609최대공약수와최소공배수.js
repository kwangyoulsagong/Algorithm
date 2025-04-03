const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [a, b] = input.shift().split(" ").map(Number);

const GCD = (a, b) => {
  if (b === 0) return a;
  return GCD(b, a % b);
};
console.log(GCD(a, b));
console.log((a * b) / GCD(a, b));
