const printNumbers = (initialNumber) => {
  let i = initialNumber;
  while (i > 0) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
};

printNumbers(16);
