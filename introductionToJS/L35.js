const joinNumbersFromRange = (first, last) => {
  let res = '';
  let i = first;
  while (i <= last) {
    res = `${res}${i}`;
    i += 1;
  }
  return res;
};

const test = joinNumbersFromRange(1, 1) === '1'
          && joinNumbersFromRange(2, 3) === '23'
          && joinNumbersFromRange(5, 10) === '5678910';
console.log(test);
