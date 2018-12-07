import gameIntarface from '..';
import getRandomNumber from '../helpers/getRandomNumber';

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

const parseAnswerFormat = answer => ['yes', 'no'].includes(answer);

export default gameIntarface({ getQuestionAndCorrectAnswer, parseAnswerFormat, description });
