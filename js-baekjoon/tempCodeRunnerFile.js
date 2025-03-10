const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
const findGoodNum = (num, i) => {
  let start = i + 1;
  let end = n - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return true;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

let count = 0;
for (let i = 0; i < n; i++) {
  const target = arr[i];
  for (let j = 0; j < i; j++) {
    const num = target - arr[j];
    const result = findGoodNum(num, i);
    if (result) {
      count++;
      break;
    }
  }
}
console.log(count);
