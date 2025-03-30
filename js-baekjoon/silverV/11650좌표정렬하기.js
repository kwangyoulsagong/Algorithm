const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
arr.forEach((v) => {
  const [first, second] = v;
  console.log(first, second);
});
