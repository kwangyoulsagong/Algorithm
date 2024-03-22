function solution(numbers, target) {
  var answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    console.log(dfs(index + 1, sum + numbers[index]));
    console.log(dfs(index + 1, sum + numbers[index]));
  }
  return answer;
}
