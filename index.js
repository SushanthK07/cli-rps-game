#!/usr/bin/env node

import chalk from "chalk";
import getUserDetails from "./utils/getUserDetails.mjs";
import startGame from "./utils/gameUtils.mjs";

const userDetails = await getUserDetails();
console.log(chalk.bgGreen(`Hi ${userDetails.username}`));
console.log(chalk.bold(`You're ${userDetails.age} years old`));

await startGame(userDetails);
