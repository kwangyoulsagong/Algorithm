const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");
//N명의 사람들 매일 아침 한줄로 슴
//이사람들 마음대로 자리의 서지 못함 민식이의 지시대로 선다
// 어느 날 사람들은 오민식이 사람들이 줄 서는 위치를 기록 하는것을 암
// 그리고 아침에 기록해 놓은 것 과 사람들이 줄을 선 위치가 맞는지 확인
//사람들은 자기보다 큰 사람이 왼쪽에 몇명 있었는지만 기억
//N명의 사람이 있고 사람들의 키가 1~N 까지 모두 다름
// 각사람들이  기억하는 정보가 주어지면, 줄을 어떻게 서야하는지 출력하는 프로그램 작성

//첫쨰 줄에 사람이의수 N 주어짐
// N은 10보다 작거나 같음
// 둘쨰줄은 키가 1인 사람부터 차례대로 자기보다 키가 큰 사람이 왼쪽에 몇 명이 있는지 주어진다
//i번째수는 0보다크거나같고 N-i보다 작거나 같다
let n = input[0];
let remember = input[1].split(" ").map(Number);
let answer = new Array(parseInt(n)).fill(0);

for (let i = 0; i < n; i++) {
  let currentCount = remember[i];
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (count == currentCount && answer[j] == 0) {
      answer[j] = i + 1;
      break;
    } else {
      if (answer[j] == 0) count++;
    }
  }
}
console.log(answer.join(" "));
