import { Observer } from "./observer";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export const DiscordObserver: Observer = {
  async update(data) {
    const name = `# ${data["name"]}\n\n`;
    const email = `- Email: ${data["email"]}\n`;
    const message = `- Message: ${data["message"]}`;

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: `${name}${email}${message}` }),
    });
  },
};
