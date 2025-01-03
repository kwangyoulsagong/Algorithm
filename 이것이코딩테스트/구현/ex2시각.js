// 정수 N이 입력되면 00시00분00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 경우의 수를 만든다
const n = 5;
let count = 0;
for (let i = 0; i < n + 1; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      if (
        i.toString().includes("3") ||
        j.toString().includes("3") ||
        k.toString().includes("3")
      ) {
        count++;
      }
    }
  }
}
console.log(count);
