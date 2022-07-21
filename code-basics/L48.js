const sayHurrayThreeTimes = () => {
  const str = 'hurray!';
  return `${str} ${str} ${str}`;
};

const hurray = sayHurrayThreeTimes();
console.log(hurray); // => hurray! hurray! hurray!
