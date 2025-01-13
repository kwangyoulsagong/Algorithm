const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const str = input.shift();
let count = 0;
let min = Infinity;
let max = 0;
const findOdd = (str) => {
  return [...str].reduce(
    (count, digit) => count + (parseInt(digit) % 2 == 1 ? 1 : 0),
    0
  );
};
const slice = (str, count) => {
  count += findOdd(str);

  if (str.length >= 3) {
    for (let i = 1; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        const a = str.slice(0, i);
        const b = str.slice(i, j);
        const c = str.slice(j);
        const total = parseInt(a) + parseInt(b) + parseInt(c);
        slice(total.toString(), count);
      }
    }
  } else if (str.length == 2) {
    const total = parseInt(str[0]) + parseInt(str[1]);
    slice(total.toString(), count);
  } else {
    min = Math.min(min, count);
    max = Math.max(max, count);
  }
};
slice(str, count);
console.log(min, max);
