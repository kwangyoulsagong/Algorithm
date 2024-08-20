const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (t) => {
  for (let i = 0; i <= t; i++) {
    console.log("*".repeat(i));
  }
};
const [t] = input[0].split(" ").map(Number);
solution(t);
