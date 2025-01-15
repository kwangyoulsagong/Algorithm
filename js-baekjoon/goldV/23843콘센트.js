// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");
// const [n, k] = input.shift().split(" ").map(Number);
// const arr = input[0].split(" ").map(Number);
// arr.sort((a, b) => b - a);
// const concent = Array.from({ length: k }, () => 0);

// for (let i = 0; i < n; i++) {
//   concent.sort((a, b) => a - b);
//   concent[0] += arr[i];
// }
// const result = Math.max(...concent);
// console.log(result);

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => b - a);
const concent = Array.from({ length: k }, () => 0);

for (let i = 0; i < n; i++) {
  let min = 0;
  for (let j = 1; j < k; j++) {
    if (concent[j] < concent[min]) {
      min = j;
    }
  }
  concent[min] += arr[i];
}
const result = Math.max(...concent);
console.log(result);
