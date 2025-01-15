const n = 2;
const arr = [
  ["홍길동", 95],
  ["이순신", 77],
];
arr.sort((a, b) => a[1] - b[1]);
const result = arr.map((v) => v[0]).join(" ");
console.log(result);
