function solution(num_list) {
  var answer = 0;
  const even = [];
  const odd = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      even.push(num_list[i]);
    } else {
      odd.push(num_list[i]);
    }
  }
  const evenadd = even.map(String).reduce((sum, i) => (sum += i));
  const oddadd = odd.map(String).reduce((sum, i) => (sum += i));
  answer = parseInt(oddadd) + parseInt(evenadd);
  return answer;
}
