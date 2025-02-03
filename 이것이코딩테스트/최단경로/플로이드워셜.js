const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [n, m, ...rest] = input;
const arr = rest.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: parseInt(n) + 1 }, () =>
  Array(parseInt(n) + 1).fill(Infinity)
);
for (let a = 1; a < parseInt(n) + 1; a++) {
  for (let b = 1; b < parseInt(n) + 1; b++) {
    if (a === b) {
      graph[a][b] = 0;
    }
  }
}
for (const value of arr) {
  const [a, b, c] = value;
  graph[a][b] = c;
}
for (let k = 1; k < parseInt(n) + 1; k++) {
  for (let a = 1; a < parseInt(n) + 1; a++) {
    for (let b = 1; b < parseInt(n) + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
for (let a = 1; a <= parseInt(n); a++) {
  let result = "";
  for (let b = 1; b <= parseInt(n); b++) {
    result += graph[a][b] === Infinity ? "INF " : `${graph[a][b]} `;
  }
  console.log(result.trim()); // 한 줄씩 출력
}
