import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import sleep from "./sleep.mjs";

const OPTIONS = ["Rock", "Paper", "Scissors"];

const _getUserSelection = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "selection",
      message: "Choose one among the following options:",
      choices: OPTIONS,
    },
  ]);
  return answers.selection;
};

const _getComputerSelection = async () => {
  const computerSelection = OPTIONS[Math.floor(Math.random() * 3)];

  const computerAnimation = chalkAnimation.pulse(
    `Computer chose ${computerSelection}`
  );
  await sleep(1000);
  computerAnimation.stop();

  return computerSelection;
};

const _doesUserWantToPlayAgain = async () => {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: "Do you want to play again?",
    },
  ]);
  return answers.confirm;
};

const _determineWinner = (userDetails, userSelection, computerSelection) => {
  if (userSelection === computerSelection) {
    return `Hey ${userDetails.username}, it's a tie! You both chose ${userSelection}! \n`;
  } else if (
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Paper" && computerSelection === "Rock") ||
    (userSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `Hey ${userDetails.username}, you win! ${userSelection} beats ${computerSelection}! \n`;
  } else {
    return `Hey ${userDetails.username}, you lose! ${computerSelection} beats ${userSelection}! \n`;
  }
};

const _startAnimation = async () => {
  const startAnimation = chalkAnimation.neon("Let's play! \n");
  await sleep(2000);
  startAnimation.stop();
};

const _playAgainAnimation = async () => {
  const playAgainAnimation = chalkAnimation.neon("Let's play again! \n");
  await sleep(2000);
  playAgainAnimation.stop();
};

let _playAgain = false;

const startGame = async (userDetails) => {
  if (!_playAgain) {
    await _startAnimation();
  } else {
    await _playAgainAnimation();
  }

  const userSelection = await _getUserSelection();
  const computerSelection = await _getComputerSelection();
  const result = _determineWinner(
    userDetails,
    userSelection,
    computerSelection
  );

  const resultAnimation = chalkAnimation.karaoke(result);
  await sleep(3000);
  resultAnimation.stop();

  const playAgain = await _doesUserWantToPlayAgain();
  if (playAgain) {
    _playAgain = true;
    await startGame(userDetails);
  } else {
    const byeAnimation = chalkAnimation.glitch(
      `Goodbye ${userDetails.username}!`
    );
    await sleep(1000);
    byeAnimation.stop();
  }
};

export default startGame;
