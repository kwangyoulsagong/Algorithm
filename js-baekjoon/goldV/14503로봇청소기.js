const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input[0].split(" ");
const [r, c, d] = input[1].split(" ").map(Number);
const map = [];
let clean = 0;
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);
for (let i = 2; i < input.length; i++) {
  map.push(input[i].split(" ").map(Number));
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
function dfs(r, c, d) {
  if (map[r][c] == 0) {
    map[r][c] = 2;
    clean++;
  }

  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;
    let x = r + dx[d];
    let y = c + dy[d];
    if (x >= 0 && y >= 0 && x < n && y < m && map[x][y] === 0) {
      dfs(x, y, d);
      return;
    }
  }

  let dir = (d + 2) % 4;
  let bx = r + dx[dir];
  let by = c + dy[dir];
  if (bx >= 0 && by >= 0 && bx < n && by < m && map[bx][by] !== 1) {
    dfs(bx, by, d);
  } else {
    return;
  }
}

dfs(r, c, d);
console.log(clean);
