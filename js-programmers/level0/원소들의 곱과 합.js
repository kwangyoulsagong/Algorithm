function solution(num_list) {
  var answer = 0;
  const add = num_list.reduce((sum, i) => (sum += i), 0);
  const multi = num_list.reduce((sum, i) => (sum *= i), 1);

  console.log(multi);
  return multi < Math.pow(add, 2) ? 1 : 0;
}
