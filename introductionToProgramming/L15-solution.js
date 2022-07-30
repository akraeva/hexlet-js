/* eslint-disable import/extensions */
import square from './L15-square.js';
import { getTriangleArea } from './L15-myMathModule.js';

export default (n) => getTriangleArea(n, square(n) / 2);
