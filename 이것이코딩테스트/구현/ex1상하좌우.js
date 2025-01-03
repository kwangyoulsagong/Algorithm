//여행가 A는 NXN 크기의 정사각형 공간 위에 서 있음
//공간으 1X1크기의 정사각형으로 나누어짐
// rkwkd 왼쪽 위 좌표는 (1,1)
//가장 오른쪽 아래 좌표는 (N,N)
//A는 상, 하, 좌, 우 방향으로 이동할 수 있음
//사작 좌표는 항상 1,1
//L,R,U,D
//여행자가 NXN 크기의 정사각형 공간을 벗어나는 움직음은 무시
//예시 n=5 R R R U D D 1,1-> 1,2 1,3 1,4 2,4 3,4로 도착
// 내풀이
const n = 5;
const route = ["R", "R", "R", "U", "D", "D"];

// const direction = {
//   L: [0, -1],
//   R: [0, 1],
//   U: [-1, 0],
//   D: [1, 0],
// };
// let point = [[0, 0]];
// const bfs = () => {
//   for (let i = 0; i < route.length; i++) {
//     let [startx, starty] = point.shift();

//     const [x, y] = direction[route[i]];
//     const newx = startx + x;
//     const newy = starty + y;
//     if (newx >= 0 && newy >= 0 && newx < n && newy < n) {
//       point.push([newx, newy]);
//     } else {
//       point.push([startx, starty]);
//     }
//   }
// };
// bfs();
// const [x, y] = point.shift();
// console.log(x + 1, y + 1);

// 책 풀이
// const dx = [0, 0, -1, 1];
// const dy = [-1, 1, 0, 0];
// const directon = ["L", "R", "U", "D"];
// let x = 0;
// let y = 0;
// for (const moves of route) {
//   for (let i = 0; i < 4; i++) {
//     if (moves == directon[i]) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];
//       if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
//         x = nx;
//         y = ny;
//       }
//     }
//   }
// }
// console.log(x + 1, y + 1);

// 고도화 버전
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const directon = ["L", "R", "U", "D"];
let x = 0;
let y = 0;
for (const moves of route) {
  const i = directon.indexOf(moves);
  const nx = x + dx[i];
  const ny = y + dy[i];
  if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
    x = nx;
    y = ny;
  }
}
console.log(x + 1, y + 1);
