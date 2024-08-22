const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (a, b) => {
  return a + b;
};
const [t] = input.shift().split(" ").map(Number);
for (let i = 0; i < t; i++) {
  const [a, b] = input.shift().split(" ").map(Number);
  console.log(solution(a, b));
}
