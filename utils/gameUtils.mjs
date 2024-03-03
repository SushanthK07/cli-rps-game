import chalk from "chalk";
import inquirer from "inquirer";

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
    return `Hey ${userDetails.username}, it's a tie! You both chose ${userSelection}!`;
  } else if (
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Paper" && computerSelection === "Rock") ||
    (userSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `Hey ${userDetails.username}, you win! ${userSelection} beats ${computerSelection}!`;
  } else {
    return `Hey ${userDetails.username}, you lose! ${computerSelection} beats ${userSelection}!`;
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
  console.log(chalk.bgYellow(result));

  const playAgain = await _doesUserWantToPlayAgain();
  if (playAgain) {
    console.log(chalk.bgMagentaBright("Let's play again!"));
    await startGame(userDetails);
  }
  console.log(chalk.bgRed("Goodbye!"));
};

export default startGame;
