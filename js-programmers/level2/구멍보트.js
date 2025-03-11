function solution(people, limit) {
  people.sort((a, b) => a - b);
  let cnt = 0;
  while (people.length) {
    if (people[0] + people.at(-1) <= limit) {
      people.shift();
      people.pop();
    } else {
      people.pop();
    }
    cnt++;
  }
  return cnt;
}

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;
  let cnt = 0;
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--;
    cnt++;
  }
  return cnt;
}
