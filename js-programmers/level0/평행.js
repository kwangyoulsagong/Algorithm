function solution(dots) {
  const slope = (dot1, dot2) => (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);

  const pairs = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (let i = 0; i < pairs.length; i++) {
    const slope1 = slope(dots[pairs[i][0]], dots[pairs[i][1]]);
    const slope2 = slope(dots[pairs[i][2]], dots[pairs[i][3]]);

    if (slope1 === slope2) {
      return 1;
    }
  }
  return 0;
}
