const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
const quickSort = (arr, start, end) => {
  if (start >= end) return;
  const p = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    //피벗보다 큰 데이터 찾을 때까지 탐색
    while (left <= end && arr[p] >= arr[left]) {
      left++;
    }
    while (right > start && arr[p] <= arr[right]) {
      right--;
    }
    if (left > right) {
      [arr[p], arr[right]] = [arr[right], arr[p]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);
