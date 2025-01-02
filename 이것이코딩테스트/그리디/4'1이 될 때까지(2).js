let n = 25;
const k = 3;
let count = 0;

while (n >= k) {
  // 나누어 떨어지는 가장 가까운 값으로 이동
  const target = Math.floor(n / k) * k;
  // 한번에 n-target만크 뺄샘 연산 수행해서 빠름
  count += n - target;
  n = target;
  if (n < k) break;
  // 나누어 떨어지니 나눗셈 연산
  count++;
  n = Math.floor(n / k);
}
count += n - 1;
console.log(count);
