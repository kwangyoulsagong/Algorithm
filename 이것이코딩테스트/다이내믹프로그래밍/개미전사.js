const dp = Array(100).fill(0);
const n = 4;
const arr = [1, 3, 1, 5];
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);
const count = (n) => {
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }
  return dp[n - 1];
};
console.log(count(n));
