const isInternationalPhone = (number) => number[0] === '+';

const test = isInternationalPhone('89602223423') === false
&& isInternationalPhone('+79602223423') === true;
console.log(test);
