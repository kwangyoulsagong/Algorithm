const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
//국가는 여러 지방의 예산요청을 심사하여 국가의 예산을 분배하는 것이다. 국가예산의 총액은 미리 정해짐 그래서 모든 예산요청을 배정해 주기 어려움
//정해진 총액 이하에서 가능한 한 최대의 총 예산을 선정
//1.모든 요청이 배정될 수 있는 경우 요청한 금액을 그대로 배정
//2.모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다. 상한액 이하의 예산 요청에 대해서는 그대로 요청

//ex 전체 국가 예산 485
//4개 지방 예산요청 각각 120, 110, 140, 150
//이 경우, 상한액을 127로 잡으면 각각 120, 110, 127, 127
// 배정 하고 그 합이 484로 가능한 최대가 됨

const l = input[0];
console.log(l);
const k = input[1].split(" ").map(Number);
const total = input[2];
const sum = k.reduce((acc, i) => (acc += i));
console.log(sum);
