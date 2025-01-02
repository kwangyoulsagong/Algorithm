let n = 25;
const k = 3;
let count = 0;
while (n > 1) {
  if (n % k != 0) {
    n = n - 1;
    count++;
  } else {
    n = n / k;
    count++;
  }
}
console.log(count);
