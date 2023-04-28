import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let response = null;

  if(req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const msg = {
      to: 'nishida1436@gmail.com',
      from: req.body.email,
      subject: `【お問い合わせ】${req.body.name}様より`,
      text: `【会社名・屋号】\n${req.body.company}\n\n【名前】\n${req.body.name}\n\n【お問い合わせ内容】\n${req.body.message}\n\nメールアドレス\n${req.body.email}`
    };

    (async () => {
      try {
        response = await sgMail.send(msg);
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200).json(response);
}