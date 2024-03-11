const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
// let [n, ...arr] = fs.readFileSync(file).toString().trim().split("\n");
let input = fs.readFileSync(file).toString().trim().split("\n");
//철수 토마토 농장에서는 토마토를 보관하는 큰 차고가 있음
//격자 모양 상자의 칸에 하나씩 넣어서 창고에 보관 M*N
//창고에 잘익은 토마토도 있고 잘안익은 토마토들도 있을수 있다
//보관 후 하루 지나면, 익은 토마토들의 인접한 곳에 있는 이직 않은 토마토들은 익은 토마토의 영향을 받아 익음
// 하나의 토마토의 인접한곳 왼, 오, 앞, 뒤 네 방향에 있는 토마토를 의미
//대각선 방향에 있는 토마토들에게는 영향을 주지 못함, 토마토가 혼자 저절로 익는 경우는 없음
//철수는 창고에 보관된 토마토들이 며칠이 지나면 다 익게되는지, 그 최소 일수를 알고싶다

//따라서 토마토 창고에 보관하는 격자 모양의 상자들의 크기와 익은 토마토들과 익지 않은 토마토들의 정보가 주어졌을때, 며칠이 지나면 토마토들의 모두 익는지,
//그 최소 일수를 구하는 프로그램을 작성
//단 상자의 일부 칸에는 토마토가 들어있지 않을 수도 있다

//MxN 행렬
//1은익은 토마토 0은 덜익은 토마토 -1은 토마토가 들어있지 않은 칸

function solution(input) {
  const [m, n] = input[0].split(" ").map(Number);
  let box = [];
  let queue = [];
  for (let i = 1; i <= n; i++) {
    let arr = input[i].split(" ").map(Number);
    box.push(arr);
    arr.forEach((tomato, index) => {
      if (tomato == 1) {
        queue.push([i - 1, index]);
      }
    });
  }
  let day = 0;
  function bfs() {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let prevIndex = 0;
    while (true) {
      let fulltomato = queue.length;
      let change = 0;
      for (let i = prevIndex; i < fulltomato; i++) {
        const [x, y] = queue[i];
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
          if (!box[nx][ny]) {
            change = 1; // 전날 익은 토마토가 오늘 다른 토마토를 익게 했다면 change 변수 증가
            box[nx][ny] = day + 1;
            queue.push([nx, ny]);
          }
        }
      }
      if (!change) break;
      day++;
      prevIndex = fulltomato;
    }
  }

  bfs();
  for (let i = 0; i < n; i++) {
    if (box[i].includes(0)) {
      return -1;
    }
  }
  return day;
}

console.log(solution(input));
