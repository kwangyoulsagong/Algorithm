function solution(edges) {
  const answer = [0, 0, 0, 0];
  const indegree = new Map();

  edges.forEach(([a, b]) => {
    indegree.set(a, indegree.get(a) || [0, 0]); //새로 받은값을 추가
    console.log(indegree.set(a, indegree.get(a) || [0, 0])); //새로 받은값을 추가)
    indegree.set(b, indegree.get(b) || [0, 0]);
    indegree.get(a)[0]++;
    indegree.get(b)[1]++;
  });

  indegree.forEach(([inCount, outCount], key) => {
    answer[0] = inCount >= 2 && outCount === 0 ? parseInt(key) : answer[0];
    answer[2] += inCount === 0 && outCount > 0 ? 1 : 0;
    answer[3] += inCount >= 2 && outCount >= 2 ? 1 : 0;
  });

  answer[1] = indegree.get(answer[0])[0] - answer[2] - answer[3];
  return answer;
}
const edges = [
  [2, 3],
  [4, 3],
  [1, 1],
  [2, 1],
];
const result = solution(edges);
console.log(result);
