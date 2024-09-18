const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m, x] = input[0].split(" ").map(Number);
const arr = input.slice(1, m + 1).map((str) => str.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const graphReverse = Array.from({ length: n + 1 }, () => []);
for (const i of arr) {
  const [a, b, c] = i;
  graph[a].push([b, c]);
}
for (const i of arr) {
  const [a, b, c] = i;
  graphReverse[b].push([a, c]);
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
  const visited = Array.from({ length: n + 1 }, () => false);
  const distance = Array.from({ length: n + 1 }, () => Infinity);
  distance[start] = 0;
  visited[start] = true;
  for (const j of graph[start]) {
    const [node, cost] = j;
    distance[node] = cost;
  }
  for (let i = 0; i < n; i++) {
    const now = get_smallest_node(distance, visited);
    visited[now] = true;
    for (const j of graph[now]) {
      const [node, preCost] = j;
      const cost = distance[now] + preCost;
      if (cost < distance[node]) {
        distance[node] = cost;
      }
    }
  }
  return distance;
};

const distToX = dijkstra(x);

const reverseDijkstra = (start) => {
  const distance = Array.from({ length: n + 1 }, () => Infinity);
  const visited = Array.from({ length: n + 1 }, () => false);
  distance[start] = 0;
  visited[start] = true;
  for (const i of graphReverse[start]) {
    const [node, cost] = i;
    distance[node] = cost;
  }
  for (let i = 0; i < n; i++) {
    const now = get_smallest_node(distance, visited);
    visited[now] = true;
    for (const j of graphReverse[now]) {
      const [node, preCost] = j;
      const cost = distance[now] + preCost;
      if (cost < distance[node]) {
        distance[node] = cost;
      }
    }
  }
  return distance;
};
const distFromX = reverseDijkstra(x);
let maxTime = 0;
for (let i = 1; i <= n; i++) {
  const roundeTime = distToX[i] + distFromX[i];
  if (roundeTime > maxTime) maxTime = roundeTime;
}
console.log(maxTime);
