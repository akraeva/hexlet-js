const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const div3 = i % 3 === 0;
    const div5 = i % 5 === 0;
    let res = '';

    if (!div3 && !div5) {
      res = `${i}`;
    } else {
      if (div3) {
        res += 'Fizz';
      }
      if (div5) {
        res += 'Buzz';
      }
    }

    console.log(res);
  }
};

fizzBuzz(11, 20);
