const [n, target] = [5, "Dongbin"];
const arr = ["Hanul", "Jonggu", "Dongbin", "Taeil", "Sangwook"];
// const sequential_search = () => {
//   for (let i = 0; i < n; i++) {
//     if (arr[i] == target) return i + 1;
//   }
//   return -1;
// };
// console.log(sequential_search());
const sequential_search = (arr, target) => {
  const index = arr.indexOf(target);
  return index !== -1 ? index + 1 : -1;
};

console.log(sequential_search(arr, target));
