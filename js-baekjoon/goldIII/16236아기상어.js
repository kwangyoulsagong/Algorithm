const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, ...rest] = input;
const [N] = n.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let eatCount = 0;
let weight = 2;
let sharkX, sharkY;
let time = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      sharkX = i;
      sharkY = j;
      map[i][j] = 0;
    }
  }
}
const bfs = (startx, starty) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[startx][starty] = true;
  const queue = [[startx, starty, 0]];
  let fishList = [];
  while (queue.length > 0) {
    let [x, y, dist] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < N &&
        newy < N &&
        !visited[newx][newy] &&
        map[newx][newy] <= weight
      ) {
        visited[newx][newy] = true;
        queue.push([newx, newy, dist + 1]);
        if (map[newx][newy] > 0 && map[newx][newy] < weight) {
          fishList.push([dist + 1, newx, newy]);
        }
      }
    }
  }
  fishList.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return a[2] - b[2];
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return fishList.length ? fishList[0] : null;
};

while (true) {
  let nextFish = bfs(sharkX, sharkY);
  if (!nextFish) break;
  const [dist, x, y] = nextFish;
  eatCount++;
  time += dist;
  map[x][y] = 0;
  sharkX = x;
  sharkY = y;
  if (eatCount === weight) {
    weight += 1;
    eatCount = 0;
  }
}
console.log(time);
