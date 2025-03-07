const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const checkSafe = (map) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};

const checkVirus = (map) => {
  const queue = [];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < m &&
        map[newx][newy] === 0 &&
        !visited[newx][newy]
      ) {
        map[newx][newy] = 2;
        queue.push([newx, newy]);
        visited[newx][newy] = true;
      }
    }
  }

  const reuslt = checkSafe(map);
  return reuslt;
};
let maxSafePlace = 0;
const dfs = (count) => {
  if (count === 3) {
    const result = checkVirus(map.map((v) => [...v]));
    if (result) {
      maxSafePlace = Math.max(maxSafePlace, result);
    }
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1;
          dfs(count + 1);
          map[i][j] = 0;
        }
      }
    }
  }
};

dfs(0);
console.log(maxSafePlace);
