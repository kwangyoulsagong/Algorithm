function solution(numbers, hand) {
  var answer = [];
  let leftValue = "*";
  let rightValue = "#";
  numbers.forEach((num) => {
    if (num == 1 || num == 4 || num == 7) {
      answer.push("L");
      leftValue = num;
      return;
    }
    if (num == 3 || num == 6 || num == 9) {
      answer.push("R");
      rightValue = num;
      return;
    }
    let leftPosition = getCordinate(leftValue, num);
    let rightPosition = getCordinate(rightValue, num);
    if (leftPosition == rightPosition) {
      if (hand == "right") {
        answer.push("R");
        rightValue = num;
        return;
      } else {
        answer.push("L");
        leftValue = num;
        return;
      }
    }
    if (leftPosition > rightPosition) {
      answer.push("R");
      rightValue = num;
    } else {
      answer.push("L");
      leftValue = num;
    }
  });
  return answer.join("");
}

function getCordinate(currentValue, targetValue) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  const currentPosition = keyPad[currentValue];
  const targetPosition = keyPad[targetValue];
  return (
    Math.abs(targetPosition[0] - currentPosition[0]) +
    Math.abs(targetPosition[1] - currentPosition[1])
  );
}
