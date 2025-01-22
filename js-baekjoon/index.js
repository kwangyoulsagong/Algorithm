const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input);
const dp = Array(n + 1).fill(BigInt(0));

dp[0] = BigInt(0);
dp[1] = BigInt(1);

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());
