function solution(friends, gifts) {
  const table = Array.from({ length: friends.length }, () =>
    Array.from({ length: friends.length }, () => 0)
  );
  const give = Array.from({ length: friends.length }, () => 0);
  const recieve = Array.from({ length: friends.length }, () => 0);
  const presentExp = Array.from({ length: friends.length }, () => 0);
  const answer = Array.from({ length: friends.length }, () => 0);
  const people = new Map();
  friends.forEach((name, index) => {
    people.set(name, index);
  });
  gifts.forEach((gift) => {
    const [send, get] = gift.split(" ");
    table[people.get(send)][people.get(get)]++;
    give[people.get(send)] += 1;
    recieve[people.get(get)] += 1;
  });
  for (let i = 0; i < friends.length; i++) {
    presentExp[i] = give[i] - recieve[i];
  }
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (i == j) continue;
      if (table[i][j] < table[j][i]) answer[j]++;
      if (table[i][j] > table[j][i]) answer[i]++;
      else {
        if (table[i][j] === table[j][i]) {
          if (presentExp[i] < presentExp[j]) answer[j]++;
          if (presentExp[i] > presentExp[j]) answer[i]++;
        }
      }
    }
  }

  return Math.max(...answer);
}
