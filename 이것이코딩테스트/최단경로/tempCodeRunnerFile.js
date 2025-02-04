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
let [nmc, ...rest] = input;
const [n, m, c] = nmc.split(" ").map(Number);
const arr = rest.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => Infinity);
for (const val of arr) {
  const [a, b, c] = val;
  graph[a].push([b, c]);
}
const dijkstra = (start) => {
  const pq = new PriorityQueue();
  pq.enqueue(start, 0);
  distance[start] = 0;
  while (pq.values.length > 0) {
    const [now, dist] = pq.dequeue();
    if (distance[now] < dist) continue;
    for (const [next, cost] of graph[now]) {
      const newCost = dist + cost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        pq.enqueue(next, newCost);
      }
    }
  }
};
dijkstra(c);
let count = 0;
let result = 0;
for (let val of distance) {
  if (val != Infinity) {
    count++;
    result = Math.max(result, val);
  }
}
console.log(count - 1, result);
