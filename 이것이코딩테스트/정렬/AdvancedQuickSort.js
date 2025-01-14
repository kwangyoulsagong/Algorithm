const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const p = arr[0];
  const tail = arr.splice(1);
  const leftSide = tail.filter((v) => v <= p);
  const rightSide = tail.filter((v) => v > p);
  return [...quickSort(leftSide), p, ...quickSort(rightSide)];
};

console.log(quickSort(arr));
