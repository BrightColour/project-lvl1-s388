import readlineSync from 'readline-sync';

export default ({ getQuestionAndCorrectAnswer, description }) => {
  const getAnswer = () => {
    const { question, correctAnswer } = getQuestionAndCorrectAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    return {
      correctAnswer,
      userAnswer,
    };
  };
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let isPlaingGame = true;
  let tries = 0;
  while (isPlaingGame) {
    const { correctAnswer, userAnswer } = getAnswer();
    const userAnswerIsCorrect = correctAnswer === userAnswer;
    if (userAnswerIsCorrect) {
      tries += 1;
      console.log('Correct!');
    } else {
      isPlaingGame = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}".\n`
                    + `Let's try again, ${name}!`);
    }
    if (tries >= 3) {
      console.log(`Congratulations, ${name}!`);
      isPlaingGame = false;
    }
  }
};
