const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const time = input.map((v) => v.split(" ").map(Number));
const timeArr = [];
for (let i = 0; i < n; i++) {
  const [s, e] = time[i];
  timeArr.push([s, 1]);
  timeArr.push([e, -1]);
}
timeArr.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
let result = 0;
let count = 0;
timeArr.forEach((v) => {
  count += v[1];
  result = Math.max(result, count);
});
console.log(result);
