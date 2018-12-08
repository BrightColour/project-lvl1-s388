import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return findGcd(m, k);
  }
  return n;
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctAnswer = findGcd(firstNumber, secondNumber);
  correctAnswer += '';
  const question = `${firstNumber} ${secondNumber}`;
  return {
    question,
    correctAnswer,
  };
};

export default gameIntarface({ getQuestionAndCorrectAnswer, description });
