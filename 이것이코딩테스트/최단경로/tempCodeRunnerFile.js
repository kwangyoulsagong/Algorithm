// 방문하지 않는 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
const get_smallest_node = () => {
  let minValue = Infinity;
  let index = 0;
  for (let i in distance) {
    if (!visited[i] && distance[i] < minValue) {
      minValue = distance[i];
      index = i;
    }
  }
  return index;
};