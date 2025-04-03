const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n] = input.shift().split(" ").map(Number);
let [k] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);

for (const [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}
const expanded = Array(n + 1).fill(false);
let count = 0;
const bfs = (viruses) => {
  const queue = [viruses];

  while (queue.length > 0) {
    const target = queue.shift();
    if (!expanded[target]) {
      expanded[target] = true;
      count++;
      queue.push(...graph[target]);
    }
  }
};

bfs(1);

console.log(count - 1);
