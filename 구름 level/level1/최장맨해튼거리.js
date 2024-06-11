// Run by Node.js
const readline = require("readline");
function solution(line) {
  const inputArr = line.split(" ").map(Number);
  inputArr.sort((a, b) => a - b);
  const answer =
    Math.abs(inputArr[0] - inputArr[3]) + Math.abs(inputArr[1] - inputArr[2]);
  console.log(answer);
}

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    solution(line);
    rl.close();
  }

  process.exit();
})();
