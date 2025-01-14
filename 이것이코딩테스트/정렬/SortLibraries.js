const arr = [21, 4, 11, 38, 1, 5];

const sortedUni = arr.sort();
console.log(sortedUni); //[ 1, 11, 21, 38, 4, 5 ]
const sortedNum = arr.sort((a, b) => a - b);
console.log(sortedNum); //[ 1, 4, 5, 11, 21, 38 ]
