const squareOfSum = (a, b) => (a ** 2) + (2 * a * b) + (b ** 2);

const test = squareOfSum(2, 3) === 25 && squareOfSum(1, 10) === 121;
console.log(test);
