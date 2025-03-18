function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    let current = number[i];
    while (k > 0 && stack[stack.length - 1] < current) {
      k--;
      stack.pop();
    }
    stack.push(current);
  }
  return stack.join("").slice(0, number.length - k);
}
