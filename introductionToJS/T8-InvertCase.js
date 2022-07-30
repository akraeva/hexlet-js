const invertCase = (text) => {
  const result = text.split('');

  const isUpperCase = (char) => char === char.toUpperCase();

  result.forEach((element, i) => {
    result[i] = isUpperCase(element) ? element.toLowerCase() : element.toUpperCase();
  });
  return result.join('');
};

const test = invertCase('Hello, World!') === 'hELLO, wORLD!'
          && invertCase('I loVe JS') === 'i LOvE js';
console.log(test);

export default invertCase;
