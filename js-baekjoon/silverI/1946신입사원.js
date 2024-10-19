const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

function greedy(applicants) {
  let pass = 1; // 서류 성적이 젤 높은애에 면접 순위가 기준 얘보다 낮으면 다 패스 이래서 그리디
  let cur = applicants[0].interviewRank;
  for (let i = 0; i < applicants.length; i++) {
    if (cur > applicants[i].interviewRank) {
      // 현재 기준보다 낮으면 핸재 기준으 업데이트
      cur = applicants[i].interviewRank;
      pass++;
    }
  }
  console.log(pass);
}
let index = 0;
const T = parseInt(input[index++]); // 테스트 케이스 개수

// 테스트 케이스 루프
for (let t = 0; t < T; t++) {
  const N = parseInt(input[index++]); // 각 테스트 케이스마다 지원자 수
  let applicants = [];

  // N명의 지원자 정보 입력 받기
  for (let i = 0; i < N; i++) {
    const [documentRank, interviewRank] = input[index++].split(" ").map(Number);
    applicants.push({ documentRank, interviewRank });
  }
  applicants.sort((a, b) => a.documentRank - b.documentRank);
  greedy(applicants);
}
