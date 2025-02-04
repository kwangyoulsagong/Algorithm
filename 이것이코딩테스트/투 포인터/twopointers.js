const n = 5;
const m = 5;
const data = [1, 2, 3, 2, 5];
let count = 0;
let intervalSum = 0;
let end = 0;
for (let start = 0; start < n; start++) {
  while (intervalSum < m && end < n) {
    intervalSum += data[end];
    end += 1;
  }
  if (intervalSum == m) {
    count += 1;
  }
  intervalSum -= data[start];
}
console.log(count);
