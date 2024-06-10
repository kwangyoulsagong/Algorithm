function solution(edges) {
  //map을 사용한다
  var answer = new Array(4).fill(0); //도넛 모양 그래프의 수 막대 모양 그래프의 수 8자 모양 그래프의 수를 순서대ㅗ 1차원 정수 배열에 담아 리턴
  const graph = new Map();
  edges.forEach(([from, to]) => {
    if (!graph.has(from)) {
      graph.set(from, [0, 0]);
    }
    if (!graph.has(to)) {
      graph.set(to, [0, 0]);
    }
    graph.get(from)[0]++;
    graph.get(to)[1]++;
  });
  let total = 0;
  for (let key of graph.keys()) {
    if (graph.get(key)[0] >= 2 && graph.get(key)[1] == 0) {
      answer[0] = key;
      total = graph.get(key)[0];
      break;
    }
  }
  edges.forEach(([from, to]) => {
    if (answer[0] == from) {
      graph.get(to)[1]--;
    }
  });
  for (let key of graph.keys()) {
    if (graph.get(key)[0] == 0 && graph.get(key)[1] >= 0) {
      answer[2]++;
    } else if (graph.get(key)[0] == 2 && graph.get(key)[1] == 2) {
      answer[3]++;
    }
  }
  answer[1] = total - answer[2] - answer[3];
  return answer;
}
