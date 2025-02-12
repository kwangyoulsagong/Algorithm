const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const [r, c] = input[5].split(" ").map(Number);

const dfs = (arr, r, c, apple, move) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  if (move > 3) {
    return false;
  }
  if (apple >= 2) {
    return true;
  }
  let original = arr[r][c];
  arr[r][c] = -1;
  for (let i = 0; i < 4; i++) {
    const newx = r + dx[i];
    const newy = c + dy[i];
    if (
      newx >= 0 &&
      newy >= 0 &&
      newx < 5 &&
      newy < 5 &&
      arr[newx][newy] != -1
    ) {
      if (arr[newx][newy] === 1) {
        if (dfs(arr, newx, newy, apple + 1, move + 1)) {
          return true;
        }
      } else {
        if (dfs(arr, newx, newy, apple, move + 1)) {
          return true;
        }
      }
    }
  }
  arr[r][c] = original;
  return false;
};

console.log(dfs(arr, r, c, 0, 0) ? 1 : 0);
