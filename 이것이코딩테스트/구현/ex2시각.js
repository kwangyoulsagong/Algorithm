// 정수 N이 입력되면 00시00분00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 경우의 수를 만든다
const n = 5;
let count = 0;
for (let h = 0; h <= n; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      const time = `${h}${m}${s}`;
      if (time.includes("3")) {
        count++;
      }
    }
  }
}
console.log(count);
