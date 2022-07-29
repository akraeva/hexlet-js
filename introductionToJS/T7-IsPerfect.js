const isPerfect = (number) => {
  let acc = 0;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      acc += i;
    }
  }
  return acc === number;
};

const test = (number) => isPerfect(number) === [6, 28, 496, 8128].includes(number);
console.log(test(6) && test(7));

const findPerfect = (max) => {
  const result = [];
  for (let i = 1; i <= max; i += 1) {
    if (isPerfect(i)) {
      result.push(i);
    }
  }
  return result;
};
console.log(findPerfect(10000).every((elem) => test(elem)));
