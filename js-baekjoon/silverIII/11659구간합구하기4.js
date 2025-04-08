const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
for (let i = 1; i < n; i++) {
  arr[i] += arr[i - 1];
}

const calculatePrefixSum = (start, end) => {
  if (start - 2 === -1) return arr[end - 1];
  return arr[end - 1] - arr[start - 2];
};

for (let i = 0; i < m; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const result = calculatePrefixSum(start, end);
  console.log(result);
}
