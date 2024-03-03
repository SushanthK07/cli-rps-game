#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const getUserDetails = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    {
      type: "number",
      name: "age",
      message: "Enter your age",
    },
  ]);
  return answers;
};

const userDetails = await getUserDetails();
console.log(chalk.bgGreen(`Hi ${userDetails.username}`));
console.log(chalk.bold(`You're ${userDetails.age} years old`));

const OPTIONS = ["Rock", "Paper", "Scissors"];

const getUserSelection = async () => {
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

const doesUserWantToPlayAgain = async () => {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: "Do you want to play again?",
    },
  ]);
  return answers.confirm;
};

const determineWinner = (user, computer) => {
  if (user === computer) {
    return `Hey ${userDetails.username}, it's a tie! You both chose ${user}!`;
  } else if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    return `Hey ${userDetails.username}, you win! ${user} beats ${computer}!`;
  } else {
    return `Hey ${userDetails.username}, you lose! ${computer} beats ${user}!`;
  }
};

const startGame = async () => {
  const userSelection = await getUserSelection();
  const computerSelection = OPTIONS[Math.floor(Math.random() * 3)];
  const result = determineWinner(userSelection, computerSelection);
  console.log(chalk.bgYellow(result));

  const playAgain = await doesUserWantToPlayAgain();
  if (playAgain) {
    console.log(chalk.bgMagentaBright("Let's play again!"));
    await startGame();
  }
  console.log(chalk.bgRed("Goodbye!"));
};

await startGame();
