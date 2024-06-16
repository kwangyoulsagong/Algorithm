function solution(stones, k) {
  let start = 1;
  let end = 200000000;

  while (start <= end) {
    let cnt = 0;
    let mid = Math.floor((start + end) / 2);
    for (let s of stones) {
      if (s - mid <= 0) {
        cnt++;
      } else {
        cnt = 0;
      }
      if (cnt >= k) {
        break;
      }
    }
    if (cnt >= k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
