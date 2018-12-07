import gameIntarface from '..';
import getRandomNumber from '../helpers/getRandomNumber';
import isNumberAnswer from '../helpers/isNumberAnswer';

const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const operations = ['-', '+', '*'];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctAnswer = 0;
  const operationId = getRandomNumber() % 3;
  const operation = operations[operationId];
  if (operationId === 0) {
    correctAnswer = firstNumber - secondNumber;
  }
  if (operationId === 1) {
    correctAnswer = firstNumber + secondNumber;
  }
  if (operationId === 2) {
    correctAnswer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  correctAnswer += '';
  return {
    question,
    correctAnswer,
  };
};

const parseAnswerFormat = isNumberAnswer;

export default gameIntarface({ getQuestionAndCorrectAnswer, parseAnswerFormat, description });
