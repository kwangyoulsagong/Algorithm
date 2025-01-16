const [n, target] = [10, 7];

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// const BinarySearch = (arr, start, end, target) => {
//   if (start > end) return -1;
//   const mid = Math.floor((start + end) / 2);
//   if (arr[mid] == target) {
//     return mid;
//   } else if (arr[mid] > target) {
//     return BinarySearch(arr, start, end - 1, target);
//   } else {
//     return BinarySearch(arr, mid + 1, end, target);
//   }
// };

const BinarySearch = (arr, start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
const result = BinarySearch(arr, 0, n - 1, target);
if (result == -1) {
  console.log("원소가 존재하지 않습니다.");
} else {
  console.log(result + 1);
}
