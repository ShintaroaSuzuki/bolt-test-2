import { SlackBot } from "./app";

const main = async () => {
  const bot = new SlackBot();
  await bot.start();
};

main();
