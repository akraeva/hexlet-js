const diff = (angle1, angle2) => {
  const result = Math.abs(angle2 - angle1);
  return result > 180 ? 360 - result : result;
};

const test = diff(0, 45) === 45
          && diff(0, 180) === 180
          && diff(0, 190) === 170
          && diff(120, 280) === 160;
console.log('test: ', test);
