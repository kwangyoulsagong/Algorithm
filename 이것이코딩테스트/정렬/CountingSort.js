const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const count = [...Array(Math.max(...arr) + 1).fill(0)];
arr.forEach((num) => count[num]++);

let sorted = "";
for (let i = 0; i < count.length; i++) {
  sorted += i.toString().repeat(count[i]);
}
console.log([...sorted].map(Number));
