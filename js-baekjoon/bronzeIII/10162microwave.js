const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

//버튼 A 5분 B 1분 C 10초
//시간 T는 초단위
//최소 버튼 동작
//최선의 선택 그리디 문제
//젤 큰 초 부터 확인 cnt++ 그리고 시간 만큼 빼줌
let T = Number(input[0]);
const a = 60 * 5;
const b = 60 * 1;
const c = 10;
let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
while (true) {
  if (T >= a) {
    T = T - a;
    cnt1++;
  } else if (T >= b) {
    T = T - b;
    cnt2++;
  } else if (T >= c) {
    T = T - c;
    cnt3++;
  } else {
    break;
  }
}
if (T != 0) {
  console.log(-1);
} else {
  console.log(`${cnt1} ${cnt2} ${cnt3}`);
}
