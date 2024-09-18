const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number); // 정점의 개수, 간선의 개수
const arr = input.slice(1, m + 1).map((str) => str.split(" ").map(Number));

const [v1, v2] = input[m + 1].split(" ").map(Number);

// 그래프 초기화
const graph = Array.from({ length: n + 1 }, () => []);

// 그래프에 간선 정보 입력 (양방향)
for (const i of arr) {
  const [a, b, c] = i;
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// 방문하지 않는 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
const get_smallest_node = () => {
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
  distance = Array(n + 1).fill(Infinity);
  visited = Array(n + 1).fill(false);
  distance[start] = 0;
  visited[start] = true;
  for (const j of graph[start]) {
    const [node, cost] = j;
    distance[node] = cost;
  }
  // 시작 노드를 제외한 전체 노드에 대해 반복
  for (let i = 0; i < n; i++) {
    const now = get_smallest_node();

    visited[now] = true;
    // 현재 노드와 연결된 다른 노드를 확인
    for (const j of graph[now]) {
      const [node, preCost] = j;
      const cost = distance[now] + preCost;
      // 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[node]) {
        distance[node] = cost;
      }
    }
  }
  return distance;
};
const distFrom1 = dijkstra(1); // 1번 정점에서 다익스트라 수행
const distFromV1 = dijkstra(v1); // v1번 정점에서 다익스트라 수행
const distFromV2 = dijkstra(v2); // v2번 정점에서 다익스트라

// 1 -> v1 -> v2 -> N 경로
const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[n];
// 1 ->  v2 -> v1 ->N 경로
const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[n];
const result = Math.min(path1, path2);
if (result == Infinity) {
  console.log(-1);
} else {
  console.log(result);
}
