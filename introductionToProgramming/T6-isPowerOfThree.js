const isPowerOfThree = (num) => {
  const tree = 3;
  if (num === 1) {
    return true;
  }
  if (num % tree !== 0) {
    return false;
  }
  return isPowerOfThree(num / 3);
};

const test = isPowerOfThree(1) === true
          && isPowerOfThree(2) === false
          && isPowerOfThree(9) === true;
console.log('test: ', test);

// export default isPowerOfThree;
