function length(str) {
  return str.length;
}
// вместо import { length } from 'hexlet-basics/string';

const text = 'Never forget what you are, for surely the world will not';

const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(result);
