const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const timeSwapping = [];

for (const value of arr) {
  const [start, end] = value;
  timeSwapping.push([start, 1]);
  timeSwapping.push([end, -1]);
}

timeSwapping.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
let rooms = 0;
let maxRooms = 0;
for (const [_, value] of timeSwapping) {
  rooms += value;
  maxRooms = Math.max(maxRooms, rooms);
}
console.log(maxRooms);
