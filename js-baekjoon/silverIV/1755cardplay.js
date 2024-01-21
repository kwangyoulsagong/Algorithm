const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//79 영어로 sevennine 80은 eightzero 사전순으로 정렬 하면 80먼저 옴
const numtostr = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
};
const temp = [];
function numberToString(index) {
  index = String(index);
  let str = "";
  for (let i = 0; i < index.length; i++) {
    str += numtostr[Number(index[i])]; //숫자를 영어로
  }
  return str;
}
const result = [];
const [start, end] = input[0].split(" ").map(Number);
for (let i = start; i <= end; i++) {
  temp.push(i);
}

temp.sort((a, b) => {
  const strA = numberToString(a);
  const strB = numberToString(b); //사전순 배열
  return strA.localeCompare(strB);
});

for (let i = 0; i < temp.length; i++) {
  result.push(temp[i]);
}
let answer = "";
for (let i = 0; i < temp.length; i++) {
  answer += temp[i];
  if ((i + 1) % 10 !== 0 || i !== temp.length - 1) {
    //10의 배수가 아니면 계속 ㄱㄱ
    answer += " ";
  }
  if ((i + 1) % 10 === 0 || i === temp.length - 1) {
    //10 의배수면 엔터
    console.log(answer);
    answer = "";
  }
}
