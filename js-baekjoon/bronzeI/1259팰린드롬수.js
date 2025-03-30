const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const isPalindrome = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") break;
  console.log(isPalindrome(input[i]) ? "yes" : "no");
}
