import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reference, amount } = req.query;

  const merchantCode = process.env.VITE_INTERSWITCH_MERCHANT_CODE;
  const clientId = process.env.INTERSWITCH_CLIENT_ID;
  const secret = process.env.INTERSWITCH_SECRET;

  if (!merchantCode || !clientId || !secret) {
    return res.status(500).json({ error: "Missing Interswitch credentials" });
  }

  try {
    const url = `https://webpay.qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode=${merchantCode}&transactionreference=${reference}&amount=${amount}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      },
    });

    // Inline verification response
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
