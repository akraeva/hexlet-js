const printNumbers = (number) => {
  let i = number;
  while (i > 0) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
};

printNumbers(16);
