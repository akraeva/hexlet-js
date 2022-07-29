const reverseInt = (numb) => {
  const splitNumb = Math.abs(numb).toString().split('');
  let res = '';
  for (let i = 0; i < splitNumb.length; i += 1) {
    res = `${splitNumb[i]}${res}`;
  }
  if (numb < 0) {
    res = `-${res}`;
  }
  // eslint-disable-next-line radix
  return parseInt(res);
};

const test = reverseInt(13) === 31
          && reverseInt(-123) === -321
          && reverseInt(8900) === 98;

console.log(test);
