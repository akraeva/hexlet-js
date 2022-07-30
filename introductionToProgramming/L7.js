const finalGrade = (exam, projects) => {
  let result;
  if (exam > 90 || projects > 10) {
    result = 100;
  } else if (exam > 75 && projects >= 5) {
    result = 90;
  } else if (exam > 50 && projects >= 2) {
    result = 75;
  } else {
    result = 0;
  }
  return result;
};

const test = finalGrade(100, 12) === 100
          && finalGrade(99, 0) === 100
          && finalGrade(10, 15) === 100
          && finalGrade(85, 5) === 90
          && finalGrade(55, 3) === 75
          && finalGrade(55, 0) === 0
          && finalGrade(20, 2) === 0;
console.log(test);
