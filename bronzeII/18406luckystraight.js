const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
// 아웃 복서 럭키 스트레이트 기술 존재
//강력하지만 항상 사용 x
//현재 게임내에 특정 점수 내 에서만 사용가능
// 캐릭터 점수 N
// 점수 N 자릿수 기준 반으로 나눔
//왼쪽 부분 자리수 합 오른쪽 자리수 합이 동일 하면
// 에시 123402가 있으면 반 나누어서 123 =6 402는 6 그래서 lucky 가능
//아니면 ready
//자릿수는 항상 짝수 형태
const str = String(input[0]);
let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < str.length / 2; i++) {
  leftSum += Number(str[i]);
}

for (let i = str.length / 2; i < str.length; i++) {
  rightSum += Number(str[i]);
}

if (leftSum == rightSum) {
  console.log("LUCKY");
} else {
  console.log("READY");
}
