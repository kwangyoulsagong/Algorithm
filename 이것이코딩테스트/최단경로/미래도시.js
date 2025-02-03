const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [nm, ...rest] = input;
const arr = rest.map((v) => v.split(" ").map(Number));
const [n, m] = nm.split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}
for (let i = 0; i < m; i++) {
  const [a, b] = arr[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}
for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
const [x, k] = arr[m];
const distance = graph[1][k] + graph[k][x];
// 도달할 수 없는 경우 -1 출력
console.log(distance === Infinity ? -1 : distance);
