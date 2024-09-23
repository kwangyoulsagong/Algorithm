const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 정사각형으로 이루어져 있는 섬과 바다 지도가 주어진다 섬의 개수 새는 프로그램 작성
// 한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형
// 두 정사각형이 같은 섬에 있으려면, 한 정사각형이 다른 정삭각형으로 걸어서 갈 수 있는 경로가 있어야 한다.
// 지도는 바다로 둘러 싸여있음, 지도 밖으로 나갈 수 없음
let index = 0;

while (true) {
  const [w, h] = input[index++].split(" ").map(Number);
  // 입력이 끝나면 종료
  if (w === 0 && h === 0) break;
  let map = [];
  for (let i = 0; i < h; i++) {
    map.push(input[index++].split(" ").map(Number));
  }

  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false)
  );
  // 8방향 이동을 위한 dx, dy 배열
  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  const bfs = (startx, starty) => {
    const queue = [[startx, starty]];
    visited[startx][starty] = true;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < h &&
          ny < w &&
          map[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };
  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] == 1 && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }
  console.log(count);
}
