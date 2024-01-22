const fs = require("fs");
const { cachedDataVersionTag } = require("v8");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//상근이가 참가자 선발함
//N명이 참가하고 서로 다른 M개 장르에 대해 오디션을 봄
//심사위원이 모든 참가자 각 장르에 능력 점수로 매김(실수로 나타냄)
// 본선에는 k명이 나감
//각 참가자는 하나의 장르만 가능 , 여러사람이 같은 장르는 가능
//이 때 능력의 합이 최대가 되도록 참가자와 장르를 선택 하는 프로그램

// 참가자 N 명 장르 M 본선 진출자 K
// 3 2 2 N M K
//M개줄 장르의 대한 참가자 능력 N(i,s) i는 참가자 번호 s 는 장르에 능력
// 2 3.0 1 0.2 3 0.1
// 3 1.0 2 0.5 1 0.2
//그리디 알고리즘 및 정렬
//각 참가자의 장르 능력을 젤 높은걸 뽀고 내림차순 정렬
//3.0 0.2 1

function Greedy(N, M, K, input) {
  const candidate_scores = [];
  for (let i = 1; i <= N; i++) {
    candidate_scores[i] = 0;
  }
  for (let i = 1; i <= M; i++) {
    const genre = input[i].split(" ").map(Number);
    for (let j = 0; j < N; j += 2) {
      if (genre[j + 1] > candidate_scores[genre[j]]) {
        //후보자들의 점수 비교 큰걸로
        candidate_scores[genre[j]] = genre[j + 1];
      }
    }
  }
  const scores = candidate_scores.sort((a, b) => b - a);
  const sum = scores.splice(0, K).reduce((acc, cur) => (acc += cur), 0); //합
  return sum;
}
const [N, M, K] = input[0].split(" ").map(Number);
//후보자들의 점수 저장 공간
const result = Greedy(N, M, K, input);
console.log(result.toFixed(1));
