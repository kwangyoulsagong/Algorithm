function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let result = 0;
  const weights = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    result += vowels.indexOf(word[i]) * weights[i] + 1;
  }

  return result;
}
