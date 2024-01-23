function solution(a, b) {
  var answer = 0;
  answer = Math.max(String(a) + String(b), String(b) + String(a));

  return answer;
}
