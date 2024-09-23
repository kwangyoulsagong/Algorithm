const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 바이러스 유출, 다행히 아직 바이러스가 퍼지지 않음
// 바이러스 확산을 막기위해 연구소에 벽을 새움
// 연구소 크기는 NXM 인 직사각형, 직사각형은 1X1 크기의 정사각형의으로 나누어져 있음
// 연구소는 빈 칸, 벽으로 이루어져 있음, 벽은 칸 하나를 가득 차지 한다.
// 일부 칸은 바이러스가 존재, 이 바이러스는 상하좌우로 인접한 빈 칸으로 모두 펴져나갈수 있다.
// 새로 세울수 있는 벽의 개수는 3개이며, 꼭 3개를 세워야함
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
let queue = [];
let result = 0;
let cnt = 0;
for (let i = 1; i < n + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}
const bfs = () => {
  const Graph = graph.map((row) => [...row]);
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (Graph[i][j] == 2) {
        queue.push([i, j]);
      }
    }
  }
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nextx, nexty] = [x + dx[i], y + dy[i]];
      if (
        nextx >= 0 &&
        nexty >= 0 &&
        nextx < n &&
        nexty < m &&
        Graph[nextx][nexty] == 0
      ) {
        Graph[nextx][nexty] = 2;
        queue.push([nextx, nexty]);
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (Graph[i][j] == 0) {
        cnt += 1;
      }
    }
  }

  return cnt;
};
const dfs = (cnt) => {
  if (cnt == 3) {
    const safeArea = bfs();
    result = Math.max(result, safeArea);
    return result;
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] == 0) {
          graph[i][j] = 1;
          dfs(cnt + 1);
          graph[i][j] = 0;
        }
      }
    }
  }
};
dfs(0);
console.log(result);
