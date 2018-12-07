import gameIntarface from '..';

const description = 'What is the result of the expression?';

const getQuestionAndCorrectAnswer = () => {
  const operations = ['-', '+', '*'];
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  let correctAnswer = 0;
  const operationId = Math.floor(Math.random() * 10) % 3;
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

const parseAnswerFormat = answer => Number.parseInt(answer, 10);

export default gameIntarface({ getQuestionAndCorrectAnswer, parseAnswerFormat, description });
