const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
let answer = 0;
for (let i = n - 1; i >= 0; i--) {
  if (answer < arr[i]) {
    answer = arr[i];
  } else {
    if (answer % arr[i] !== 0) {
      answer = Math.ceil(answer / arr[i]) * arr[i];
    }
  }
}
console.log(answer);
