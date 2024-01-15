const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
// 춘향 편의점에서 일함
//손님은 2원 짜리 5원짜리 거스름돈만 달래
//최소 동전 수로 주래
//맞춰야하니간 2원부터 계산하는거지
let money = Number(input[0]);
let count = 0;
const exchange5 = 5;
const exchange2 = 2;
function exchange() {
  while (money > 0) {
    if (money == 1 || money == 3) {
      return -1;
    }
    if (money % 2 == 1 || money % 5 == 0) {
      money -= exchange5;
      count++;
    } else {
      money -= exchange2;
      count++;
    }
  }
  return count;
}
const result = exchange();
console.log(result);
