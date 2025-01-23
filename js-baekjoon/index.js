const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const minHeap = Array(m).fill(0);
const batteries = input[0].split(" ").map(Number);
batteries.sort((a, b) => b - a);
for (const v of batteries) {
  minHeap.sort((a, b) => a - b);
  minHeap[0] = minHeap[0] + v;
}
const result = Math.max(...minHeap);
console.log(result);
