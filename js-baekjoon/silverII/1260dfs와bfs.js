const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [n, m, v] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 정점 번호가 작은 것부터 방문하게끔 정렬
graph.forEach((adj) => adj.sort((a, b) => a - b));

const dfs = (start) => {
  const visited = Array(n + 1).fill(false);
  const result = [];

  const recursiveDFS = (node) => {
    visited[node] = true;
    result.push(node);
    for (const next of graph[node]) {
      if (!visited[next]) {
        recursiveDFS(next);
      }
    }
  };

  recursiveDFS(start);
  return result;
};

const bfs = (start) => {
  const visited = Array(n + 1).fill(false);
  const result = [];
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return result;
};

console.log(dfs(v).join(" "));
console.log(bfs(v).join(" "));
