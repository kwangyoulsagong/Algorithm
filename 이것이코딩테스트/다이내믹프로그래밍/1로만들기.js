const dp = Array(100).fill(0);
const fibo = (n) => {
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 5 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 5] + 1);
    }
  }
  return dp[n];
};

console.log(fibo(26));
