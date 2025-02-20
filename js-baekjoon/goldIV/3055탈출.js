const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(String));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const water = [];
let start = null;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "S") start = [i, j];
    if (map[i][j] == "*") water.push([i, j]);
  }
}
const bfs = (startx, starty, water, map) => {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[startx][starty] = false;
  const queue = [
    ...water.map(([x, y]) => [x, y, "water"]),
    [startx, starty, "gosumdochi", 0],
  ];

  while (queue.length > 0) {
    const [x, y, type, time] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (newx >= 0 && newy >= 0 && newx < n && newy < m) {
        if (type === "water" && map[newx][newy] === ".") {
          map[newx][newy] = "*";
          queue.push([newx, newy, type]);
        } else if (type === "gosumdochi" && !visited[newx][newy]) {
          if (map[newx][newy] === "D") {
            return time + 1;
          }
          if (map[newx][newy] === ".") {
            queue.push([newx, newy, type, time + 1]);
            visited[newx][newy] = true;
          }
        }
      }
    }
  }
  return "KAKTUS";
};
console.log(bfs(start[0], start[1], water, map));
