import gameIntarface from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (progressionLength, step, firstElememt) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElememt + step * i);
  }
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const progressionStep = getRandomNumber(1, 10);
  const progressionFirstElement = getRandomNumber();
  const progression = getProgression(10, progressionStep, progressionFirstElement);
  const hiddenElementPosition = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '...';
  const question = progression.join(' ');
  return {
    correctAnswer,
    question,
  };
};

export default () => gameIntarface(getQuestionAndCorrectAnswer, description);
