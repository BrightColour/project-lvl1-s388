import readlineSync from 'readline-sync';

export default (getQuestionAndCorrectAnswer, description) => {
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

  for (let countOfAnswers = 1; countOfAnswers <= 3; countOfAnswers += 1) {
    const { correctAnswer, userAnswer } = getAnswer();
    const userAnswerIsCorrect = correctAnswer === userAnswer;
    if (!userAnswerIsCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}".\n`
                + `Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    if (countOfAnswers >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
