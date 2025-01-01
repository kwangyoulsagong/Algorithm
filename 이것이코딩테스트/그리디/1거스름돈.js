//당신은 음식점의 계산을 도와주는 점원
// 카운터 거스름돈 500, 100, 50 10원 짜리 동전이 무한히 존재
//손님에게 N원을 거슬러줘야함
// 동전의 최소 개수를 구하라
// 단 거슬러줘야 할 돈 N은 항상 10의 배수

let n = 1260;
const coin = [500, 100, 50, 10];
let count = 0;
for (let value of coin) {
  count += parseInt(n / value);
  n = n % value;
}
console.log(count);
