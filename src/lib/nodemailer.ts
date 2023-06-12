import Email from "@pages/email";
import { render } from "@react-email/render";
import nodemailer from "nodemailer"

export const email = process.env.EMAIL
export const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass,
    }
})