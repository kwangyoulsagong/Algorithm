const n = 5;
const m = 6;
const map = `
101010
111111
000001
111111
111111
`
  .trim()
  .split("\n")
  .map((row) => row.split("").map(Number));

const queue = [[0, 0]];
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const bfs = () => {
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < n &&
        newy < m &&
        map[newx][newy] == 1
      ) {
        map[newx][newy] = map[x][y] + 1;
        queue.push([newx, newy]);
      }
    }
  }
};
bfs();
console.log(map[n - 1][m - 1]);
