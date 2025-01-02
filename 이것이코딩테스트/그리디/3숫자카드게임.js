const n = 2;
const m = 4;
const arr = [
  [7, 3, 1, 8],
  [3, 3, 3, 4],
  // [2, 2, 2],
];
const min = [];
for (let i = 0; i < n; i++) {
  min.push(Math.min(...arr[i]));
}
console.log(Math.max(...min));

let result = 0;
for (let i = 0; i < n; i++) {
  let minValue = 100000;
  for (let j = 0; j < m; j++) {
    if (arr[i][j] < minValue) {
      minValue = arr[i][j];
    }
  }

  if (minValue > result) {
    result = minValue;
  }
}
console.log(result);
let result1 = 0;
for (let value of arr) {
  result1 = Math.max(Math.min(...value));
}
console.log(result1);
