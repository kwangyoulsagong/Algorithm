class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push([val, priority]);
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a[1] - b[1]);
  }
}

const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [nm, s, ...rest] = input;
// 노드의 개수 간선의 개수
const [n, m] = nm.split(" ").map(Number);

// 시작 노드 번호
const start = parseInt(s);

const arr = rest.map((str) => str.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => Infinity);
for (const value of arr) {
  const [a, b, c] = value;
  graph[a].push([b, c]);
}
const dijkstra = (start) => {
  const pq = new PriorityQueue();
  pq.enqueue(start, 0);
  distance[start] = 0;
  while (pq.values.length > 0) {
    const [now, dist] = pq.dequeue();
    if (distance[now] < dist) continue;
    for (let [next, cost] of graph[now]) {
      const newCost = dist + cost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        pq.enqueue(next, newCost);
      }
    }
  }
};
dijkstra(start);
for (let i = 1; i <= n; i++) {
  console.log(distance[i] === Infinity ? "INFINITY" : distance[i]);
}
