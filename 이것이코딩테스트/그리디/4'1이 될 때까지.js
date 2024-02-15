// 문제 어떠한 수 N 이 1이 될 때 까지 두 과정 중 하를 반복해서 수행
//단 두 번째 연산은 N이 K로 나누어떨질때만 선택 가능

// 과정 1: n-1
// 과정 2: n/k(단 나누어질떄만)

//ex n= 17 k=4
// 17-1 =16 1번 수행
//16/4 2번수행
// 총 3번 수행

// 수행 횟수 최솟값 출력
// 17 4 == 3 25 5 ==2 25 3 == 6 27
//내 풀이
let n = 25;
const k = 3;

let count = 0;
while (n > 1) {
  if (n % k == 0) {
    n /= k;
    count++;
  } else {
    n -= 1;
    count++;
  }
}
console.log(count);
// 나은 풀이

function solution(n, k) {
  let result = 0;
  while (true) {
    const target = parseInt(n / k) * k;
    result += n - target;
    n = target;
    if (n < k) {
      break;
    }
    n = parseInt(n / k);
    result += 1;
  }
  result += n - 1;
  console.log(result);
}
solution(25, 3);
