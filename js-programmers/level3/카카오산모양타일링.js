function solution(n, tops) {
  var answer = 0;
  let ADp = Array(n + 1).fill(0);
  let BDp = Array(n + 1).fill(0);
  ADp[1] = 1;
  BDp[1] = tops[0] === 1 ? 3 : 2;

  for (let i = 2; i < n + 1; i++) {
    ADp[i] = (ADp[i - 1] + BDp[i - 1]) % 10007;
    if (tops[i - 1] === 1) {
      BDp[i] = ADp[i - 1] * 2 + ((BDp[i - 1] * 3) % 10007);
    } else {
      BDp[i] = (ADp[i - 1] + BDp[i - 1] * 2) % 10007;
    }
  }

  answer = (ADp[n] + BDp[n]) % 10007;
  return answer;
}
