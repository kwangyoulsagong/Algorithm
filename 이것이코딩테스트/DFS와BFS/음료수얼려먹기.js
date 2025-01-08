const n = 15;
const m = 14;
const map = `
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111
`
  .trim()
  .split("\n")
  .map((row) => row.split("").map(Number));
const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
let count = 0;
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const dfs = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const newx = x + dx[i];
    const newy = y + dy[i];

    if (
      newx >= 0 &&
      newy >= 0 &&
      newx < n &&
      newy < m &&
      !visited[newx][newy] &&
      map[newx][newy] != 1
    ) {
      dfs(newx, newy);
    }
  }
};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] != 1 && !visited[i][j]) {
      dfs(i, j);
      count++;
    }
  }
}
console.log(count);
