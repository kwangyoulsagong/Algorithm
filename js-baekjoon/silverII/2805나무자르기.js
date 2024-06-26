const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
//상근이는 나무 m미터가 필요
//근처에 나무 판매소 망함 그래서 정부에 별목 허가 요청
//집그처 나무 한 줄에 대한 벌목 허가 내줌
// 상근이는 절단기에 높이 H를 지정하면 톱날이 땅으로부터 H미터 위로 올라감
// 한 줄에 연속해있는 나무를 모두 절단해버린다.
const [len, height] = input.join(" ").split(" ").map(Number);
const length = input.join(" ").split(" ").map(Number);
const namu = [];
let answer = 0;
for (let i = 2; i < length.length; i++) {
  namu.push(length[i]);
}
let start = 0;
let end = Math.max(...namu);
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < namu.length; i++) {
    if (mid < namu[i]) {
      sum += namu[i] - mid;
    }
  }
  if (sum >= height) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(answer);
