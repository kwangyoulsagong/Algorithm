const n = 5;
let m = 8;
const k = 3;

const numbers = [2, 4, 5, 4, 6];
numbers.sort();
const first = numbers[n - 1];
console.log(first);
const second = numbers[n - 2];
let count = 0;
count = parseInt(m / (k + 1)) * k;
console.log(count);
count += m % (k + 1);

let result = 0;
result += count * first;
result += (m - count) * second;

console.log(result);
