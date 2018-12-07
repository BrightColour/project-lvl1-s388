import gameIntarface from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return findGcd(m, k);
  }
  return n;
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  let correctAnswer = findGcd(firstNumber, secondNumber);
  correctAnswer += '';
  const question = `${firstNumber} ${secondNumber}`;
  return {
    question,
    correctAnswer,
  };
};

const parseAnswerFormat = answer => Number.parseInt(answer, 10);

export default gameIntarface({ getQuestionAndCorrectAnswer, parseAnswerFormat, description });
