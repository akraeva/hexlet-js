const fact = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

const withoutTwoZeros = (zeroCount, oneCount) => {
  if (zeroCount === 0) {
    return oneCount;
  }
  if (oneCount === 0) {
    return 0;
  }
  let n = zeroCount + oneCount;
  const k = zeroCount;
  n -= Math.floor(zeroCount / 2); // убрать место под пары
  const combinations = fact(n) / (fact(k) * fact(n - k));
  // количетсво сочетаний где не получится пар 00

  return combinations;
};

const test = withoutTwoZeros(2, 2) === 3
          || withoutTwoZeros(1, 1) === 2
          || withoutTwoZeros(1, 3) === 4
          || withoutTwoZeros(2, 4) === 10;
console.log('test: ', test);
