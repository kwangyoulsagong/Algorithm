const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
//쩰리는 점프하는것을 좋아해서 점프왕 쪨리다.
//새로운 점프 하는것을 해보고싶어함
//새로운 점프게임 조건
//가로 세로 칸수가 같은 정사각형 의 구역 내부에서만 점프 가능 이 배누에서 나가면 사망
//이동가능한 방향은 오른쪽 그리고 아래 가 끝
// 가장 오른쪽, 가장 아래칸 도달하면 승리
// 한번에 이동할 수 있는 칸의수는 현재 밟고 있는칸에 쓰여 있는 수만큼 이동가능
//끝점에 도달할수있으면 "HaruHaru"
//없으면 "Hing"
//게임판 승리 지점은 끝점 -1이다
let N = n; //게임구역의 크기

const map = arr.map((row) => row.split(" ").map(Number)); // 맵으로 감싼다
// [ [ 1, 1, 10 ], [ 1, 5, 1 ], [ 2, 2, -1 ] ]
const dfs = () => {
  const isVisited = Array.from(
    { length: N },
    (
      coloumn //방분 체크 일단 배열에 2차원 공간 false fh
    ) => Array.from({ length: N }, (row) => false)
  );
  const start = [[0, 0]]; // 시작 점
  while (start.length) {
    let [y, x] = start.pop();

    let route = map[y][x];

    if (route < 0) {
      return "HaruHaru";
    }
    if (y + route < N && !isVisited[y + route][x]) {
      start.push([y + route, x]);
      isVisited[y + route][x] = true;
    }
    if (x + route < N && !isVisited[y][x + route]) {
      start.push([y, x + route]);
      isVisited[x][y + route] = true;
    }
  }

  return "Hing";
};
console.log(dfs());
