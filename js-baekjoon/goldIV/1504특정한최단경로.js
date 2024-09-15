const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number); // 정점의 개수, 간선의 개수
const arr = input.slice(1, m + 1).map((str) => str.split(" ").map(Number));
const [v1, v2] = input[m + 1].split(" ").map(Number); // 반드시 거쳐야 하는 두 정점
