const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//십자가는 가운대 * 있다
//상하 좌우 방향을로 모두 같은 * 모양
//십자가 크기는 가운데 중심으로 상하 좌우 있는 * 개수  십자가 크기는 1보다 크거나 같다
// *     *         *
//***    *         *
// *   *****       *
//       *      *******
//       *         *
//                 *
//                 *
//각각 크기가 1 2 3인 십자가이다
//크기 nxm 이차원 배열
//.,* 이루어짐
//십자가만 이용해서 격자판 만들기
//십자가 서로 겹쳐도됨
// 사용할 수 있는 십자가는 nxm 이하 이다
// 격자판 행은 위에서부터 1번 열은 왼쪽에서 부터 1번
// 격자판 크기 : n,m  필요한 십자가 수 k  그려야하는 십자가의 정보 x(십자가 중심 행),y( 십자가 중심 열),s(십자가 크기) 한줄 하나 씩 출력
const [n, m] = input[0].split(" ").map(Number); // 숫자만 갖고옴
let board = input.splice(1).map((v) => v.split(""));
let visited = Array.from({ length: n }, () => Array(m).fill(false)); //방문 여부 배열
const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let size = 0;
    //격자판에 별이있는지 확인
    if (board[i][j] == "*") {
      //k만큼 떨어진곳에 *이 있는지
      for (let k = 1; ; k++) {
        if (i - k >= 0 && j - k >= 0 && i + k < n && j + k < m) {
          if (
            board[i - k][j] == "*" &&
            board[i + k][j] == "*" &&
            board[i][j - k] == "*" &&
            board[i][j + k] == "*"
          ) {
            size = k; // 크기 업데이트
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
    //*중심으로 size 크기의 도형이 있다면 answer에 추가하고 방문처리
    if (size > 0) {
      visited[i][j] = true;
      for (let k = size; k > 0; k--) {
        answer.push([i + 1, j + 1, k]);
        visited[i + k][j] = true;
        visited[i - k][j] = true;
        visited[i][j + k] = true;
        visited[i][j - k] = true;
      }
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] == "*" && visited[i][j] != true) {
      console.log(-1);
    }
  }
}
console.log(answer.length);
console.log(answer.map((v) => v.join(" ")).join("\n"));
// [(1, 3)], [2, 2], [2, 3], [(2, 4)], [3, 3];
// [1, 4], [2, 3], [2, 4][(2, 5)], [3, 4];
