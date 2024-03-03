#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

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

console.log(chalk.bgGreen(`Hi ${answers.username}`));
console.log(chalk.bold(`You're ${answers.age} years old`));
