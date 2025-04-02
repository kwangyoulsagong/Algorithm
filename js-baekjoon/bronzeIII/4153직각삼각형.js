const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let index = 0;

const findTheTriangle = (a, b, c) => {
  const check = a * a + b * b;
  if (check === c * c) console.log("right");
  else console.log("wrong");
};

while (true) {
  const [a, b, c] = input[index]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a == 0 && b == 0 && c == 0) break;
  findTheTriangle(a, b, c);
  index++;
}
