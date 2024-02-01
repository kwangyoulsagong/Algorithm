const n = 3;
const m = 3;
const arr = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];
let result = 0;
// for (let i = 0; i < n; i++) {
//   let min = 10001;
//   for (let j = 0; j < m; j++) {
//     min = Math.min(min, arr[i][j]);
//   }
//   result = Math.max(min);
// }
// console.log(result);
//bestSolution
arr.forEach((list) => {
  result = Math.max(Math.min(...list));
});
console.log(result);
