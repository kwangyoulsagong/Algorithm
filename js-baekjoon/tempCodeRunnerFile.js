const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);

const sang = [];
for (let i = 0; i < n; i++) {
  const [v] = input.shift();
  sang.push(parseInt(v));
}

const sun = [];
for (let i = 0; i < m; i++) {
  const [v] = input.shift();
  sun.push(parseInt(v));
}
const binary_search = (sang, sun, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sang[mid] == target && sun[mid] == target) {
      return true;
    } else if (sang[mid] > target && sun[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

let count = 0;
for (let i of sang) {
  if (binary_search(sang, sun, i, 0, n - 1)) {
    count += 1;
  }
}
console.log(count);
