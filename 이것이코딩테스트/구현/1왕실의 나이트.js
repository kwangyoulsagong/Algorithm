const input = "c2";
const parse = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};
let row = parseInt(input[1]) - 1;
let col = parse[input[0]];

const steps = [
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
];
let count = 0;
for (let dir of steps) {
  const [x, y] = dir;
  const newx = row + x;
  const newy = col + y;
  if (newx >= 0 && newy >= 0 && newx < 8 && newy < 8) {
    count++;
  }
}
console.log(count);
