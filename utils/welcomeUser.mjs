import chalkAnimation from "chalk-animation";

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const welcomeUser = async (userDetails) => {
  const greetUser = chalkAnimation.rainbow(`Hi ${userDetails.username} \n`);
  await _sleep(1000);
  greetUser.stop();

  const welcome = chalkAnimation.rainbow(
    "Welcome to the Rock, Paper, Scissors game! \n"
  );
  await _sleep(1000);
  welcome.stop();

  const startGame = chalkAnimation.rainbow("Let's play! \n");
  await _sleep(1000);
  startGame.stop();
};

export default welcomeUser;
