const bfs = (arr, startx, starty) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const map = arr.map((v) => v.split(""));
  const queue = [[startx, starty]];
  const visited = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => false)
  );
  visited[startx][starty] = true;
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < 5 &&
        newy < 5 &&
        !visited[newx][newy]
      ) {
        const value = Math.abs(startx - newx) + Math.abs(starty - newy);
        if (map[newx][newy] == "X") {
          continue;
        } else if (map[newx][newy] == "P" && value <= 2) {
          return 0;
        } else {
          visited[newx][newy] = true;
          if (value < 2) queue.push([newx, newy]);
        }
      }
    }
  }

  return 1;
};

function solution(places) {
  const answer = [];
  for (let i = 0; i < places.length; i++) {
    let safe = 1;
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (places[i][x][y] == "P") {
          const value = bfs(places[i], x, y);
          if (value == 0) {
            safe = 0;
            break;
          }
        }
      }
    }
    answer.push(safe);
  }
  return answer;
}
