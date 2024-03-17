const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input.shift().split(" ").map(Number));
}
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];
const visit = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => [])
);
const horse_info = Array.from({ length: m + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [r, c, dir] = input.shift().split(" ").map(Number);
  horse_info[i] = [i, r - 1, c - 1, dir];
  visit[r - 1][c - 1].push(i);
}

function bottomHorse(num, r, c) {
  const state = visit[r][c];
  return state[0] === num;
}

function reverse_dir(direction) {
  if (direction === 1) return 2;
  if (direction === 2) return 1;
  if (direction === 3) return 4;
  return 3;
}

function blueBoard(r, c, dir) {
  const bdir = reverse_dir(dir);
  const bx = r + dx[bdir];
  const by = c + dy[bdir];
  if (bx < 0 || by < 0 || bx >= n || by >= n || board[bx][by] === 2) {
    return true;
  }
  return false;
}

function move(r, c, dir) {
  let nx = r + dx[dir];
  let ny = c + dy[dir];
  if (nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny] === 2) {
    if (blueBoard(r, c, dir)) return [r, c, reverse_dir(dir)];
    else return move(r, c, reverse_dir(dir));
  }
  if (board[nx][ny] === 1) {
    const revHorses = visit[r][c].reverse();
    for (const value of revHorses) {
      visit[nx][ny].push(value);
      const [hNum, , , d] = horse_info[value];
      horse_info[value] = [hNum, nx, ny, d];
    }
    visit[r][c] = [];
  } else if (board[nx][ny] === 0) {
    for (const value of visit[r][c]) {
      visit[nx][ny].push(value);
      const [hNum, , , d] = horse_info[value];
      horse_info[value] = [hNum, nx, ny, d];
    }
    visit[r][c] = [];
  }
  return [nx, ny, dir];
}

function dfs() {
  for (let i = 1; i <= m; i++) {
    const [horse_num, r, c, dir] = horse_info[i];
    if (!bottomHorse(horse_num, r, c)) continue;
    const [nx, ny, ndir] = move(r, c, dir);
    horse_info[horse_num] = [horse_num, nx, ny, ndir];
  }
}

function is_finish() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visit[i][j].length >= 4) return true;
    }
  }
  return false;
}

let answer = -1;
let time = 1;
while (time <= 1000) {
  dfs();
  if (is_finish()) {
    answer = time;
    break;
  }
  time++;
}
console.log(answer);
