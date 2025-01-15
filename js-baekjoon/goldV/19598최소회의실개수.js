const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const time = input.map((v) => v.split(" ").map(Number));
const timeArr = [];
for (let i = 0; i < n; i++) {
  const [start, end] = time[i];
  timeArr.push([start, 1]);
  timeArr.push([end, -1]);
}
timeArr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
let room = 0;
let max = 0;
for (let [_, value] of timeArr) {
  room += value;
  max = Math.max(max, room);
}
console.log(max);

// const startArr = time.map((t) => ({
//   time: t[0],
//   isStart: 1,
// }));
// const endArr = time.map((t) => ({
//   time: t[1],
//   isStart: -1,
// }));
// const sortTime = [...startArr, ...endArr].sort((a, b) =>
//   a.time === b.time ? a.isStart - b.isStart : a.time - b.time
// );
// let count = 0;
// let rooms = 0;
// for (let a of sortTime) {
//   count += a.isStart;
//   rooms = Math.max(rooms, count);
// }
// console.log(rooms);
