const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//타로 잡화점에서 물건을 사
//잡화점이 가지고있는 잔돈 500, 100, 50 , 10 5 1
// 거스름돈 개수 가장 적게 줌
// 카운터에서 1000엔 지패를 한장냈을 떄 받은 잔돈에 포함된 잔돈 개수 1000-잔돈
// 최선의 선택해야하기 때문에 큰잔돈부터 판단 그리디 알고리즘
let payMoney = 1000 - Number(input[0]);
let exChangeMoneyCOunt = 0;
const exchangeMoney = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < exchangeMoney.length; i++) {
  exChangeMoneyCOunt += Math.floor(payMoney / exchangeMoney[i]);
  payMoney %= exchangeMoney[i]; // 잔돈을 줄임
}
console.log(exChangeMoneyCOunt);
