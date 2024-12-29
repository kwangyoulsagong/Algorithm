const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m, k, s] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let a of input) {
  const [u, v] = a.split(" ").map(Number);
  graph[u].push(v);
}

const distance = Array.from({ length: n + 1 }, () => -1);
distance[s] = 0;
const queue = [s];
while (queue.length) {
  const current = queue.shift();
  for (let a of graph[current]) {
    if (distance[a] === -1) {
      distance[a] = distance[current] + 1;
      queue.push(a);
    }
  }
}

const result = [];
for (let i = 1; i <= n; i++) {
  if (distance[i] === k) {
    result.push(i);
  }
}

console.log(result.length ? result.join("\n") : -1);
