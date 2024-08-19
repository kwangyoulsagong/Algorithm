const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 배충 흰 지렁이 구매
// 이 지렁이는 배추 근처에 서식 하며 해충을 먹음
// 어떤 배추에 이 지렁이가 한마리라도 살고 있으면 인접한 다른 배추로 이동 가능 그래서 그 배추도 보호 받음
// 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우 서로 인접하다
// 배추를 군대 군대 심어 놓음
// 배추들이 모여있는 곳에는 배추 흰지렁이가 한마리만 있으면 되므로 서로 인접해 있는 배추들이 몇 군대에 퍼져 있는지 조사하면 총 몇마리의 지렁이가 필요한지 알 수 있다
// 0 은 배추가 심어져 있지 않은 땅 1은 배추가 심어져 있는 땅

const bfs = (sx, sy, w, h, graph) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[sx, sy]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!graph[x][y]) continue;
    else {
      graph[x][y] = 0;
    }
    for (let i = 0; i < 4; i++) {
      const posx = x + dx[i];
      const posy = y + dy[i];
      if (0 > posx || 0 > posy || w <= posx || h <= posy) continue;
      if (graph[posx][posy]) queue.push([posx, posy]);
    }
  }
};
const t = input[0].split(" ").map(Number);
let worm = 0;
let idx = 1;
for (let start = 0; start < t; start++) {
  const [w, h, c] = input[idx].split(" ").map(Number);
  idx++;
  const graph = Array.from({ length: w }, () =>
    Array.from({ length: h }, () => 0)
  );

  // 배추의 위치 설정
  for (let i = 0; i < c; i++) {
    const [x, y] = input[idx].split(" ").map(Number);
    graph[x][y] = 1;
    idx++;
  }
  worm = 0;
  for (let k = 0; k < w; k++) {
    for (let l = 0; l < h; l++) {
      if (graph[k][l]) {
        bfs(k, l, w, h, graph);
        worm++;
      }
    }
  }
  console.log(worm);
}
