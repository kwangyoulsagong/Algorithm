const d = Array(100).fill(0);
d[1] = 1;
d[2] = 1;
const n = 99;
const BottomUpFibonacci = (n) => {
  for (let i = 3; i < n + 1; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
};
BottomUpFibonacci(n);
console.log(d[n]);
