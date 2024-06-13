const readline = require("readline");

function rain(n, m, height, daysRain) {
  const map = new Map();
  const visited = new Map();

  for (let i = 1; i <= n; i++) {
    map.set(i, height[i - 1]);
    visited.set(i, false);
  }

  let days = 0;

  daysRain.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      visited.set(i, true);
      if (map.has(i)) {
        map.set(i, map.get(i) + 1);
      }
    }

    if ((days + 1) % 3 === 0 && days !== 0) {
      for (let [key, value] of map.entries()) {
        if (visited.get(key)) {
          map.set(key, value - 1);
          visited.set(key, false);
        }
      }
    }

    days++;
  });

  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(map.get(i));
  }

  console.log(result.join(" "));
}

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n = 0;
  let m = 0;
  let height = [];
  const daysRain = [];

  let isFirstLine = true;
  let isSecondLine = false;

  for await (const line of rl) {
    if (isFirstLine) {
      const [numHouses, numDays] = line.trim().split(" ").map(Number);
      n = numHouses;
      m = numDays;
      isFirstLine = false;
    } else if (!isSecondLine) {
      height = line.trim().split(" ").map(Number);
      isSecondLine = true;
    } else {
      const [start, end] = line.trim().split(" ").map(Number);
      daysRain.push([start, end]);
      if (daysRain.length === m) {
        break;
      }
    }
  }

  rain(n, m, height, daysRain);
  process.exit(0);
})();
