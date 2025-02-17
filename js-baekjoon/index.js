const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [nlr, ...rest] = input;
const [N, L, R] = nlr.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));
let result = 0;
const bfs = (startx, starty, map, visited, flag) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[startx, starty]];
  visited[startx][starty] = true;
  const arr = [[startx, starty]];
  let sumPopulation = map[startx][starty];
  let cnt = 1;
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < N &&
        newy < N &&
        !visited[newx][newy]
      ) {
        const value = Math.abs(map[x][y] - map[newx][newy]);
        if (value >= L && value <= R) {
          queue.push([newx, newy]);
          arr.push([newx, newy]);
          visited[newx][newy] = true;
          cnt++;
          sumPopulation += map[newx][newy];
          flag.value = true;
        }
      }
    }
  }
  return { arr, sumPopulation, cnt };
};

const move = (arr, sumPopulation, cnt) => {
  const changePopulation = Math.floor(sumPopulation / cnt);
  for (let [x, y] of arr) {
    map[x][y] = changePopulation;
  }
};

while (true) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let flag = { value: false };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const { arr, sumPopulation, cnt } = bfs(i, j, map, visited, flag);
        if (arr.length > 0) {
          move(arr, sumPopulation, cnt);
        }
      }
    }
  }

  if (!flag.value) break;
  result += 1;
}
console.log(result);
