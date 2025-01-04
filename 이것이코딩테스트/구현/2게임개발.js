const n = 4;
const m = 4;

let [x, y, dir] = [1, 1, 0];

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
let count = 1;
visited[x][y] = true;
const solution = () => {
  while (true) {
    let move = false;
    for (let i = 0; i < 4; i++) {
      dir = (dir + 3) % 4; // 왼쪽으로 회전
      const newx = x + dx[dir];
      const newy = y + dy[dir];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < m &&
        !visited[newx][newy] &&
        map[newx][newy] != 1
      ) {
        x = newx;
        y = newy;
        visited[x][y] = true;
        count++;
        move = true;
        break;
      }
    }
    if (!move) {
      const backx = x - dx[dir];
      const backy = y - dy[dir];
      if (map[backx][backy] === 1) {
        break;
      }
      x = backx;
      y = backy;
    }
  }
};
solution();
console.log(count);
