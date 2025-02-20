const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

let good = { count: 0 };

const twoPointer = (i, target, arr, good) => {
  let start = 0;
  let end = n - 1;

  while (start < end) {
    if (start == i) {
      start++;
      continue;
    }
    if (end == i) {
      end--;
      continue;
    }
    let sum = arr[start] + arr[end];
    if (sum === target) {
      good.count++;
      break;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};

for (let i = 0; i < n; i++) {
  const target = arr[i];
  twoPointer(i, target, arr, good);
}

console.log(good.count);
