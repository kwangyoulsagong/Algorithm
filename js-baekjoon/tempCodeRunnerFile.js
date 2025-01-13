const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const str = input.shift();
let count = 0;
let min = Infinity;
let max = 0;
const findOdd = (str, count) => {
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 == 1) {
      count++;
    }
  }

  return count;
};
const slice = (str, count) => {
  const values = findOdd(str, count);

  if (str.length >= 3) {
    for (let i = 1; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        const a = str.slice(0, i);
        const b = str.slice(i, j);
        const c = str.slice(j);
        const total = parseInt(a) + parseInt(b) + parseInt(c);
        slice(total.toString(), values);
      }
    }
  } else if (str.length == 2) {
    const total = parseInt(str[0]) + parseInt(str[1]);
    slice(total.toString(), values);
  } else {
    min = Math.min(min, values);
    max = Math.max(max, values);
  }
};
slice(str, count);
console.log(min, max);
