const n = 5;
const products = [8, 3, 7, 9, 2];
const m = 3;
const targets = [5, 7, 9];
const max = Math.max(...products);
const countArr = Array(max + 1).fill(0);
products.forEach((value) => (countArr[value] = 1));
let result = "";
for (const target of targets) {
  result += countArr[target] > 0 ? "yes " : "no ";
}
console.log(result);
