const [n, target] = [4, 6];
const arr = [19, 15, 10, 17];
const end = Math.max(...arr);
const BinarySearch = (arr, start, end, target) => {
  let result = 0;
  while (start <= end) {
    let count = 0;
    const mid = Math.floor((start + end) / 2);
    for (const v of arr) {
      if (mid < v) {
        count += v - mid;
      }
    }
    if (target > count) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
};

const result = BinarySearch(arr, 0, end, target);
console.log(result);
