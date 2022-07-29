const isHappyTicket = (number) => {
  const array = [];
  number.split('').forEach((elem) => array.push(parseInt(elem))); // почему это работает, когда array - константа?

  const arraySum = (mas) => mas.reduce((elem, sum) => sum += elem);

  const half = Math.round(number.length / 2);
  const firstHalfSum = arraySum(array.slice(0, half));
  const lastHalfSum = arraySum(array.slice(half));

  return firstHalfSum === lastHalfSum;
};

const test = isHappyTicket('385916') === true
           && isHappyTicket('231002') === false
           && isHappyTicket('1222') === false
           && isHappyTicket('054702') === true
           && isHappyTicket('00') === true;
console.log(test);
