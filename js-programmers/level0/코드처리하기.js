function solution(code) {
  var answer = "";
  const temp = [];
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (mode == 0) {
      if (code[i] != 1) {
        if (i % 2 == 0) {
          temp.push(code[i]);
        } else {
          continue;
        }
      } else {
        mode = 1;
      }
    } else {
      if (code[i] != 1) {
        if (i % 2 == 1) {
          temp.push(code[i]);
        } else {
          continue;
        }
      } else {
        mode = 0;
      }
    }
  }
  if (temp.length == 0) {
    return "EMPTY";
  }
  return temp.map((v) => v.split("")).join("");
}
