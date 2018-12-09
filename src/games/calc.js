import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
const operations = ['-', '+', '*'];

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctAnswer;
  const operationId = getRandomNumber() % operations.length;
  const operation = operations[operationId];
  switch (operation) {
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown operation ${operation}`);
  }
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  correctAnswer = String(correctAnswer);
  return {
    question,
    correctAnswer,
  };
};

export default () => gameIntarface(getQuestionAndCorrectAnswer, description);
