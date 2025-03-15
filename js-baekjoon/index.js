const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [p, m] = input.shift().split(" ").map(Number);

const arr = input.map((v) => v.split(" ").map(String));

const rooms = [];
const checkRanking = (level) => {
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].length < m) {
      const check = rooms[i][0][0];
      if (Math.abs(check - level) <= 10) {
        return i;
      }
    }
  }
  return null;
};
for (let i = 0; i < p; i++) {
  const [level, nickname] = arr[i];
  const check = checkRanking(level);
  if (check !== null) {
    rooms[check].push([parseInt(level), nickname]);
  } else {
    rooms.push([[parseInt(level), nickname]]);
  }
}
rooms.forEach((room) => {
  room.sort((a, b) => a[1].localeCompare(b[1]));
  console.log(room.length === m ? "Started!" : "Waiting!");
  room.forEach((player) => console.log(player.join(" ")));
});
