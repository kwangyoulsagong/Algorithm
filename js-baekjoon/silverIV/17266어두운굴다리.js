const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [len] = input[0].split(" ").map(Number);
const arr = input[2].split(" ").map(Number);

let answer = 0;
let start = 0;
let end = len;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let isValid = true;

  let currentEnd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - mid > currentEnd) {
      isValid = false;
      break;
    }
    currentEnd = arr[i] + mid;
  }

  if (currentEnd < len) {
    isValid = false;
  }

  if (isValid) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);
