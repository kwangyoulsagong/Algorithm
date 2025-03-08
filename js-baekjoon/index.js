const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
const findGoodNum = (num, i) => {
  let start = 0;
  let end = n - 1;
  let count = 0;
  while (start < end) {
    let sum = 0;
    if (start === i) {
      start++;
      continue;
    }

    if (end === i) {
      end--;
      continue;
    }

    sum = arr[start] + arr[end];
    if (sum === num) {
      count++;
      break;
    } else if (sum < num) {
      start++;
    } else {
      end--;
    }
  }
  return count;
};

let count = 0;
arr.forEach((cur, i) => {
  const result = findGoodNum(cur, i);
  if (result) count++;
});
console.log(count);
