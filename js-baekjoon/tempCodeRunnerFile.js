const result = [];
for (let i = 0; i < n; i++) {
  result.push([days[0][i], days[1][i]]);
}
result.sort((a, b) => a[1] - b[1]);