import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const operations = ['-', '+', '*'];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctAnswer = 0;
  const operationId = getRandomNumber() % 3;
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
  correctAnswer += '';
  return {
    question,
    correctAnswer,
  };
};

export default gameIntarface({ getQuestionAndCorrectAnswer, description });
