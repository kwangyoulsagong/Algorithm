const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);

const map = input.map((v) => v.split("").map(String));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const water = [];
const bfs = (startx, starty, map, water) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  console.log(water);
  visited[startx][starty] = 0;
  const queue = [[startx, starty]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const [wx, wy] = water.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < n &&
        visited[newx][newy] == 0
      ) {
        if (map[newx][newy] === "D") {
          visited[newx][newy] = visited[x][y] + 1;
          return visited[newx][newy];
        }
        if (map[newx][newy] !== "*" && map[newx][newy] !== "X") {
          visited[newx][newy] = visited[x][y] + 1;
          queue.push([newx, newy]);
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      const newx = wx + dx[i];
      const newy = wy + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < n &&
        map[newx][newy] == "."
      ) {
        map[newx][newy] = "*";
        water.push([newx, newy]);
      }
    }
  }
  return "KAKTUS";
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] == "*") {
      water.push([i, j]);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === "S") {
      const result = bfs(i, j, map, water);
      console.log(result);
    }
  }
}
