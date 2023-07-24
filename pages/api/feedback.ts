// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  email: string;
  feedback: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, feedback } = req.body;
  const id = new Date().toISOString();
  res.status(200).json({ id, email, feedback });
}
