const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
findTheProfits = (n, arr) => {
  let maxValue = 0;
  let profits = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (maxValue < arr[i]) maxValue = arr[i];
    else if (maxValue > arr[i]) profits += maxValue - arr[i];
  }
  return profits;
};

for (let i = 0; i < n; i++) {
  const [m] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const profits = findTheProfits(m, arr);
  console.log(profits);
}
