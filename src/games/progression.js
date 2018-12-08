import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const step = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber();
  const progression = [firstNumber];
  for (let i = 0; i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const progression = getProgression();
  const progressionElemId = getRandomNumber(0, 9);
  let correctAnswer = progression[progressionElemId];
  correctAnswer += '';
  progression[progressionElemId] = '...';
  const question = progression.reduce((acc, elem) => `${acc} ${elem}`, '');
  return {
    correctAnswer,
    question,
  };
};

export default () => gameIntarface({ getQuestionAndCorrectAnswer, description });
