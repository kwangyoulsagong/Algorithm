function calculateCuts(segments, maxLength) {
  let cuts = 0;
  for (let length of segments) {
    if (length > maxLength) {
      cuts += Math.ceil(length / maxLength) - 1;
    }
  }
  return cuts;
}

function binarySearchMinLength(segments, maxCuts) {
  let left = 1; // Minimum possible segment length
  let right = Math.max(...segments); // Maximum segment length before any cuts

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const cuts = calculateCuts(segments, mid);

    if (cuts > maxCuts) {
      left = mid + 1; // If cuts exceed maxCuts, we need longer segment lengths
    } else {
      right = mid; // If cuts are within maxCuts, try for shorter segment lengths
    }
  }

  return left; // This will be the minimum possible maximum length of any segment
}

const treeLength = 10;
const segments = [4, 5, 7, 8];
const M = 4; // Number of cuts allowed
const maxLength = binarySearchMinLength(segments, M);

function getMinimumEffort(segments, maxLength) {
  let totalEffort = 0;

  segments.forEach((length) => {
    if (length > maxLength) {
      const cutsNeeded = Math.ceil(length / maxLength) - 1;
      totalEffort += cutsNeeded * maxLength;
    }
  });

  return totalEffort;
}

const result = getMinimumEffort(segments, maxLength);
console.log(result); // Output the total effort
