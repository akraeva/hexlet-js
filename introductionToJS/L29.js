const isLeapYear = (year) => (year % 400 === 0)
                          || (year % 4 === 0 && !(year % 100 === 0));

const res = isLeapYear(2018) === false
         && isLeapYear(2017) === false
         && isLeapYear(2016) === true;
console.log(res);
