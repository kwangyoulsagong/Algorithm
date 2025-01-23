const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));

let count = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

const dfs = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const newx = x + dx[i];
    const newy = y + dy[i];
    if (
      newx >= 0 &&
      newy >= 0 &&
      newx < n &&
      newy < m &&
      map[newx][newy] != 1 &&
      !visited[newx][newy]
    ) {
      dfs(newx, newy);
    }
  }
};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] != 1 && !visited[i][j]) {
      dfs(i, j);
      count += 1;
    }
  }
}
console.log(count);
