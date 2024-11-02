const bfs = (target, favorites) => {
  let maxEmpty = -1;
  let maxFriends = -1;
  let bestPosition = [];
  let favoriteFriendCount = 0;
  let friendPosition = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] != 0) continue;
      let blank = 0;
      for (let k = 0; k < 4; k++) {
        const newx = i + dx[k];
        const newy = j + dy[k];
        if (newx >= 0 && newy >= 0 && newx < n && newy < n) {
          if (favorites.includes(board[newx][newy])) {
            favoriteFriendCount++;
          }
          if (board[newx][newy] == 0) {
            blank++;
          }
        }
      }
      bestPosition.push([i, j, favoriteFriendCount, blank]);
    }
  }
  bestPosition.sort((a, b) => {
    if (a[2] != b[2]) {
      return b[2] - a[2];
    }
    if (a[3] != b[3]) {
      return b[3] - a[3];
    }
    if (a[0] != b[0]) {
      return a[0] - b[0];
    }
  });
  console.log(bestPosition);
  if (bestPosition) {
    const [x, y] = bestPosition.shift();
    board[x][y] = target;
  }
};