const stack = [];
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
console.log(stack);
// 최상단 원소부터 출력
console.log(stack.slice().reverse());
