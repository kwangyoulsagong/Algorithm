const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const [r, c] = input[5].split(" ").map(Number);

const bfs = (arr, r, c, apple, move) => {
  const queue = [[r, c, apple, move]];
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  // 방문한 위치를 기록할 배열
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  visited[r][c] = true;

  while (queue.length > 0) {
    const [x, y, apples, count] = queue.shift();

    // 3번을 초과한 이동은 의미 없으므로 종료
    if (count > 3) {
      continue;
    }
    // 사과를 2개 이상 먹었다면 1을 반환
    if (apples >= 2) {
      return 1;
    }

    // 상, 하, 좌, 우로 탐색
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];

      // 새로운 위치가 유효하고, 방문하지 않은 칸이라면
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < 5 &&
        newy < 5 &&
        !visited[newx][newy] &&
        arr[newx][newy] !== -1
      ) {
        visited[newx][newy] = true; // 방문 처리

        // 사과가 있는 칸이라면
        if (arr[newx][newy] === 1) {
          queue.push([newx, newy, apples + 1, count + 1]);
        } else {
          queue.push([newx, newy, apples, count + 1]);
        }
      }
    }
  }
  return 0;
};

console.log(bfs(arr, r, c, 0, 0));
