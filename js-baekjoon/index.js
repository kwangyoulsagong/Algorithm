const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, l, r] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const bfs = (startx, starty, visited, flag) => {
  const queue = [[startx, starty]];
  visited[startx][starty] = true;
  let cnt = 1;
  let sumPopulation = map[startx][starty];
  const arr = [[startx, starty]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < n &&
        !visited[newx][newy]
      ) {
        const difference = Math.abs(map[x][y] - map[newx][newy]);
        if (difference >= l && difference <= r) {
          sumPopulation += map[newx][newy];
          cnt++;
          queue.push([newx, newy]);
          arr.push([newx, newy]);
          flag.value = true;
          visited[newx][newy] = true;
        }
      }
    }
  }
  return { arr, sumPopulation, cnt };
};

const changePopulation = (arr, sum, cnt) => {
  let average = Math.floor(sum / cnt);
  for (const [x, y] of arr) {
    map[x][y] = average;
  }
};
let result = 0;
while (true) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let flag = { value: false };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        const { arr, sumPopulation, cnt } = bfs(i, j, visited, flag);
        if (arr.length > 0) {
          changePopulation(arr, sumPopulation, cnt);
        }
      }
    }
  }
  if (!flag.value) break;
  result++;
}
console.log(result);
