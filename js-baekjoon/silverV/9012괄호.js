const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const findTheVPS = (arr) => {
  let flag = "NO";
  let left = 0;
  let right = 0;
  for (const value of arr) {
    if (value === "(") left++;
    else {
      right++;
      if (left < right) {
        return "NO";
      }
    }
  }
  if (left === right) flag = "YES";
  return flag;
};
for (let i = 0; i < n; i++) {
  const arr = input[i].split("").map(String);
  const result = findTheVPS(arr);
  console.log(result);
}
