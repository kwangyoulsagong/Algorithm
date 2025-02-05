const [n, m] = [3, 4];
const a = [1, 3, 5];
const b = [2, 4, 6, 8];
const arr = Array.from({ length: n + m }, () => 0);
let i = 0;
let j = 0;
let k = 0;
while (i < n || j < m) {
  if (j >= m || (i < n && a[i] <= b[j])) {
    arr[k] = a[i];
    i++;
  } else {
    arr[k] = b[j];
    j++;
  }
  k++;
}
console.log(arr.join(" "));
