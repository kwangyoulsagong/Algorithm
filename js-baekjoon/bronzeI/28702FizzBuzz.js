const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const arr = input.map(String);
for (let i = 0; i < 3; i++) {
  if (isNaN(Number(arr[i]))) continue;
  else {
    const num = Number(arr[i]);
    const target = num + 3 - i;
    if (target % 3 === 0 && target % 5 === 0) console.log("FizzBuzz");
    else if (target % 3 === 0 && target % 5 !== 0) console.log("Fizz");
    else if (target % 3 !== 0 && target % 5 === 0) console.log("Buzz");
    else console.log(target);
    break;
  }
}
