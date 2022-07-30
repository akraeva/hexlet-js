const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const test = isPrime(1) === false
          && isPrime(7) === true
          && isPrime(10) === false

          && !(
            isPrime(-3) || isPrime(0) || isPrime(-1)
         || isPrime(1) || isPrime(4) || isPrime(21)
         || isPrime(35) || isPrime(-10))

          && (isPrime(2) && isPrime(3) && isPrime(17));

console.log(test);
