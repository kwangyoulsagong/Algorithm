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
let [nm, ...rest] = input;
const arr = rest.map((v) => v.split(" ").map(Number));
const [n, m] = nm.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = arr[i];
  graph[a].push([b, 1]);
  graph[b].push([a, 1]);
}
const dijkstra = (start) => {
  const distance = Array(n + 1).fill(Infinity);
  const pq = new PriorityQueue();
  distance[start] = 0;
  pq.enqueue(start, 0);
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
  return distance;
};
const [x, k] = arr[m];
const distFrom1 = dijkstra(1);
const distFromK = dijkstra(k);
const result = distFrom1[k] + distFromK[x];
result == Infinity ? console.log(-1) : console.log(result);
