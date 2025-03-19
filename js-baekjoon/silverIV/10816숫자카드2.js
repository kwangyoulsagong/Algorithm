const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const findArr = input[1].split(" ").map(Number);
const [t] = input[2].split(" ").map(Number);
const targetArr = input[3].split(" ").map(Number);
findArr.sort((a, b) => a - b);
const lowerBound = (num, findArr) => {
  let start = 0;
  let end = findArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (findArr[mid] >= num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const upperBound = (num, findArr) => {
  let start = 0;
  let end = findArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (findArr[mid] > num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
const result = targetArr.map(
  (num) => upperBound(num, findArr) - lowerBound(num, findArr)
);
console.log(result.join(" "));
