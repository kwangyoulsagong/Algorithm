const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [t] = input.shift().split(" ").map(Number);

const findThePeople = (floor, number) => {
  const dp = Array.from({ length: floor + 1 }, () => Array(number).fill(0));
  for (let i = 0; i < number; i++) {
    dp[0][i] = i + 1;
  }
  for (let i = 0; i < floor + 1; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < floor + 1; i++) {
    for (let j = 1; j < number; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[floor][number - 1];
};

for (let i = 0; i < t; i++) {
  const [floor] = input.shift().split(" ").map(Number);
  const [number] = input.shift().split(" ").map(Number);
  const result = findThePeople(floor, number);
  console.log(result);
}
