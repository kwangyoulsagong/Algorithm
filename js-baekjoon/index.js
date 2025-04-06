const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n] = input.shift().split(" ").map(Number);
const count123Addition = (value) => {
  const dp = Array(value + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i < value + 1; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  return dp[value];
};
for (let i = 0; i < n; i++) {
  const [value] = input[i].split(" ").map(Number);
  const result = count123Addition(value);
  console.log(result);
}
