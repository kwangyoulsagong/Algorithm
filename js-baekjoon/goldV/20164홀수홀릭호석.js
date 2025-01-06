const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
let [numbers] = input;

let max = 0;
let min = Infinity;

function slice(numbers, count) {
  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i]) % 2 != 0) {
      count++;
    }
  }

  if (numbers.length == 1) {
    min = Math.min(min, count);
    max = Math.max(max, count);
    return;
  }

  if (numbers.length >= 3) {
    for (let i = 1; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        const a = numbers.substring(0, i);
        const b = numbers.substring(i, j);
        const c = numbers.substring(j);
        const value = parseInt(a) + parseInt(b) + parseInt(c);
        slice(value.toString(), count);
      }
    }
  } else if (numbers.length == 2) {
    const a = numbers[0];
    const b = numbers[1];
    const value = parseInt(a) + parseInt(b);
    slice(value.toString(), count);
  }
}
slice(numbers, 0);

console.log(min, max);
