const queue = [];
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();
console.log(queue);
// 나중에 들어온 원소부터 출력
console.log(queue.slice().reverse());
