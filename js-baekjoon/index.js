const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const planet = input[0].split(" ").map(Number);
let answer = 0;
for (let i = n - 1; i >= 0; i--) {
  if (answer <= planet[i]) {
    answer = planet[i];
  } else {
    answer = Math.ceil(answer / planet[i]) * planet[i];
  }
}
console.log(answer);
