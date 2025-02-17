const [nlr, ...rest] = input;
const [N, L, R] = nlr.split(" ").map(Number);
const map = rest.map((v) => v.split(" ").map(Number));

const bfs = (startx, starty, map, visited, flag) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[startx, starty]];
  const arr = [[startx, starty]]; // 연합의 좌표를 저장
  let cnt = 1;
  let sumPopulation = map[startx][starty];

  visited[startx][starty] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < N &&
        newy < N &&
        !visited[newx][newy]
      ) {
        const value = Math.abs(map[x][y] - map[newx][newy]);
        if (value >= L && value <= R) {
          queue.push([newx, newy]);
          visited[newx][newy] = true;
          arr.push([newx, newy]);
          cnt++;
          sumPopulation += map[newx][newy];
          flag.value = true; // 연합이 형성되었음을 표시
        }
      }
    }
  }

  return { cnt, sumPopulation, arr };
};

const move = (sumPopulation, cnt, arr, map) => {
  const changePopulation = Math.floor(sumPopulation / cnt);
  for (let [x, y] of arr) {
    map[x][y] = changePopulation;
  }
};

let result = 0;

while (true) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let flag = { value: false }; // 객체로 플래그 전달

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const { cnt, sumPopulation, arr } = bfs(i, j, map, visited, flag);
        if (arr.length > 1) {
          move(sumPopulation, cnt, arr, map);
        }
      }
    }
  }

  if (!flag.value) break; // 더 이상 연합이 없으면 종료
  result++;
}

console.log(result);
