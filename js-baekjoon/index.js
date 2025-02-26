const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const mod = 796796;
const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + ((2 * dp[i - 2]) % mod);
}
console.log(dp[n]);
