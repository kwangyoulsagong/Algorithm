const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [nm, s, ...rest] = input;

// 노드의 개수 간선의 개수
const [n, m] = nm.split(" ").map(Number);

// 시작 노드 번호
const start = parseInt(s);

const arr = rest.map((str) => str.split(" ").map(Number));

// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트
const graph = Array.from({ length: n + 1 }, () => []);
// 방문한 적이 있는지 체크하는 목적의 리스트
let visited = Array.from({ length: n + 1 }, () => false);
// 최단 거리 테이블을 모두 무한으로 초기화
let distance = Array.from({ length: n + 1 }, () => Infinity);

function solution(n, m, start, arr) {
  for (const v of arr) {
    // a -> b 로 가는 비용이 c
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  // 방문하지 않는 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
  const get_smallest_node = () => {
    let min_value = Infinity;
    // 가장 최단 거리가 짧은 노드
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
    // 시작 노드 0을로 초기화
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
  };
  // 다익스트라 알고리즘 수행
  dijkstra(start);

  for (let i = 1; i <= n; i++) {
    if (distance[i] === Infinity) {
      console.log("INFINITY");
    } else {
      console.log(distance[i]);
    }
  }
}
solution(n, m, start, arr);
