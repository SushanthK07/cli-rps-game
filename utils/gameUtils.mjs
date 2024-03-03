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

const startGame = async (userDetails) => {
  const userSelection = await _getUserSelection();
  const computerSelection = OPTIONS[Math.floor(Math.random() * 3)];
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
    const playAgainAnimation = chalkAnimation.neon("Let's play again! \n");
    await sleep(2000);
    playAgainAnimation.stop();
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
