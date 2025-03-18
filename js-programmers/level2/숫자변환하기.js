function solution(x, y, n) {
  var answer = 0;
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    if (i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && i / 2 >= 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && i / 3 >= 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  answer = dp[y] === Infinity ? -1 : dp[y];
  return answer;
}
