function solution(s) {
  var answer = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let index = 0;
    let sentence = "";
    while (index < s.length) {
      let cnt = 1;
      while (s.slice(index, index + i) == s.slice(index + i, index + i + i)) {
        cnt++;
        index += i;
      }
      if (cnt > 1) {
        sentence += cnt;
      }
      const str = s.slice(index, index + i);
      sentence = sentence + str;
      index += i;
    }
    answer = Math.min(answer, sentence.length);
  }

  return answer;
}
