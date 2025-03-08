const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i < n + 1; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}
console.log(dp[n]);
