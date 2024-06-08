function solution(num_list) {
  var answer = num_list;
  let a = num_list[num_list.length - 1];
  let b = num_list[num_list.length - 2];
  if (a > b) {
    answer.push(a - b);
  } else {
    answer.push(a * 2);
  }

  return answer;
}
