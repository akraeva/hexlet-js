const sayHurrayThreeTimes = () => {
  const text = 'hurray!';
  return `${text} ${text} ${text}`;
};

const hurray = sayHurrayThreeTimes();
console.log(hurray); // => hurray! hurray! hurray!
