const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [n] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const newSet = new Set(arr);
const compressedArr = Array.from(newSet);
compressedArr.sort((a, b) => a - b);
let object = {};
compressedArr.forEach((value, index) => (object[value] = index));
for (let i = 0; i < arr.length; i++) {
  arr[i] = object[arr[i]];
}
console.log(arr.join(" "));
