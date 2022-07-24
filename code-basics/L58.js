const guessNumber = (number) => {
  let answer = 'Try again!';
  if (number === 42) {
    answer = 'You win!';
  }
  return answer;
};

const res = guessNumber(42) === 'You win!' && guessNumber(61) === 'Try again!';
console.log(res);
