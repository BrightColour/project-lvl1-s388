import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2 + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber(1);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => gameIntarface({ getQuestionAndCorrectAnswer, description });
