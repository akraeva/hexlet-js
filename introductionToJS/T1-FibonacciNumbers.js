const fib = (number) => {
  switch (number) {
    case 0:
      return 0;
    case 1:
    case 2:
      return 1;
    default:
      return fib(number - 1) + fib(number - 2);
  }
};

const test = () => {
  const fibonacci = [
    0, 1, 1, 2, 3, 5, 8, 13, 21,
    34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711];
  for (let i = 0; i < fibonacci.length; i += 1) {
    if (fib(i) !== fibonacci[i]) {
      // console.log(`test ${i} : ${fib(i)} != ${fibonacci[i - 1]}`);
      return (`${false} on ${i + 1}`);
    }
  }
  return true;
};

console.log(test());

/*
const fib = (number) => {
  if (number === 1) {
  return 0;
  }
  if (number === 2) {
    return 1;
  }
  if (number > 2) {
    number -= 1;
    return fib(number) + fib(number - 1);
  }
}
*/
// console.log(fib(3) === 2 && fib(5) === 5 && fib(10) === 55);
