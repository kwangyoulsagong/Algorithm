const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

//Kapreker 연산 네자리 수 중 모든 자리수가 같지 않은수 (1111,2222,등을 제외)
//각 자리의 숫자를 재배열해서 가장 큰수 가장 작은수 만들어 차이 계산
//그 결과를 가지고 같은 과정 반복
// 8200 – 0028 = 8172
// 8721 – 1278 = 7443
// 7443 – 3447 = 3996
// 9963 – 3699 = 6264
// 6642 – 2466 = 4176
// 7641 – 1467 = 6174
// 7641 – 1467 = 6174
//여기서 6174를 만들어내면 매번 6174를 만든다
//몇단개 만에 6174가 돼는지 판단
const T = input[0];
const numArr = input.slice(1).map(Number);

function Kapreker(arr) {
  const ascnumbers = arr
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  const descnumbers = arr
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");

  return ascnumbers - descnumbers;
}

for (let i = 0; i < T; i++) {
  let count = 0;
  while (true) {
    if (numArr[i] != 6174) {
      numArr[i] = Kapreker(numArr[i]);
      count++;
    } else {
      console.log(count);
      break;
    }
  }
}
