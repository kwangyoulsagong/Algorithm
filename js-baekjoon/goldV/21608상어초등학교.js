const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const n = input.shift();

const board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0)
);

const students = [];
const favorites = {};
for (let student of input.map((v) => v.split(" ").map(Number))) {
  students.push(student[0]);
  favorites[student[0]] = student.slice(1);
}
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const bfs = (target) => {
  const bestPosition = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] != 0) continue;
      let blank = 0;
      let favoriteFriendCount = 0;
      for (let k = 0; k < 4; k++) {
        const newx = i + dx[k];
        const newy = j + dy[k];
        if (newx >= 0 && newy >= 0 && newx < n && newy < n) {
          if (favorites[target].includes(board[newx][newy])) {
            favoriteFriendCount++;
          }
          if (board[newx][newy] == 0) {
            blank++;
          }
        }
      }
      bestPosition.push([i, j, favoriteFriendCount, blank]);
    }
  }
  bestPosition.sort((a, b) => {
    if (b[2] !== a[2]) return b[2] - a[2];
    if (b[3] !== a[3]) return b[3] - a[3];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  if (bestPosition) {
    const [x, y] = bestPosition.shift();
    board[x][y] = target;
  }
};
for (let i = 0; i < students.length; i++) {
  bfs(students[i]);
}

const overlap = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let count = 0;
    for (let k = 0; k < 4; k++) {
      const newx = i + dx[k];
      const newy = j + dy[k];
      if (newx >= 0 && newy >= 0 && newx < n && newy < n) {
        if (favorites[board[i][j]].includes(board[newx][newy])) {
          count++;
        }
      }
    }
    overlap.push(count);
  }
}

let answer = 0;
for (let i = 0; i < overlap.length; i++) {
  switch (overlap[i]) {
    case 4:
      answer += 1000;
      break;
    case 3:
      answer += 100;
      break;
    case 2:
      answer += 10;
      break;
    case 1:
      answer += 1;
      break;
    default:
      answer += 0;
  }
}
console.log(answer);
