class MinHeap {
  constructor() {
    this.heap = [];
  }

  enqueue([node, dist]) {
    this.heap.push([node, dist]);
    this._heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;

      if (
        leftChild < length &&
        this.heap[leftChild][1] < this.heap[smallest][1]
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < length &&
        this.heap[rightChild][1] < this.heap[smallest][1]
      ) {
        smallest = rightChild;
      }

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
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
let [nm, s, ...rest] = input;
const [n, m] = nm.split(" ").map(Number);
const start = parseInt(s);
const arr = rest.map((str) => str.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
let distance = Array.from({ length: n + 1 }, () => Infinity);

for (const [a, b, c] of arr) {
  graph[a].push([b, c]);
}

const dijkstra = (start) => {
  const pq = new MinHeap();
  pq.enqueue([start, 0]);
  distance[start] = 0;

  while (pq.size()) {
    const [now, dist] = pq.dequeue();

    if (distance[now] < dist) continue;

    for (const [next, cost] of graph[now]) {
      const newCost = dist + cost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        pq.enqueue([next, newCost]);
      }
    }
  }
};

dijkstra(start);

for (let i = 1; i <= n; i++) {
  console.log(distance[i] === Infinity ? "INFINITY" : distance[i]);
}
