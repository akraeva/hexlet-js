const sequenceSum = (begin, end) => {
  if (begin === end) {
    return end;
  }
  if (begin > end) {
    return NaN;
  }
  return begin + sequenceSum(begin + 1, end);
};

/* в 2 раза быстрее, но не рабоает при (begin > end)
const sequenceSum = (begin, end) => {
  if (begin === end) {
    return end;
  }
  if (begin > end) {
    return 0;
  }
  return begin + end + sequenceSum(begin + 1, end - 1);
};
*/

/* проверка через цикл
const simpleSum = (begin, end) => {
  let sum = 0;
  for (let i = begin; i <= end; i += 1) {
    sum += i;
  }
  return sum;
};
*/

const test1 = sequenceSum(1, 5) === 15
          && sequenceSum(4, 10) === 49
          && sequenceSum(-3, 2) === -3;
console.log(test1);

const test2 = sequenceSum(0, 0) === 0
          && sequenceSum(1, 1) === 1
          && sequenceSum(1, 5) === 15
          && sequenceSum(2, 6) === 20
          && sequenceSum(-1, -1) === -1
          && sequenceSum(-5, 4) === -5;
console.log(test2);
