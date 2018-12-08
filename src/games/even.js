import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default gameIntarface({ getQuestionAndCorrectAnswer, description });
