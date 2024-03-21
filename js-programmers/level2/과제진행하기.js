function timetomin(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}
function solution(plans) {
  var answer = [];
  const stop = [];

  const array = plans
    .map(([subject, time, finish]) => [
      subject,
      timetomin(time),
      Number(finish),
    ])
    .sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < array.length - 1; i++) {
    const [subject, time, finish] = array[i];
    if (time + finish <= array[i + 1][1]) {
      answer.push(subject);
      let available = array[i + 1][1] - time - finish;
      while (stop.length) {
        const [currentsubject, currenttime] = stop.pop();
        if (currenttime <= available) {
          available -= currenttime;
          answer.push(currentsubject);
        } else {
          stop.push([currentsubject, currenttime - available]);
          break;
        }
      }
    } else {
      stop.push([subject, finish - (array[i + 1][1] - time)]);
    }
  }
  answer.push(array[array.length - 1][0]);
  while (stop.length) {
    answer.push(stop.pop()[0]);
  }
  return answer;
}
