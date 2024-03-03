import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import sleep from "./sleep.mjs";

const getUserDetails = async () => {
  const userDetails = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    // {
    //   type: "number",
    //   name: "age",
    //   message: "Enter your age",
    // },
  ]);

  const greetUser = chalkAnimation.karaoke(`Hi ${userDetails.username} \n`);
  await sleep(1500);
  greetUser.stop();

  return userDetails;
};

export default getUserDetails;
