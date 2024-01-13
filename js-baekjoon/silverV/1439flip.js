const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//다솜이 0과 1로만 이루어진 문자열 s가 있어 모든 숫자를 같게 만들겠데
//조건이 문자열 연속된 하나 이상이 숫자를 찾고 모두 뒤집을거야
//1의 갯수를 찾고 얘내가 이웃하는지 확인 연속된 애들 스트링으로 저장
//0의 갯수를 찾고 얘내가이웃하는지 확인

function findConsecutiveSubstrings(str, targetArray, targetChar) {
  return str
    .split(targetChar)
    .filter((substring) => substring !== "")
    .forEach((substring) => targetArray.push(substring));
}

const one = [];
const zero = [];
const arr = input[0];

findConsecutiveSubstrings(arr, one, "1");
findConsecutiveSubstrings(arr, zero, "0");

const result = Math.min(one.length, zero.length);
console.log(result);
