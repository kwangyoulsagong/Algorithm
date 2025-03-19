const { clear } = require("console");
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
function Solution(map, directions, n) {
  const bfs = (map, directions, n, time) => {
    let direction = 0;
    const queue = [[1, 1]];
    map[1][1] = 2;
    const checkDir = (dir) => {
      if (dir == "L") {
        return (direction + 3) % 4;
      } else {
        return (direction + 1) % 4;
      }
    };
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const newx = x + dx[direction];
      const newy = y + dy[direction];
      if (
        newx >= 1 &&
        newy >= 1 &&
        newx <= n &&
        newy <= n &&
        map[newx][newy] !== 2
      ) {
        if (map[newx][newy] === 0) {
          map[x][y] = 0;
        }
        queue.push([newx, newy]);
        map[newx][newy] = 2;
      } else {
        time++;
        break;
      }
      time++;
      const found = directions.find(([t, _]) => parseInt(t) === time);
      if (found) {
        const [_, dir] = found;
        const value = checkDir(dir);
        direction = value;
      }
    }
    return time;
  };
  let time = 0;
  console.log(bfs(map, directions, n, time));
}

Solution(map, directions, n);
