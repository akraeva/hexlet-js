const formattedTime = (minFromStart) => {
  let result = '';
  const minuts = minFromStart % 60;
  let hours = Math.floor(minFromStart / 60);
  const days = Math.floor(hours / 24);
  hours = days > 0 ? hours - (days * 24) : hours;
  result = `${hours < 10 ? 0 : ''}${hours}:${minuts < 10 ? 0 : ''}${minuts}`;
  return result;
};

const test = formattedTime(5) === '00:05'
          && formattedTime(60) === '01:00'
          && formattedTime(175) === '02:55'
          && formattedTime(600) === '10:00'
          && formattedTime(1440) === '00:00'
          && formattedTime(1504) === '01:04';
console.log('test: ', test);

export default formattedTime;
