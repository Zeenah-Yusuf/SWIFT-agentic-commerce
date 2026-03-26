import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client();

client.on("qr", qr => qrcode.generate(qr, { small: true }));
client.on("ready", () => console.log("WhatsApp client ready!"));
client.initialize();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { phoneNumber } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000);

  try {
    const chatId = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;
    await client.sendMessage(chatId, `Your login verification code is: ${code}`);
    res.status(200).json({ message: "Verification code sent", code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

