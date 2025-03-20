function fillLock(lock, n) {
  const newLock = Array.from({ length: n * 3 }, () => Array(n * 3).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newLock[i + n][j + n] = lock[i][j];
    }
  }
  return newLock;
}

function rotate90Deg(value) {
  const n = value.length;
  const m = value[0].length;
  const rotate = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotate[j][n - i - 1] = value[i][j];
    }
  }
  return rotate;
}

function checkIsOpen(lock) {
  const n = Math.floor(lock.length / 3);

  for (let i = n; i < n * 2; i++) {
    for (let j = n; j < n * 2; j++) {
      if (lock[i][j] != 1) return false;
    }
  }
  return true;
}

function solution(key, lock) {
  const n = lock.length;
  const m = key.length;
  const newLock = fillLock(lock, n);
  for (let r = 0; r < 4; r++) {
    key = rotate90Deg(key);
    for (let i = 0; i < n * 2; i++) {
      for (let j = 0; j < n * 2; j++) {
        for (let x = 0; x < m; x++) {
          for (let y = 0; y < m; y++) {
            newLock[i + x][j + y] += key[x][y];
          }
        }
        if (checkIsOpen(newLock) === true) return true;
        for (let x = 0; x < m; x++) {
          for (let y = 0; y < m; y++) {
            newLock[i + x][j + y] -= key[x][y];
          }
        }
      }
    }
  }

  return false;
}
