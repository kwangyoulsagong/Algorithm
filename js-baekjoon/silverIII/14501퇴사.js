const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, ...rest] = input;
const [N] = n.split(" ").map(Number);
const arr = rest.map((v) => v.split(" ").map(Number));
const dp = Array(N + 1).fill(0);

// for (let i = 0; i < N; i++) {
//   const [days, cost] = arr[i];
//   if (i + days > N) continue;
//   dp[i] = dp[i] + cost;
//   for (let j = i + days; j < N; j++) {
//     dp[j] = Math.max(dp[j], dp[i]);
//   }
// }
// console.log(Math.max(...dp));

for (let i = 0; i < N; i++) {
  const [days, cost] = arr[i];
  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  if (i + days < N) {
    dp[i + days] = Math.max(dp[i + days], dp[i] + cost);
  }
}
console.log(Math.max(...dp));
