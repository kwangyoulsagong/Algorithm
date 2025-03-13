const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const dp = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  const [day, cost] = arr[i];
  if (i + day > n) continue;
  dp[i] += cost;
  for (let j = i + day; j < n; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}
console.log(Math.max(...dp));
