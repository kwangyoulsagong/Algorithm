const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [h, w] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);
const twoPointer = (left, right, maxLeft, maxRight, heights) => {
  let answer = 0;
  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        answer += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        answer += maxRight - heights[right];
      }
      right--;
    }
  }
  return answer;
};
const solution = (heights) => {
  let left = 0;
  let right = w - 1;
  let maxLeft = 0;
  let maxRight = 0;
  return twoPointer(left, right, maxLeft, maxRight, heights);
};

console.log(solution(heights));
