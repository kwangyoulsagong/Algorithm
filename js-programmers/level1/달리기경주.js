function solution(players, callings) {
  var answer = {};
  for (let i = 0; i < players.length; i++) {
    answer[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let index = answer[callings[i]];
    let temp = players[index - 1];
    players[index - 1] = callings[i];
    players[index] = temp;
    answer[callings[i]] = index - 1;
    answer[temp] = index;
  }

  return players;
}
