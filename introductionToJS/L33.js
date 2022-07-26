const getNumberExplanation = (number) => {
  let result;
  switch (number) {
    case 7:
      result = 'prime number';
      break;
    case 42:
      result = 'answer for everything';
      break;
    case 666:
      result = 'devil number';
      break;
    default:
      result = null;
  }
  return result;
};

const test = getNumberExplanation(8) === null
  && getNumberExplanation(666) === 'devil number'
  && getNumberExplanation(42) === 'answer for everything'
  && getNumberExplanation(7) === 'prime number';

console.log(test);

// Правильнее было бы так
/*
const getNumberExplanation = (number) => {
  switch (number) {
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    case 666:
      return 'devil number';
    default:
      return null;
  }
};
*/
