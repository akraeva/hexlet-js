const joinNumbersFromRange = (start, finish) => {
  let result = '';
  let i = start;
  while (i <= finish) {
    result = `${result}${i}`;
    i += 1;
  }
  console.log(result);
  return result;
};

const test = joinNumbersFromRange(1, 1) === '1'
          && joinNumbersFromRange(2, 3) === '23'
          && joinNumbersFromRange(5, 10) === '5678910';
console.log(test);
