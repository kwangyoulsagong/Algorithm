const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const map = [];
const viruses = [];
for (let i = 0; i < n; i++) {
  const arr = input.shift().split(" ").map(Number);
  map.push(arr);
  for (let j = 0; j < n; j++) {
    if (arr[j] !== 0) {
      viruses.push([i, j, arr[j], 0]);
    }
  }
}
const [t, x, y] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: n }, () => Array(k).fill(false));

viruses.sort((a, b) => a[2] - b[2]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (viruses.length > 0) {
  const [x, y, vir, time] = viruses.shift();
  if (time == t) break;
  for (let i = 0; i < 4; i++) {
    const newx = x + dx[i];
    const newy = y + dy[i];
    if (
      newx >= 0 &&
      newy >= 0 &&
      newx < n &&
      newy < k &&
      !visited[newx][newy] &&
      map[newx][newy] === 0
    ) {
      map[newx][newy] = vir;
      viruses.push([newx, newy, vir, time + 1]);
      visited[newx][newy] = true;
    }
  }
}
console.log(map[x - 1][y - 1]);
