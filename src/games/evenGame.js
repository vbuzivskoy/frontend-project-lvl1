import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// Function asks a player if a random number is even.
// If user answers correct the function returns true, if not - false.
const gameplay = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const answers = {
    playerAns: playerAnswer,
    correctAns: correctAnswer,
  };
  return answers;
};

export {
  rules, gameplay,
};
