const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const N = Number(input[0]);
const lectures = input.slice(1).map((line) => line.split(" ").map(Number));
const startTime = lectures.map((l) => l[1]).sort((a, b) => a - b);
const endTime = lectures.map((l) => l[2]).sort((a, b) => a - b);
let i = 0;
let j = 0;
let rooms = 0;
let maxRooms = 0;

while (i < N) {
  if (startTime[i] >= endTime[j]) {
    rooms--;
    j++;
  } else {
    i++;
    rooms++;
  }
  maxRooms = Math.max(maxRooms, rooms);
}
console.log(maxRooms);
