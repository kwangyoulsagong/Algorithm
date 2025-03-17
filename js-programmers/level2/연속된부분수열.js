function solution(sequence, k) {
  var answer = [];
  let start = 0;
  let min = Infinity;
  let sum = 0;
  for (let end = 0; end < sequence.length; end++) {
    sum += sequence[end];
    while (sum > k) {
      sum -= sequence[start];
      start++;
    }
    if (sum === k) {
      if (end - start < min) {
        min = end - start;
        answer = [start, end];
      }
    }
  }
  return answer;
}
