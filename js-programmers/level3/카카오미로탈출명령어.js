function solution(n, m, x, y, r, c, k) {
  var answer = "";
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const direction = ["d", "l", "r", "u"];
  const bfs = (startx, starty, endx, endy, k) => {
    const minDist = Math.abs(startx - endx) + Math.abs(starty - endy);
    if (minDist > k || (k - minDist) % 2 != 0) return "impossible";
    const queue = [[startx, starty, "", 0]];
    const visited = Array.from({ length: n + 1 }, () =>
      Array.from({ length: m + 1 }, () => Array(k).fill(false))
    );
    visited[startx][starty][0];

    while (queue.length > 0) {
      const [x, y, path, dist] = queue.shift();
      if (x === endx && y === endy && dist === k) return path;
      for (let i = 0; i < 4; i++) {
        const newx = x + dx[i];
        const newy = y + dy[i];
        const move = direction[i];
        if (
          newx >= 1 &&
          newy >= 1 &&
          newx < n + 1 &&
          newy < m + 1 &&
          !visited[newx][newy][dist + 1]
        ) {
          let newPath = path + move;
          queue.push([newx, newy, newPath, dist + 1]);
          visited[newx][newy][dist + 1] = true;
        }
      }
    }
    return "impossible";
  };

  answer = bfs(x, y, r, c, k);
  return answer;
}
