const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (a, b) => {
  return a + b;
};

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(solution(a, b));
}
