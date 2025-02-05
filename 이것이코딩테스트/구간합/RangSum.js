const n = 5;
const data = [10, 20, 30, 40, 50];
let sum = 0;
const prefix_sum = [0];
for (let i = 0; i < data.length; i++) {
  sum += data[i];
  prefix_sum.push(sum);
}
console.log(prefix_sum[4] - prefix_sum[3 - 1]);
