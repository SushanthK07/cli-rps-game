#!/usr/bin/env node

import getUserDetails from "./utils/getUserDetails.mjs";
import startGame from "./utils/gameUtils.mjs";
import welcomeUser from "./utils/welcomeUser.mjs";

await welcomeUser();
const userDetails = await getUserDetails();
await startGame(userDetails);
