function round(numb, after) {
  const capacity = 10 ** after;
  return (Math.round(numb * capacity)) / capacity;
}
// вместо import { round } from 'hexlet-basics/math';

const number = 10.1234;
const result = round(number, 2);
console.log(result);
