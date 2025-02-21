const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
const dp = Array(m + 1).fill(10001);
dp[0] = 0;
for (let i = 0; i < n; i++) {
  for (let j = arr[i]; j <= m; j++) {
    if (dp[j - arr[i]] !== 10001) {
      dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
    }
  }
}
if (dp[m] === 10001) {
  console.log(-1);
} else {
  console.log(dp[m]);
}
