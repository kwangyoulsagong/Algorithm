const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//한상덕 새로 부임한 교장
//첫번째 일 각 반의 수학 성적 통계 내는 일
//각 반의 학생들의 수학 점수  최대 최소 점수 점수 차이 구현

//반의수 k 학생수의 성적 N
const k = input[0];

for (let i = 1; i <= k; i++) {
  let arr = input[i].split(" ").map((grade) => grade);
  let [n, ...score] = arr;
  score.sort((a, b) => b - a);
  let max = score[0];
  let min = score[n - 1];
  let gap = [];
  for (let j = 0; j < n - 1; j++) {
    let value = score[j] - score[j + 1];
    gap.push(value);
  }
  gap.sort((a, b) => b - a);
  const gapMax = gap[0];
  console.log(`Class ${i}`);
  console.log(`Max ${max}, Min ${min}, Largest gap ${gapMax}`);
}
