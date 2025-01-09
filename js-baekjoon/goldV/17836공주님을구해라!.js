const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const values = input.shift().split(" ").map(Number);
const n = values.shift();
const m = values.shift();
const map = input.map((v) => v.split(" ").map(Number));
let t = values.shift();
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(2).fill(false))
);

const queue = [[0, 0, 0]];
visited[0][0][0] = true;

const distance = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(2).fill(Infinity))
);
distance[0][0][0] = 0;

const bfs = () => {
  while (queue.length > 0) {
    const [x, y, weapon] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];

      if (newx >= 0 && newy >= 0 && newx < n && newy < m) {
        const cell = map[newx][newy];
        const newWeapon = weapon || cell == 2 ? 1 : 0;
        if (
          !visited[newx][newy][newWeapon] &&
          (cell == 0 || cell == 2 || (weapon == 1 && cell == 1))
        ) {
          visited[newx][newy][newWeapon] = true;
          distance[newx][newy][newWeapon] = distance[x][y][weapon] + 1;
          queue.push([newx, newy, newWeapon]);
        }
      }
    }
  }
};
bfs();

const resultWithoutWeapon = distance[n - 1][m - 1][0];
const resultWithWeapon = distance[n - 1][m - 1][1];
const result = Math.min(resultWithoutWeapon, resultWithWeapon);
if (result <= t) {
  console.log(result);
} else {
  console.log("Fail");
}
