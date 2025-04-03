const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [a, b] = input.shift().split(" ").map(Number);
let A = a,
  B = b;
while (a % b !== 0) {
  let n = a % b;
  if (n != 0) {
    a = b;
    b = n;
  }
}
console.log(b);
console.log((A * B) / b);
