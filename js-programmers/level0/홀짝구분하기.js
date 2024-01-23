const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const isEven = (n) => {
  if (n % 2 == 0) {
    return `${n} is even`;
  } else {
    return `${n} is odd`;
  }
};
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  const result = isEven(n);
  console.log(result);
});
