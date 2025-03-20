const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [game, win] = input[0].split(" ").map(Number);

function binarySearch(start, end, game, win, percent) {
  let result = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const check = Math.floor((100 * (win + mid)) / (game + mid));
    if (check > percent) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

function Solution(game, win) {
  const percent = Math.floor((100 * win) / game);
  let start = 0;
  let end = game;
  if (percent >= 99) {
    console.log(-1);
  } else {
    const answer = binarySearch(start, end, game, win, percent);
    console.log(answer);
  }
}

Solution(game, win);
