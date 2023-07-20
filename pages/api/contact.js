import sgMail from '@sendgrid/mail';


export default function handler(req, res) {
  let response = null;

  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const msg = {
      to: req.body.email,
      from: 'nishida1436@gmail.com',
      subject: 'お問合せありがとうございました。',
      text: `${req.body.name} 様\nお問合せを受け付けました。回答をお待ちください。\n\n【メールアドレス】${req.body.email}\n${req.body.message}`
    };

    (async () => {
      try {
        console.log('req.body: ', req.body);
        response = await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }

  res.status(200);
  res.send(response);
}