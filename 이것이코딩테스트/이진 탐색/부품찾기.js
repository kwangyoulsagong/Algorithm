// 일반 이진탐색
const n = 5;
const products = [8, 3, 7, 9, 2];
const m = 3;
const targets = [5, 7, 9];
products.sort((a, b) => a - b);
const BinarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return "yes";
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "no";
};
let result = "";
for (const target of targets) {
  result += BinarySearch(products, target, 0, n - 1) + " ";
}
console.log(result);

// // 리팩토링한 이진탐색
// const n = 5;
// const products = [8, 3, 7, 9, 2];
// const m = 3;
// const targets = [5, 7, 9];
// products.sort((a, b) => a - b);
// const BinarySearch = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     const mid = Math.floor(start + end + 1 / 2);
//     if (arr[mid] <= target) start = mid;
//     else end = mid - 1;
//   }

//   if (arr[start] == target) return "yes";
//   return "no";
// };
// let result = "";
// for (const target of targets) {
//   result += BinarySearch(products, target) + " ";
// }
// console.log(result);

// // 계수 정렬
// const n = 5;
// const products = [8, 3, 7, 9, 2];
// const m = 3;
// const targets = [5, 7, 9];
// const max = Math.max(...products);
// const countArr = Array(max + 1).fill(0);
// products.forEach((value) => (countArr[value] = 1));
// let result = "";
// for (const target of targets) {
//   result += countArr[target] > 0 ? "yes " : "no ";
// }
// console.log(result);

// // set 방법
// const n = 5;
// const products = [8, 3, 7, 9, 2];
// const m = 3;
// const targets = [5, 7, 9];
// const productSet = new Set(products);
// let result = "";
// for (const target of targets) {
//   result += productSet.has(target) ? "yes " : "no ";
// }
// console.log(result);
