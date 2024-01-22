const fs = require("fs");
const { cachedDataVersionTag } = require("v8");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
