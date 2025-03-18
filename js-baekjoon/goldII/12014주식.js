const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);

const solution = (day, k, arr) => {
  let lis = [];

  const binarySearch = (target) => {
    let start = 0;
    let end = lis.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (lis[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return start;
  };

  for (const value of arr) {
    if (lis.length === 0 || lis[lis.length - 1] < value) {
      lis.push(value);
    } else {
      const idx = binarySearch(value);
      lis[idx] = value;
    }
  }

  return lis.length;
};

let resultStr = "";
for (let i = 0; i < n; i++) {
  const [day, k] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const result = solution(day, k, arr);
  resultStr += `Case #${i + 1}\n${result >= k ? 1 : 0}\n`;
}

console.log(resultStr);
