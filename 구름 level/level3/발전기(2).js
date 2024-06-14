const readline = require("readline");

function bfs(n, arr, m) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  let answer = {};

  function check(x, y) {
    let now = arr[x][y];
    let queue = [[x, y, now]];
    let max_val = 0;

    visited[x][y] = true;

    while (queue.length > 0) {
      const [cx, cy, now] = queue.shift();
      max_val += 1;

      for (let j = 0; j < 4; j++) {
        const nx = cx + dx[j];
        const ny = cy + dy[j];
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < n &&
          !visited[nx][ny] &&
          arr[nx][ny] === now
        ) {
          queue.push([nx, ny, now]);
          visited[nx][ny] = true;
        }
      }
    }

    if (max_val >= m) {
      if (!answer[now]) {
        answer[now] = 0;
      }
      answer[now] += 1;
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (!visited[x][y]) {
        check(x, y);
      }
    }
  }

  let entries = Object.entries(answer);
  let sortedEntries = entries.sort((a, b) => {
    if (b[1] === a[1]) {
      return parseInt(b[0]) - parseInt(a[0]);
    }
    return parseInt(b[1]) - parseInt(a[1]);
  });

  console.log(sortedEntries[0][0]);
}

(async () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  for await (const line of rl) {
    input.push(line.trim());
  }

  const [n, m] = input[0].split(" ").map(Number);
  const array = input.slice(1).map((line) => line.split(" ").map(Number));

  bfs(n, array, m);

  process.exit(0);
})();
