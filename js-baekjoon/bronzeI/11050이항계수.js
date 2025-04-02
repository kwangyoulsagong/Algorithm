const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
let upper = 1;
let lower = 1;
for (let i = n; i > n - k; i--) {
  upper *= i;
}

for (let i = 1; i <= k; i++) {
  lower *= i;
}

console.log(Math.floor(upper / lower));
