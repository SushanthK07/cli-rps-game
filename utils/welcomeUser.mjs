import chalkAnimation from "chalk-animation";
import sleep from "./sleep.mjs";

const welcomeUser = async () => {
  const welcome = chalkAnimation.rainbow(
    "Welcome to the Rock, Paper, Scissors game! \n"
  );
  await sleep(2000);
  welcome.stop();
};

export default welcomeUser;
