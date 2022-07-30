/* eslint-disable import/extensions */
import assert from 'assert';
import { getTriangleArea } from './L15-myMathModule.js';
import solution from './L15-solution.js';

const testTriangleArea = getTriangleArea(5, 10) === 25
                      && getTriangleArea(15, 12) === 90;
console.log(testTriangleArea ? 'The area calculated correctly!' : 'There is error in area calculation.');

try {
  assert.equal(solution(0), 0);
  assert.equal(solution(10), 250);
  assert.equal(solution(12), 432);
  assert.equal(solution(14), 686);
  console.log('It works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
