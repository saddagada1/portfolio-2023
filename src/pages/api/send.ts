import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { env } from "~/env.mjs";

const resend = new Resend(env.NEXT_PUBLIC_RESEND_KEY);

interface email {
  from: string;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body as email;
  const { data, error } = await resend.emails.send({
    from: "contact@saivamsi.ca",
    to: ["saddagada1@gmail.com"],
    subject: "Hello Saivamsi - Message From Portfolio",
    text: `${email.message}

            from: ${email.from}
    `,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default handler;
