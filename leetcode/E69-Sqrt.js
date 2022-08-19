const mySqrt = (x) => {
  if (x === 0) return 0;
  let res = 1;
  while ((res + 1) * (res + 1) <= x) res += 1;
  return res;
};

const test = (max) => {
  for (let i = 0; i <= max; i += 1) {
    if (mySqrt(i) !== Math.trunc(i ** 0.5)) {
      console.log(`Error: for ${i} < ${mySqrt(i)} != ${Math.trunc(i ** 0.5)}`);
      return false;
    }
  }
  return true;
};
console.log(test(1000));
