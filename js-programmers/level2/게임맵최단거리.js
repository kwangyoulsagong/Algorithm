function solution(maps) {
  var answer = 1;
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  queue.push([0, 0]);
  maps[0][0] = 0;
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (nx >= 0 && ny >= 0 && nx <= n && ny <= m && maps[nx][ny] == 1) {
          if (nx == n && ny == m) {
            return ++answer;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}
