const fibonacci = (x) => {
  if (x == 1 || x == 2) return 1;
  return fibonacci(x - 1) + fibonacci(x - 2);
};
console.log(fibonacci(6));
