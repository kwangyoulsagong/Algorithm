function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const graph = maps.map((v) => v.split(""));
  const bfs = (startx, starty, target) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    let queue = [[startx, starty, 0]];
    visited[startx][starty] = true;

    while (queue.length) {
      const [x, y, time] = queue.shift();
      if (graph[x][y] == target) return time;
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          graph[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, time + 1]);
        }
      }
    }
    return -1;
  };

  let startX, startY, leverX, leverY;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === "S") {
        [startX, startY] = [i, j];
      } else if (graph[i][j] === "L") {
        [leverX, leverY] = [i, j];
      }
    }
  }
  // S에서 L까지의 거리
  const timeToLever = bfs(startX, startY, "L");
  if (timeToLever === -1) return -1; // 레버에 도달할 수 없으면 탈출 불가

  // L에서 E까지의 거리
  const timeToExit = bfs(leverX, leverY, "E");
  if (timeToExit === -1) return -1; // 출구에 도달할 수 없으면 탈출 불가

  // 총 소요 시간 = S -> L + L -> E
  return timeToLever + timeToExit;
}
