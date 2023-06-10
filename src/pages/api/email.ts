import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from '@pages/email';
import { NextRequest, NextResponse } from 'next/server';
import { mailOptions, transporter } from '@lib/nodemailer';
import { NextApiResponse } from 'next';

interface DataTypes {
  name?: string;
  subject?: string;
  message?: string;
  whatsapp?: number;
  email?: string;
}

const handler = async (req: NextRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    try {
      const data: DataTypes = req.body as DataTypes;

      if(!data.name){
        return res.status(400).json({
          error: "Name is Required"
        })
      }

      if(!data.subject){
        return res.status(400).json({
          error: "Subject is Required"
        })
      }

      if(!data.message){
        return res.status(400).json({
          error: "Message is Required"
        })
      }

      if(!data.whatsapp && !data.email){
        return res.status(400).json({
          error: "it is necessary to inform the whatsapp or email"
        })
      }

      const emailHtml = render(Email({
        name: data.name,
        subject: data.subject,
        message: data.message,
        whatsapp: data.whatsapp,
        email: data.email
      }));

      await transporter.sendMail({
        ...mailOptions,
        html: emailHtml,
        subject: `Vibecriativa Website - ${data.subject}`,
        replyTo: data.email
      });

      return res.status(200).json({ sucess: true })

    } catch (error) {
      return res
        .status(400)
        .send({ success: false });
    }
  }

  return res
    .status(500)
    .send({ success: false });
};

export default handler;
