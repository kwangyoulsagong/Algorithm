//큰 수의 법칙
//동빈이의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
//단, 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특징
// 2,4,5,4,6 이 있으면
// 6+6+6+5+6+6+6+5=46
//서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 간주
// 3,4,3,4,3이면
// 4+4+4+4+4+4+4+4=28 이런식으로

//풀이 일단 오름차순으로 정렬하고 첫번째 인덱스 k번만큼 더하고 한번 더할때마다 m을 줄임 그리고 두번째 거 더하고 m을 줄이고 다시 k번만큼 큰수 더한다 반복 m이 0이 될때까지

const n = 5;
let m = 8;
const k = 3;
const numbers = [2, 4, 5, 4, 6];
numbers.sort();
const first = numbers[n - 1];
const second = numbers[n - 2];
let sum = 0;
while (true) {
  for (let i = 0; i < k; i++) {
    if (m == 0) break;
    sum += first;
    m--;
  }
  if (m == 0) break;
  sum += second;
  m--;
}
console.log(sum);
