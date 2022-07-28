const square = (x) => x * x;

const getTriangleArea = (h, b) => (h * b) / 2;

const test = getTriangleArea(5, 10) === 25
          && getTriangleArea(15, 12) === 90;
console.log(test);

const result = (n) => getTriangleArea(n, square(n) / 2);

console.log(result(3));

// myMathModule
/*
export const getTriangleArea = (h, b) => (h * b) / 2;
*/

/*
import { getTriangleArea } from './myMathModule';

export default (n) => getTriangleArea(n, square(n) / 2);
*/
