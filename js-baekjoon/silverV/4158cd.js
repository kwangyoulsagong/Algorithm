const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let index = 0;

while (true) {
  const [n, m] = input[index++].split(" ").map(Number);
  if (n === 0 && m === 0) break; // 종료 조건

  // 상근이의 CD 번호 입력
  const sang = [];
  for (let i = 0; i < n; i++) {
    sang.push(parseInt(input[index++]));
  }

  let count = 0;

  // 선영이의 CD 번호를 하나씩 읽으면서 이진 탐색 수행
  const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return true; // 찾음
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false; // 못 찾음
  };

  for (let i = 0; i < m; i++) {
    const sunCD = parseInt(input[index++]);
    if (binarySearch(sang, sunCD)) {
      count++;
    }
  }

  console.log(count);
}
