const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
let map = input.map((v) => v.split(" ").map(Number));
let level = 2;
let time = 0;
let eatCount = 0;
let x = 0;
let y = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 9) {
      x = i;
      y = j;
      map[i][j] = 0;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (startx, starty) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue = [[startx, starty, 0]];
  visited[startx][starty] = true;
  const fish = [];
  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < n &&
        !visited[newx][newy] &&
        map[newx][newy] <= level
      ) {
        queue.push([newx, newy, dist + 1]);
        visited[newx][newy] = true;
        if (map[newx][newy] > 0 && map[newx][newy] < level) {
          fish.push([dist + 1, newx, newy]);
        }
      }
    }
  }
  fish.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return a[2] - b[2];
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return fish.length ? fish[0] : null;
};

while (true) {
  const nextFish = bfs(x, y);
  if (!nextFish) break;
  const [dist, nextx, nexty] = nextFish;
  x = nextx;
  y = nexty;
  time += dist;
  map[nextx][nexty] = 0;
  eatCount++;
  if (eatCount === level) {
    level++;
    eatCount = 0;
  }
}
console.log(time);
