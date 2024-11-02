const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = input.shift();

const days = input.map((v) => v.split(" ").map(Number));
const result = days[0]
  .map((value, index) => [value, days[1][index]])
  .sort((a, b) => a[1] - b[1]);
// const result = [];
// for (let i = 0; i < n; i++) {
//   result.push([days[0][i], days[1][i]]);
// }
// result.sort((a, b) => a[1] - b[1]);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += i * result[i][1] + result[i][0];
}

console.log(answer);
