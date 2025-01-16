const n = 5;
const products = [8, 3, 7, 9, 2];
const m = 3;
const targets = [5, 7, 9];
const countArr = Array(targets[targets.length - 1]).fill(0);
console.log(countArr);
products.sort((a, b) => a - b);
// const BinarySearch = (arr, target, start, end) => {
//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return "yes";
//     } else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return "no";
// };
// let result = "";
// for (const target of targets) {
//   result += BinarySearch(products, target, 0, n - 1) + " ";
// }
// console.log(result);
for (const target of targets) {
  if (target == products.includes(target)) {
    console.log(target);
  }
}
