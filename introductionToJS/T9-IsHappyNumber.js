const sumOfNumbers = (numb) => {
  let sum = 0;
  let value = numb;
  while (value > 0) {
    sum += (value % 10) ** 2;
    value = Math.trunc(value / 10);
  }
  return sum;
};

const isHappyNumber = (number, counter = 1) => {
  if (counter > 10) {
    return false;
  }
  const sum = sumOfNumbers(number);
  if (sum === 1) {
    return true;
  }
  return isHappyNumber(sum, counter + 1);
};

const test = isHappyNumber(7) === true;
console.log('test 7: ', test);

const happyTickets = (max) => {
  const result = [];
  for (let i = 1; i <= max; i += 1) {
    if (isHappyNumber(i)) {
      result.push(i);
    }
  }
  return result;
};
console.log('happyTickets from 1 to 100: ', happyTickets(100));
