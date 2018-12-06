import readlineSync from 'readline-sync';

export default () => {
  const answers = {
    no: 'no',
    yes: 'yes',
  };

  console.log(`Welcome to the Brain Games!\nAnswer "${answers.yes}" if number even otherwise answer "${answers.no}".`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const askIsNumberEval = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = (randomNumber % 2 === 0) ? answers.yes : answers.no;
    let isAnswerYesOrNo = false;
    let answer = '';
    while (!isAnswerYesOrNo) {
      answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
      isAnswerYesOrNo = Object.keys(answers).includes(answer);
      if (!isAnswerYesOrNo) {
        console.log('Your answer should be "yes" or "no". Try again!');
      }
    }
    return {
      isCoorect: answer === isEven,
      answer,
    };
  };

  const playGame = () => {
    let isPlaingGame = true;
    let tries = 0;
    while (isPlaingGame) {
      const answerResult = askIsNumberEval();
      if (answerResult.isCoorect) {
        tries += 1;
        console.log('Correct!');
      } else {
        (isPlaingGame = false);
        const correctAnswer = answerResult.answer === answers.no ? answers.yes : answers.no;
        console.log(`${answerResult.answer} is wrong answer ;(. Correct answer was "${correctAnswer}".\n`
                    + `Let's try again, ${name}!`);
      }
      if (tries >= 3) {
        console.log(`Congratulations, ${name}!`);
        isPlaingGame = false;
      }
    }
  };
  playGame();
};
