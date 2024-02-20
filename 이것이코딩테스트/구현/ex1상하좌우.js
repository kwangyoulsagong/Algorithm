//여행가 A는 NXN 크기의 정사각형 공간 위에 서 있음
//공간으 1X1크기의 정사각형으로 나누어짐
// rkwkd 왼쪽 위 좌표는 (1,1)
//가장 오른쪽 아래 좌표는 (N,N)
//A는 상, 하, 좌, 우 방향으로 이동할 수 있음
//사작 좌표는 항상 1,1
//L,R,U,D
//여행자가 NXN 크기의 정사각형 공간을 벗어나는 움직음은 무시
//예시 n=5 R R R U D D 1,1-> 1,2 1,3 1,4 2,4 3,4로 도착

const n = 5;
const route = ["R", "R", "R", "U", "D", "D"];

//내풀이
let point = [1, 1];

function solution(n, route) {
  const dir = {
    //key값 데이터
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };
  let point = [1, 1];
  for (r of route) {
    const [x, y] = dir[r]; //key값으로 접근
    let nx = point[0] + x;
    let ny = point[1] + y;
    if (nx < 1 || (nx > n && ny < 1 && ny > n)) continue;

    point[0] = nx;
    point[1] = ny;
  }
  return point;
}
console.log(solution(n, route).join(" "));

// 책풀이
let x = 1;
let y = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const moveStep = ["L", "R", "U", "D"];
for (r of route) {
  let nx = 0;
  let ny = 0;
  for (let i = 0; i < moveStep.length; i++) {
    if (r == moveStep[i]) {
      nx = x + dx[i];
      ny = y + dy[i];
    }
  }
  if (nx < 1 || (nx > n && ny < 1 && ny > n)) continue;
  x = nx;
  y = ny;
}
console.log(x, y);
