function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let result = 0;
  const weights = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    result += vowels.indexOf(word[i]) * weights[i] + 1;
  }

  return result;
}
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    result += vowels.indexOf(word[i]) * Math.floor(5 ** (5 - i) / 4) + 1;
  }

  return result;
}
