// Run by Node.js
const readline = require("readline");

function solution(num, cardArr) {
  let count = 0;
  const map = new Map();
  let uniqueCount = 0;

  for (let i = 0; i < cardArr.length; i++) {
    if (map.has(cardArr[i])) {
      map.set(cardArr[i], map.get(cardArr[i]) + 1);
    } else {
      map.set(cardArr[i], 1);
      uniqueCount++;
    }
    count++;

    if (uniqueCount === num) {
      console.log(count);
      return;
    }
  }
  console.log(-1);
}
(async () => {
  const rl = readline.createInterface({ input: process.stdin });

  let num = 0;
  let card = 0;
  const cardArr = [];
  let isFirstLine = true;

  for await (const line of rl) {
    if (isFirstLine) {
      const inputArr = line.split(" ").map(Number);
      num = inputArr[0];
      card = inputArr[1];
      isFirstLine = false;
    } else {
      const cardValue = Number(line.trim());
      cardArr.push(cardValue);
      if (cardArr.length === card) {
        break;
      }
    }
  }

  solution(num, cardArr);

  rl.close();
  process.exit();
})();
