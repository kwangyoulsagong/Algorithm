function solution(participant, completion) {
  participant.sort();
  completion.sort();
  var answer = "";
  console.log(participant);
  console.log(completion);
  for (let i = 0; i <= participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}
