function solution(wallpaper) {
  var answer = [];
  const x = [];
  const y = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] == "#") {
        x.push(i);
        y.push(j);
      }
    }
  }

  x.sort((a, b) => b - a);
  y.sort((a, b) => b - a);
  answer.push(x[y.length - 1], y[x.length - 1], x[0] + 1, y[0] + 1);

  return answer;
}
