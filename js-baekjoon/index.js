const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m, t] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(2).fill(false))
);
visited[0][0][0] = true;

const distance = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(2).fill(Infinity))
);
distance[0][0][0] = 0;
const queue = [[0, 0, 0]];
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const bfs = () => {
  while (queue.length > 0) {
    const [x, y, item] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (newx >= 0 && newy >= 0 && newx < n && newy < m) {
        const value = map[newx][newy];
        const newItem = item || value == 2 ? 1 : 0;
        if (
          !visited[newx][newy][newItem] &&
          (value == 0 || value == 2 || (value == 1 && item == 1))
        ) {
          visited[newx][newy][newItem] = true;
          distance[newx][newy][newItem] = distance[x][y][item] + 1;
          queue.push([newx, newy, newItem]);
        }
      }
    }
  }
};

bfs();
const resultWithoutWeapon = distance[n - 1][m - 1][0];
const resultWithWeapon = distance[n - 1][m - 1][1];
const finalResult = Math.min(resultWithoutWeapon, resultWithWeapon);

if (finalResult <= t) {
  console.log(finalResult);
} else {
  console.log("Fail");
}
