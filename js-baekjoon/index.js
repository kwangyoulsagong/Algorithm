const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);

const findTheVPS = (arr) => {
  let balance = 0;
  for (const value of arr) {
    if (value === "(") balance++;
    else {
      if (balance === 0) return "NO"; // 닫는 괄호가 더 많아지는 순간 NO
      balance--;
    }
  }
  return balance === 0 ? "YES" : "NO"; // 모든 괄호가 짝이 맞으면 YES
};

for (let i = 0; i < n; i++) {
  console.log(findTheVPS(input[i].split("")));
}
