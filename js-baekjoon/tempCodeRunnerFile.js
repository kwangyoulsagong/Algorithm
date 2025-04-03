const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n] = input.shift().split(" ").map(Number);

let count = 0;
while (n >= 5) {
  count += n / 5;
  n /= 5;
}
console.log(count);
