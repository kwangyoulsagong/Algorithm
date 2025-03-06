const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);

const map = input.map((v) => v.split(" ").map(String));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let flag = false;
const checkSight = (arr) => {
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "T") {
        queue.push([i, j]);
      }
    }
  }

  for (let i = 0; i < queue.length; i++) {
    for (let j = 0; j < 4; j++) {
      let [x, y] = queue[i];
      while (x >= 0 && y >= 0 && x < n && y < n) {
        if (arr[x][y] == "O") break;
        else if (arr[x][y] === "S") return false;
        x += dx[j];
        y += dy[j];
      }
    }
  }
  return true;
};
const dfs = (cnt) => {
  if (cnt == 3) {
    console.log("현재 장애물 배치:");
    console.log(map.map((row) => row.join(" ")).join("\n"));
    console.log("----------------");
    let result = checkSight(map.map((v) => [...v]));
    if (result) {
      flag = true;
      return;
    }
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] === "X") {
          map[i][j] = "O";
          dfs(cnt + 1);
          map[i][j] = "X";
        }
      }
    }
  }
};
dfs(0);
if (flag) console.log("YES");
else console.log("NO");
