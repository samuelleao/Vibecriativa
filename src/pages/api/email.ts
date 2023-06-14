import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from '@pages/email';
import { NextRequest } from 'next/server';
import { clientID, clientRefreshToken, clientSecret, email } from '@lib/nodemailer';
import { NextApiResponse } from 'next';
import { google } from "googleapis"

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  clientID,
  clientSecret
);

oauth2Client.setCredentials({
  refresh_token: clientRefreshToken
});

interface DataTypes {
  name?: string;
  subject?: string;
  message?: string;
  whatsapp?: number;
  email?: string;
}

const handler = async (req: NextRequest, res: NextApiResponse) => {

  const accessToken = await oauth2Client.getAccessToken()

  console.log("TOKEN: ", accessToken)

  if (req.method === 'POST') {

    try {
      const data: DataTypes = req.body as DataTypes;

      if (!data.name) {
        return res.status(400).json({
          error: "Name is Required"
        })
      }

      if (!data.subject) {
        return res.status(400).json({
          error: "Subject is Required"
        })
      }

      if (!data.message) {
        return res.status(400).json({
          error: "Message is Required"
        })
      }

      if (!data.whatsapp && !data.email) {
        return res.status(400).json({
          error: "it is necessary to inform the whatsapp or email"
        })
      }

      let asyncToken: string | undefined = "";

      if (accessToken.token !== null) {
        asyncToken = accessToken.token;
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: email,
          clientId: clientID,
          clientSecret: clientSecret,
          refreshToken: clientRefreshToken,
          accessToken: asyncToken,
        }
      })

      const emailHtml = render(Email({
        name: data.name,
        subject: data.subject,
        message: data.message,
        whatsapp: data.whatsapp,
        email: data.email
      }));

      await transporter.sendMail({
        html: emailHtml,
        subject: `Vibecriativa Website - ${data.subject}`,
        replyTo: data.email,
        from: data.email,
        to: email
      });

      return res.status(200).json({ sucess: true })

    } catch (error: any) {
      return res.status(500).json({ success: false, error: "here " + error.message });
    }
  }

  return res
    .status(500)
    .send({ success: false });
};

export default handler;
