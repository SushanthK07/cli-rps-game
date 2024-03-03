import chalkAnimation from "chalk-animation";
import sleep from "./sleep.mjs";

const welcomeUser = async (userDetails) => {
  const greetUser = chalkAnimation.karaoke(`Hi ${userDetails.username} \n`);
  await sleep(1500);
  greetUser.stop();

  const welcome = chalkAnimation.rainbow(
    "Welcome to the Rock, Paper, Scissors game! \n"
  );
  await sleep(2000);
  welcome.stop();

  const startGame = chalkAnimation.neon("Let's play! \n");
  await sleep(2000);
  startGame.stop();
};

export default welcomeUser;
