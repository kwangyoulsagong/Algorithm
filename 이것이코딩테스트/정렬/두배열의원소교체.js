const n = 5;
const k = 3;
const arr1 = [1, 2, 5, 4, 3];
const arr2 = [5, 5, 6, 6, 5];
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => b - a);
for (let i = 0; i < k; i++) {
  if (arr1[i] < arr2[i]) {
    [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
  }
}
const result = arr1.reduce((sum, value) => sum + value, 0);
console.log(result);
