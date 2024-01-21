function changeToString(index) {
  index = String(index);
  for (let i = 0; i < index.length; i++) {
    temp.push(numtostr[Number(index[i])]);
  }
}