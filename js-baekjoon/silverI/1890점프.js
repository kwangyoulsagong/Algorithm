const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, ...rest] = input;
const [N] = n.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));
const dp = Array.from({ length: N }, () => Array(N).fill(BigInt(0)));

dp[0][0] = BigInt(1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 0) continue;
    const value = map[i][j];
    if (j + value < N) {
      dp[i][j + value] = dp[i][j + value] + dp[i][j];
    }
    if (i + value < N) {
      dp[i + value][j] = dp[i + value][j] + dp[i][j];
    }
  }
}
console.log(dp[N - 1][N - 1].toString());
