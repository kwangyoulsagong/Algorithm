const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const map = input.map((v) => v.split("").map(String));
let result = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const bfs = (startx, starty, target, visited) => {
  const queue = [[startx, starty]];
  visited[startx][starty] = true;
  const arr = [[startx, starty]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < 12 &&
        newy < 6 &&
        !visited[newx][newy] &&
        map[newx][newy] === target
      ) {
        queue.push([newx, newy]);
        arr.push([newx, newy]);
        visited[newx][newy] = true;
      }
    }
  }
  return arr;
};

const explosion = (arr) => {
  for (const [x, y] of arr) {
    map[x][y] = ".";
  }
};

const drop = () => {
  const queue = [];

  for (let j = 0; j < 6; j++) {
    for (let i = 11; i >= 0; i--) {
      if (map[i][j] !== ".") {
        queue.push(map[i][j]);
        map[i][j] = ".";
      }
    }
    for (let i = 11; i >= 0; i--) {
      if (queue.length > 0) {
        const target = queue.shift();
        map[i][j] = target;
      }
    }
  }
};
while (true) {
  let expload = false;
  const visited = Array.from({ length: 12 }, () => Array(6).fill(false));
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (map[i][j] != "." && !visited[i][j]) {
        const arr = bfs(i, j, map[i][j], visited);
        if (arr.length >= 4) {
          explosion(arr);
          expload = true;
        }
      }
    }
  }
  if (!expload) break;
  drop();
  result++;
}
console.log(result);
