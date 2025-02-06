function solution(s) {
  if (s.length === 1) return 1;
  var answer = Infinity;
  const length = Math.floor(s.length / 2);
  for (let i = 1; i <= length; i++) {
    let sentence = "";
    let count = 1;
    let prev = s.slice(0, i);
    for (let j = i; j < s.length; j += i) {
      if (prev === s.slice(j, j + i)) count++;
      else {
        count >= 2 ? (sentence += count + prev) : (sentence += prev);
        prev = s.slice(j, j + i);
        count = 1;
      }
    }
    count >= 2 ? (sentence += count + prev) : (sentence += prev);
    answer = Math.min(answer, sentence.length);
  }
  return answer;
}
