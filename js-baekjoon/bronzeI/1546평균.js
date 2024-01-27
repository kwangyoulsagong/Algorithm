const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");

//세준이 기말고사 망침
//조작함 자기 점수중 최대값을 고르고 이값을 M이라고 표현
//그리고 모든 점수를 /M*100으로 고침 그다음에 새로 평균을 구한다.
const num = arr[0].split(" ").map(Number);
let M = 0;
let sum = 0;
for (let i = 0; i < num.length; i++) {
  M = Math.max(M, num[i]);
  sum += num[i];
}
const answer = parseFloat(((sum / M) * 100) / n);
console.log(answer);
