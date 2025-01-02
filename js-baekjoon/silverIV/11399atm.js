const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b); // 정렬
let result = 0;
let previous = 0;
for (let value of arr) {
  // 현재 사람의 대기 시간을 더함
  result += previous + value;
  // 현재 사람의 대기 시간을 더함
  previous += value;
}
console.log(result);
