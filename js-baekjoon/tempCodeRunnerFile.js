const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");
const inputNum = [];

let count = 0;
const result = [];
for (let i = 0; i < 2; i++) {
  inputNum.push(input[count++].split(" ").join(" "));
  const name = [];
  const value = [];

  for (let j = 0; j < Number(inputNum[i]); j++) {
    name.push(input[count++].split(" ").join(" "));
  }
  for (let k = 0; k < 2 * inputNum[i] - 1; k++) {
    const [a, b] = input[count++].split(" ");
    value.push(a);
  }
  value.sort();
  for (let n = 0; n < value.length; n++) {
    if (value[n] != value[n + 1] && value[n - 1] != value[n]) {
      result.push(name[value[n] - 1]);
    }
  }
}
for (let i = 0; i < result.length; i++) {
  console.log(`${i + 1} ${result[i]}`);
}
