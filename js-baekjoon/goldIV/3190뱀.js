const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = parseInt(input.shift());
const k = parseInt(input.shift());
const map = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const info = [];
for (let i = 0; i < k; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  map[x][y] = 1;
}
for (let i = k + 1; i < input.length; i++) {
  const [time, dir] = input[i].split(" ");
  info.push([parseInt(time), dir]);
}
let t = 0;
let direction = 0;
const checkDir = (dir) => {
  if (dir == "L") {
    return (direction + 3) % 4;
  } else {
    return (direction + 1) % 4;
  }
};

const bfs = () => {
  let x = 1;
  let y = 1;
  const queue = [[x, y]];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  map[x][y] = 2;
  while (true) {
    const newx = x + dx[direction];
    const newy = y + dy[direction];
    if (
      newx > 0 &&
      newy > 0 &&
      newx < n + 1 &&
      newy < n + 1 &&
      map[newx][newy] !== 2
    ) {
      if (map[newx][newy] == 0) {
        const [tailX, tailY] = queue.shift();
        map[tailX][tailY] = 0;
      }
      queue.push([newx, newy]);

      map[newx][newy] = 2;
    } else {
      t++;
      break;
    }
    t++;
    const found = info.find(([time, _]) => time == t);
    if (found) {
      const [_, dir] = found;
      const value = checkDir(dir);
      direction = value;
    }
    x = newx;
    y = newy;
  }
};

bfs();
console.log(t);
