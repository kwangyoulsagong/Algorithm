const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const queue = [[0, 0]];
visited[0][0] = true;
while (queue.length > 0) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const newx = x + dx[i];
    const newy = y + dy[i];
    if (
      newx >= 0 &&
      newy >= 0 &&
      newx < n &&
      newy < m &&
      !visited[newx][newy] &&
      map[newx][newy] != 0
    ) {
      map[newx][newy] = map[x][y] + 1;
      queue.push([newx, newy]);
      visited[newx][newy] = true;
    }
  }
}

console.log(map[n - 1][m - 1]);
