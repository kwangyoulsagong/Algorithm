const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

const findMaxWeight = (w, v, i) => {
  for (let j = 1; j < k + 1; j++) {
    if (j - w >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
};

for (let i = 1; i < n + 1; i++) {
  const [w, v] = arr[i - 1];
  findMaxWeight(w, v, i);
}
console.log(dp[n][k]);
