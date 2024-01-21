const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//J개 사탕을 보내야해서 크기가 다른 상자 N개를 가지고 포장해야한다
//상잘르 최소한으로 쓰려고한다 그리디 알고리즘 높은것부터 검사
//T 는 테스트케이스 수
//사탕의 개수 J 와 N
// n개의 줄  R세로 길이 가로 길이 ci 상자
// 정렬 내림 차순으로
function greedy(box, j) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < box.length; i++) {
    sum += box[i];
    count++;
    if (sum >= j) {
      return console.log(count);
    }
  }

  console.log(count);
}
const T = parseInt(input[0]);
let index = 1;
for (let i = 0; i < T; i++) {
  let [j, n] = input[index++].split(" ").map(Number);
  const box = [];
  for (let k = 0; k < n; k++) {
    const [r, c] = input[index++].split(" ").map(Number);
    box.push(r * c);
  }
  box.sort((a, b) => b - a);
  greedy(box, j);
}
