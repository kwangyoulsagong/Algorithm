const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const T = Number(input.shift());
let idx = 0;
const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (value == arr[mid]) {
      return 1;
    } else if (value > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
};
for (let t = 0; t < T; t++) {
  const v1 = Number(input[idx++]);
  const note1 = input[idx++].split(" ").map(Number);
  const v2 = Number(input[idx++]); // 수첩2 크기
  const note2 = input[idx++].split(" ").map(Number);
  note1.sort((a, b) => a - b);
  const result = note2.map((v) => binarySearch(note1, v));
  console.log(result.join("\n"));
}
