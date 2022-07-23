const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);

let res = isLeapYear(2018); // false
console.log(res);
res = isLeapYear(2017); // false
console.log(res);
res = isLeapYear(2016); // true
console.log(res);
