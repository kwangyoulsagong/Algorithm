const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift(" ").split(" ").map(Number);
const [apple] = input.shift().split(" ").map(Number);
const map = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 0; i < apple; i++) {
  const [x, y] = input.shift().split(" ").map(Number);
  map[x][y] = 1;
}
const [dir] = input.shift().split(" ").map(Number);
const directions = input.map((v) => v.split(" ").map(String));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const checkDir = (route, dir) => {
  if (route === "L") {
    return (dir + 3) % 4;
  } else {
    return (dir + 1) % 4;
  }
};

function bfs(map, directions, n, time) {
  let dir = 0;
  let x = 1;
  let y = 1;
  const queue = [[x, y]];
  map[x][y] = 2;
  while (true) {
    time++;
    const newx = x + dx[dir];
    const newy = y + dy[dir];
    if (
      newx >= 1 &&
      newy >= 1 &&
      newx <= n &&
      newy <= n &&
      map[newx][newy] !== 2
    ) {
      if (map[newx][newy] === 0) {
        const [tailx, taily] = queue.shift();
        map[tailx][taily] = 0;
      }
      queue.push([newx, newy]);
      map[newx][newy] = 2;
    } else {
      break;
    }

    const found = directions.find(([t, _]) => parseInt(t) === time);
    if (found) {
      const [_, route] = found;
      const value = checkDir(route, dir);
      dir = value;
    }
    x = newx;
    y = newy;
  }
  return time;
}

function Solution(map, directions, n) {
  let time = 0;

  console.log(bfs(map, directions, n, time));
}

Solution(map, directions, n);
