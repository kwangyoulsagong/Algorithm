const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [nm, s, ...rest] = input;

// 노드의 개수 간선의 개수
const [n, m] = nm.split(" ").map(Number);

// 시작 노드 번호
const start = parseInt(s);

const arr = rest.map((str) => str.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
for (const value of arr) {
  const [a, b, c] = value;
  graph[a].push([b, c]);
}
const distance = Array.from({ length: n + 1 }, () => Infinity);
const dijkstra = (start) => {
  const queue = [[start, 0]];
  distance[start] = 0;
  while (queue.length > 0) {
    const [now, dist] = queue.shift();
    if (distance[now] < dist) continue;
    for (const [next, cost] of graph[now]) {
      const newCost = dist + cost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        queue.push([next, newCost]);
      }
    }
  }
};
dijkstra(start);
for (let i = 1; i <= n; i++) {
  console.log(distance[i] === Infinity ? "INFINITY" : distance[i]);
}
