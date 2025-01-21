const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

for (let i in dp) {
  dp[0][i] = parseInt(i);
}

const n = input.shift().split(" ").map(Number);

for (let i = 1; i < 15; i++) {
  for (let j = 1; j < 15; j++) {
    dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
  }
}
for (let i = 0; i < n; i++) {
  const floor = input.shift().split(" ").map(Number);
  const num = input.shift().split(" ").map(Number);
  console.log(dp[floor][num]);
}
