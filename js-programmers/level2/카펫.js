function solution(brown, yellow) {
  //brown 10 yellow 2
  let answer = [0, 0];
  const area = brown + yellow; //12
  for (let width = area - 1; width > 0; width--) {
    height = parseInt(area / width);
    let y = (width - 2) * (height - 2);
    let b = area - y;
    if (y == yellow && b == brown) {
      answer[0] = width;
      answer[1] = height;
      break;
    }
  }

  return answer;
}
