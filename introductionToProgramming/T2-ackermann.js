/* eslint-disable consistent-return */
const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
};

const test = ackermann(0, 0) === 1
&& ackermann(2, 1) === 5
&& ackermann(2, 3) === 9;
console.log(test);
