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

export default getUserDetails;
