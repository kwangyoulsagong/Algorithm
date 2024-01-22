const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
