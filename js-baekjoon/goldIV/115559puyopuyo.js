const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const map = input.map((v) => v.split("").map(String));
const visited = Array.from({ length: 12 }, () => Array(6).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (startx, starty, color) => {
  const count = [];
  const queue = [[startx, starty]];
  visited[startx][starty] = true;
  count.push([startx, starty]);
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
        !visited[newx][newy]
      ) {
        if (map[newx][newy] == color) {
          count.push([newx, newy]);
          queue.push([newx, newy]);
          visited[newx][newy] = true;
        }
      }
    }
  }
  return count;
};

const removeBlocks = (count) => {
  for (const [x, y] of count) {
    map[x][y] = ".";
  }
};
const drop = () => {
  for (let j = 0; j < 6; j++) {
    const stack = [];
    for (let i = 11; i >= 0; i--) {
      if (map[i][j] != ".") {
        stack.push(map[i][j]);
      }
    }
    for (let i = 11; i >= 0; i--) {
      if (stack.length > 0) {
        map[i][j] = stack.shift();
      } else {
        map[i][j] = ".";
      }
    }
  }
};
let result = 0;

while (true) {
  let exploded = false;
  visited.forEach((row) => row.fill(false));
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (map[i][j] != "." && visited[i][j] != true) {
        const count = bfs(i, j, map[i][j]);
        if (count.length >= 4) {
          exploded = true;
          removeBlocks(count);
        }
      }
    }
  }
  if (!exploded) break;
  drop();
  result++;
}
console.log(result);
