const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const queue = [[0, 0]];
const bfs = () => {
  while (queue.length) {
    const [x, y] = queue.shift();
    console.log(x, y);
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < m &&
        map[newx][newy] == 1
      ) {
        map[newx][newy] = map[newx][newy] + map[x][y];
        queue.push([newx, newy]);
      }
    }
  }
};

bfs();
console.log(map[n - 1][m - 1]);
