const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (a, b) => {
  return a + b;
};
let i = 0;
for (;;) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a == 0 && b == 0) break;
  console.log(solution(a, b));
  i++;
}
