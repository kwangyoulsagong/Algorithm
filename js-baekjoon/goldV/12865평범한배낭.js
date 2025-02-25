const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [nk, ...rest] = input;
const [n, k] = nk.split(" ").map(Number);

const arr = rest.map((v) => v.split(" ").map(Number));

const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

const putBags = (i, w, v, k, dp) => {
  for (let j = 1; j <= k; j++) {
    if (j - w >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
    } else dp[i][j] = dp[i - 1][j];
  }
};

const solution = (n, k, arr, dp) => {
  for (let i = 1; i < n + 1; i++) {
    const [w, v] = arr.shift();
    putBags(i, w, v, k, dp);
  }
};
solution(n, k, arr, dp);

console.log(dp[n][k]);
