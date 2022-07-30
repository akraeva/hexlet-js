/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

// функция с ошибкой ReferenceError
const reference = () => {
  const pi = 3.14;
  const C = 2 * pi * r;
  return C;
};

// функция с ошибкой TypeError
const type = () => {
  const pi = 3.14;
  pi **= 2;
  return pi;
};
