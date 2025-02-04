class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][1] <= this.heap[index][1]) break;
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }
  bubbleDown() {
    let index = 0;
    while (true) {
      let left = 2 * index + 1,
        right = 2 * index + 2,
        smallest = index;
      if (
        left < this.heap.length &&
        this.heap[left][1] < this.heap[smallest][1]
      )
        smallest = left;
      if (
        right < this.heap.length &&
        this.heap[right][1] < this.heap[smallest][1]
      )
        smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
  size() {
    return this.heap.length;
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n] = input.shift().split(" ").map(Number);
const friends = input.shift().split(" ").map(Number);
const [m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((line) => {
  const [a, b, c] = line.split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
});

const dijkstra = (start) => {
  const distance = Array(n + 1).fill(Infinity);
  const pq = new MinHeap();
  pq.push([start, 0]);
  distance[start] = 0;

  while (pq.size()) {
    const [now, dist] = pq.pop();
    if (distance[now] < dist) continue;
    for (const [next, cost] of graph[now]) {
      const newCost = dist + cost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        pq.push([next, newCost]);
      }
    }
  }
  return distance;
};
const distanceFromA = dijkstra(friends[0]);
const distanceFromB = dijkstra(friends[1]);
const distanceFromC = dijkstra(friends[2]);
const minDist = Array(n + 1).fill(Infinity);
for (let i = 1; i <= n; i++) {
  minDist[i] = Math.min(distanceFromA[i], distanceFromB[i], distanceFromC[i]);
}
let maxDist = -1;
let answer = 0;
for (let i = 1; i <= n; i++) {
  if (maxDist < minDist[i]) {
    maxDist = minDist[i];
    answer = i;
  } else if (minDist === maxDist && i < answer) {
    answer = i;
  }
}
console.log(answer);
