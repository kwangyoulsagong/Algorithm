const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const startTime = arr.map((v) => v[1]).sort((a, b) => a - b);
const endTime = arr.map((v) => v[2]).sort((a, b) => a - b);
const findMaxRooms = (startTime, endTime) => {
  let start = 0;
  let end = 0;
  let rooms = 0;
  let maxRooms = 0;
  while (start < endTime.length) {
    if (startTime[start] >= endTime[end]) {
      rooms--;
      end++;
    } else {
      rooms++;
      start++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  return maxRooms;
};

console.log(findMaxRooms(startTime, endTime));
