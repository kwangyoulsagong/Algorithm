const { channel } = require("diagnostics_channel");
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 도로 1,2 와 2,3를 통화여 지점 1에서 3까지 걸리는 시간이 3분, 도로는 양방향
// 어떤 범죄 용의자 입력 데이터에 표시된 도시로 진입하여 이 도시를 가장 빠른 시간 내에 빠져나가고자 한다
// 그런데 이 사실을 알고있는 경찰이 어떤 하나의 도로(엣지)를 선택하여 이 도로에서 검문한다
// 따라서 용의자는 이 도로를 피해서 가장 빠르게 도시를 탈출하고자 한다
// 이 경우 경찰이 검문을 위하여 선택하는 도로에 따라서 용의자의 가장 빠른 탈출 시간은 검문이 없을때에 비하여 더 늘어날 수 있다

// 문제: 도로검문을 통하여 얻을수 있는 탈출의 최대 지연시간을 계산하는 것
// 1. 두개의 지점을 직접 연결하는 도로가 있는 경우, 그 도로는 유일하다
// 2. 도시의 지점은 1에서 N번까지 N개의 연속된 정수로 표시
// 3. 용의자가 도시에 진입하는 상황 1번 최종적 목적지는 N번
// 4. 용의자는 검문을 피해서 가장 빨리 도시를 빠져나가고자 하고, 경찰은 적절한 도로를 선택하여 용이자들이 탈출시간을 최대한 지연시키고자 한다.
// 5. 각 도시 지점 간을 이동하는 시간은 양의 정수 이다.

// 도시를 탈출 못할경우 탈출시간은 무한대이다. 이떄는 -1 리턴
// 만일 지연효과가 없으면 0을 출력

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((str) => str.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const edges = [];
for (const i of arr) {
  const [a, b, c] = i;
  graph[a].push([b, c]);
  graph[b].push([a, c]);
  edges.push([a, b, c]); // 엣지 리스트 추가
}

const get_smallest_node = (distance, visited) => {
  let min_value = Infinity;
  let index = 0;
  for (let i = 1; i <= n; i++) {
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

  for (const i of graph[start]) {
    const [node, cost] = i;
    distance[node] = cost;
  }

  for (let i = 0; i < n; i++) {
    const now = get_smallest_node(distance, visited);
    visited[now] = true;

    for (const j of graph[now]) {
      const [nextNode, preCost] = j;
      const cost = distance[now] + preCost;
      if (cost < distance[nextNode]) {
        distance[nextNode] = cost;
      }
    }
  }

  return distance;
};
const newdijkstra = (start, blockGraph) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  const distance = Array.from({ length: n + 1 }, () => Infinity);
  distance[start] = 0;

  for (const i of blockGraph[start]) {
    const [node, cost] = i;
    distance[node] = cost;
  }

  for (let i = 0; i < n; i++) {
    const now = get_smallest_node(distance, visited);
    visited[now] = true;

    for (const j of blockGraph[now]) {
      const [nextNode, preCost] = j;
      const cost = distance[now] + preCost;
      if (cost < distance[nextNode]) {
        distance[nextNode] = cost;
      }
    }
  }

  return distance;
};
const originalDistances = dijkstra(1);
const originalShortestPath = originalDistances[n];
let maxDelay = 0;
for (const [a, b, c] of edges) {
  const blockGraph = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i < n; i++) {
    for (const [node, cost] of graph[i]) {
      if ((i === a && node === b) || (i === b && node === a)) {
        continue;
      }
      blockGraph[i].push([node, cost]);
    }
  }
  const newDistance = newdijkstra(1, blockGraph);
  const newShortestPath = newDistance[n];

  const check = Math.abs(originalShortestPath - newShortestPath);
  maxDelay = Math.max(maxDelay, check);
}
if (maxDelay == Infinity) {
  console.log(-1);
} else if (maxDelay == 0) {
  console.log(0);
} else {
  console.log(maxDelay);
}

// 최소힙 풀이
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

// const [n, m] = input.shift().split(" ").map(Number);
// const graph = Array.from({ length: n + 1 }, () => []);
// const edges = [];

// for (const line of input) {
//     const [a, b, c] = line.split(" ").map(Number);
//     graph[a].push([b, c]);
//     graph[b].push([a, c]);
//     edges.push([a, b]);
// }

// // Min-Heap 구현
// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(node) {
//         this.heap.push(node);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             const element = this.heap[index];
//             const parentIndex = Math.floor((index - 1) / 2);
//             const parent = this.heap[parentIndex];
//             if (element[0] >= parent[0]) break;
//             this.heap[index] = parent;
//             this.heap[parentIndex] = element;
//             index = parentIndex;
//         }
//     }

//     extractMin() {
//         const min = this.heap[0];
//         const end = this.heap.pop();
//         if (this.heap.length > 0) {
//             this.heap[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }

//     sinkDown() {
//         let index = 0;
//         const length = this.heap.length;
//         const element = this.heap[0];

//         while (true) {
//             let leftChildIndex = 2 * index + 1;
//             let rightChildIndex = 2 * index + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIndex < length) {
//                 leftChild = this.heap[leftChildIndex];
//                 if (leftChild[0] < element[0]) {
//                     swap = leftChildIndex;
//                 }
//             }

//             if (rightChildIndex < length) {
//                 rightChild = this.heap[rightChildIndex];
//                 if (
//                     (swap === null && rightChild[0] < element[0]) ||
//                     (swap !== null && rightChild[0] < leftChild[0])
//                 ) {
//                     swap = rightChildIndex;
//                 }
//             }

//             if (swap === null) break;
//             this.heap[index] = this.heap[swap];
//             this.heap[swap] = element;
//             index = swap;
//         }
//     }

//     isEmpty() {
//         return this.heap.length === 0;
//     }
// }

// // Dijkstra 알고리즘
// const dijkstra = (start, blockEdge) => {
//     const distance = Array.from({ length: n + 1 }, () => Infinity);
//     distance[start] = 0;
//     const minHeap = new MinHeap();
//     minHeap.insert([0, start]); // [거리, 노드]

//     while (!minHeap.isEmpty()) {
//         const [dist, now] = minHeap.extractMin();

//         if (dist > distance[now]) continue; // 이미 더 짧은 경로가 발견된 경우

//         for (const [nextNode, cost] of graph[now]) {
//             // 차단된 엣지 처리
//             if (
//                 blockEdge &&
//                 ((now === blockEdge[0] && nextNode === blockEdge[1]) ||
//                     (now === blockEdge[1] && nextNode === blockEdge[0]))
//             ) {
//                 continue;
//             }

//             const newDist = dist + cost;
//             if (newDist < distance[nextNode]) {
//                 distance[nextNode] = newDist;
//                 minHeap.insert([newDist, nextNode]);
//             }
//         }
//     }

//     return distance;
// };

// // 원래 최단 경로 계산
// const originalDistances = dijkstra(1, null);
// const originalShortestPath = originalDistances[n];

// if (originalShortestPath === Infinity) {
//     console.log(-1);
//     return;
// }

// let maxDelay = 0;

// // 각 엣지 차단 시 시도
// for (const [a, b] of edges) {
//     const newDistances = dijkstra(1, [a, b]);
//     const newShortestPath = newDistances[n];

//     if (newShortestPath === Infinity) {
//         // 도로를 차단하여 탈출 불가능
//         console.log(-1);
//         return;
//     }

//     const delay = newShortestPath - originalShortestPath;
//     if (delay > 0) {
//         maxDelay = Math.max(maxDelay, delay);
//     }
// }

// // 결과 출력
// console.log(maxDelay);
