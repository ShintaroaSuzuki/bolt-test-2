import { App } from "@slack/bolt";
import dotenv from "dotenv";
dotenv.config();

export class SlackBot {
  private app;
  constructor() {
    this.app = new App({
      token: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
    });
  }
  async start() {
    this.app.command("/hello", async ({ command, ack, respond }) => {
      await ack();
      respond("Hello!");
    });
    this.app.start(8080);
    console.log("⚡️ Bolt app is running!");
  }
}
