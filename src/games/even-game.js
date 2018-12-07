import gameIntarface from '..';

const answers = {
  no: 'no',
  yes: 'yes',
};

const startMessage = `Welcome to the Brain Games!\nAnswer "${answers.yes}" if number even otherwise answer "${answers.no}".`;

const getQuestionAndCorrectAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return {
    question: randomNumber,
    correctAnswer: (randomNumber % 2 === 0) ? answers.yes : answers.no,
  };
};

const parseAnswerFormat = answer => Object.keys(answers).includes(answer);

export default gameIntarface({ getQuestionAndCorrectAnswer, parseAnswerFormat, startMessage });
