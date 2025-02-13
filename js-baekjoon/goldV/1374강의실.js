const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input[0]);
const lectures = input.slice(1).map((line) => line.split(" ").map(Number));

lectures.sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]));

const minHeap = [];
const addToHeap = (endTime) => {
  minHeap.push(endTime);
  let i = minHeap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (minHeap[i] >= minHeap[parent]) break;
    [minHeap[i], minHeap[parent]] = [minHeap[parent], minHeap[i]];
    i = parent;
  }
};
const popFromHeap = () => {
  const min = minHeap[0];
  const last = minHeap.pop();
  if (minHeap.length === 0) return min;
  minHeap[0] = last;
  let i = 0;
  while (true) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let smallest = i;
    if (left < minHeap.length && minHeap[left] < minHeap[smallest])
      smallest = left;
    if (right < minHeap.length && minHeap[right] < minHeap[smallest])
      smallest = right;
    if (smallest === i) break;
    [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
    i = smallest;
  }
  return min;
};

for (const [num, start, end] of lectures) {
  if (minHeap.length > 0 && minHeap[0] <= start) {
    popFromHeap();
  }
  addToHeap(end);
}

console.log(minHeap.length);
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");
// const N = Number(input[0]);
// const lectures = input.slice(1).map((line) => line.split(" ").map(Number));
// const startTime = lectures.map((l) => l[1]).sort((a, b) => a - b);
// const endTime = lectures.map((l) => l[2]).sort((a, b) => a - b);
// let i = 0;
// let j = 0;
// let rooms = 0;
// let maxRooms = 0;

// while (i < N) {
//   if (startTime[i] >= endTime[j]) {
//     rooms--;
//     j++;
//   } else {
//     i++;
//     rooms++;
//   }
//   maxRooms = Math.max(maxRooms, rooms);
// }
// console.log(maxRooms);
