const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number); // 정점의 개수, 간선의 개수
const arr = input.slice(1, m + 1).map((str) => str.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
for (const i of arr) {
  const [a, b, c] = i;
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const get_smallest_node = (distance, visited) => {
  let min_value = Infinity;
  let index = 0;

  for (const i in distance) {
    if (!visited[i] && distance[i] < min_value) {
      min_value = distance[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (start) => {
  const distance = Array.from({ length: n + 1 }, () => Infinity); // 최단 거리 테이블
  const firstVisit = Array.from({ length: n + 1 }, () => 0); // 첫 번째로 거쳐야 할 노드
  const visited = Array.from({ length: n + 1 }, () => false); // 방문 여부
  distance[start] = 0;
  for (const j of graph[start]) {
    const [node, cost] = j;
    distance[node] = cost;
    firstVisit[node] = node; // 처음 방문하는 노드 기록
  }
  for (let i = 0; i < n; i++) {
    const now = get_smallest_node(distance, visited);
    visited[now] = true;
    for (const j of graph[now]) {
      const [node, preCost] = j;
      const cost = distance[now] + preCost;
      if (cost < distance[node]) {
        distance[node] = cost;
        firstVisit[node] = firstVisit[now] == 0 ? node : firstVisit[now]; // 이전 노드의 첫 방문 노드를 그대로 가져감
      }
    }
  }
  return firstVisit;
};
// 각 노드에 대해 다익스트라 알고리즘 수행
const path = Array.from({ length: n + 1 }, () => Array(n + 1).fill("-"));
for (let i = 1; i <= n; i++) {
  const firstVisit = dijkstra(i);
  for (let j = 1; j <= n; j++) {
    if (i != j) path[i][j] = firstVisit[j];
  }
}
// 경로표 출력
for (let i = 1; i <= n; i++) {
  console.log(path[i].slice(1).join(" ")); // 각 노드에 대한 경로표 출력
}
