const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");

// 타노스는 0 과 1로 이루어진 문자열 s를 봄
//s가 포함되는 0,1의개수는 모두 짝수
//s' 문자를 만든느데 s의 문자 절반의 0, 절반의 1을 제거하여 사전 순으로 가장 빠른 문자열 만듬

//예제 1010 = 01
// 000011 = 001

//내풀이 25점
const arr = input[0];

function greedy(arr, result, num) {
  const splitarr = arr.split(num).join("");
  for (let i = 0; i < splitarr.length / 2; i++) {
    result.push(splitarr[i]);
  }
}
let result = [];

greedy(arr, result, "0");
greedy(arr, result, "1");
console.log(result.sort().join(""));
