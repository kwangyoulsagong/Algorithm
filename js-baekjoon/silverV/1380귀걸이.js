const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");

let count = 0;
const result = [];
let n = 1;
while (n) {
  n = parseInt(input[count++]);

  const name = [];
  const value = [];

  for (let j = 0; j < n; j++) {
    name.push(input[count++].split(" ").join(" "));
  }
  for (let k = 0; k < 2 * n - 1; k++) {
    const [a, b] = input[count++].split(" ");
    value.push(a);
  }
  value.sort();
  for (let n = 0; n < value.length; n++) {
    if (value[n] != value[n + 1] && value[n - 1] != value[n]) {
      result.push(name[value[n] - 1]);
      break;
    }
  }
}
for (let i = 0; i < result.length; i++) {
  console.log(`${i + 1} ${result[i]}`);
}
