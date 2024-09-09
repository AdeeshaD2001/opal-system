import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://localhost:5005/webhooks/rest/webhook",
        req.body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error communicating with Rasa server:", error);
      res.status(500).json({ error: "Failed to communicate with Rasa server" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
