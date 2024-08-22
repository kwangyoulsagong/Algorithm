const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (t) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${t} * ${i} = ${t * i}`);
  }
};
const [t] = input[0].split(" ").map(Number);
solution(t);
