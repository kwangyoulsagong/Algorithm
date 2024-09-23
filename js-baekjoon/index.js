const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 시험관이 있음
// 시험관은 1x1 크기으 칸으로 나누어지며, 특정한 위치에는 바이러스 존재
// 모든 바이러스는 1번부터 k번까지의 바이러스 종류 중 하나에 속함
// 시험관에 존재하는 모든 바이러스는 1초마다 상 하 좌 우의 방향으로 증식
// 단, 매 초마다 번호가 낮은 종류의 바이러스 부터 먼저 증식 또한 증식 과정에서 특정한 칸에 이미 어떠한
// 바이러스가 존재한다면, 그곳에는 다른 바이러스가 들어 갈 수 없다

const [n, m] = input.shift().split(" ").map(Number);
const graph = [];
const viruses = [];

for (let i = 0; i < n; i++) {
  const arr = input[i].split(" ").map(Number);
  for (let j = 0; j < m; j++) {
    if (arr[j] > 0) {
      viruses.push([arr[j], 0, i, j]);
    }
  }
  graph.push(arr);
}
const [s, x, y] = input[n].split(" ").map(Number);
// 바이러스를 번호 순서대로 정렬 (우선순위 큐 역할)
viruses.sort((a, b) => a[0] - b[0]);
const bfs = () => {
  const queue = [...viruses];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [virusType, time, x, y] = queue.shift();

    // s초가 지나면 멈춘다
    if (time == s) break;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] == 0) {
        graph[nx][ny] = virusType;
        queue.push([virusType, time + 1, nx, ny]);
      }
    }
  }
};

bfs();
console.log(graph[x - 1][y - 1]); // 목표 위치에 있는 바이러스 출력
