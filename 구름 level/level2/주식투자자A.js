// Run by Node.js
const readline = require("readline");
function solution(n, arr) {
  const mapArray = [];
  for (let i = 1; i < arr.length; i++) {
    const [stock, value] = arr[i].split(" ").map(Number);
    const evaluation = Math.floor(stock * value * 10) / 10;
    mapArray.push({ index: i, evaluation });
  }
  mapArray.sort((a, b) => {
    if (b.evaluation === a.evaluation) {
      return a.index - b.index; // 키(i) 오름차순
    }
    return b.evaluation - a.evaluation; // 값(value) 내림차순
  });
  const answer = mapArray.map((a) => a.index);
  console.log(answer.join(" "));
}
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];

  // 한 번에 입력을 받음
  for await (const line of rl) {
    input.push(line.trim());
  }

  // 입력된 데이터 처리
  const n = parseInt(input[0]);
  solution(n, input);
})();
