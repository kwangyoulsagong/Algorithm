const bfs = (graph, start, visited) => {
  const queue = [[start]];
  visited[start] = true;
  while (queue.length > 0) {
    const [v] = queue.shift();
    process.stdout.write(v + " ");
    for (let i = 0; i < graph[v].length; i++) {
      const neighbor = graph[v][i];
      if (!visited[neighbor]) {
        queue.push([neighbor]);
        visited[neighbor] = true;
      }
    }
  }
};

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
const visited = Array.from({ length: graph.length + 1 }, () => false);
bfs(graph, 1, visited);
