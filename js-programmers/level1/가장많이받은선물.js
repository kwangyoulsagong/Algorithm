function solution(friends, gifts) {
  var answer = 0;
  let result = Array(friends.length).fill(0);
  let received = Array.from({ length: friends.length }, () =>
    Array(friends.length).fill(0)
  );
  let status = Array.from({ length: friends.length }, () => Array(3).fill(0));
  gifts.forEach((v) => {
    const [send, receive] = v.split(" ");
    received[friends.indexOf(send)][friends.indexOf(receive)] += 1;
    status[friends.indexOf(send)][0] += 1;
    status[friends.indexOf(receive)][1] += 1;
  });
  for (let i = 0; i < status.length; i++) {
    status[i][2] = status[i][0] - status[i][1];
  }

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (received[i][j] < received[j][i]) result[j] += 1;
      if (received[i][j] > received[j][i]) {
        result[i] += 1;
      } else {
        if (received[i][j] === received[j][i]) {
          if (status[i][2] < status[j][2]) {
            result[j] += 1;
          }
          if (status[i][2] > status[j][2]) {
            result[i] += 1;
          }
        }
      }
    }
  }
  answer = Math.max(...result);
  return answer;
}
