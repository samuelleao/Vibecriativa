import nodemailer from "nodemailer"

export const email = process.env.EMAIL
export const pass = process.env.EMAIL_PASS
export const clientID = process.env.NEXT_PUBLIC_EMAIL_CLIENT_ID
export const clientSecret = process.env.NEXT_PUBLIC_EMAIL_CLIENT_SECRET
export const clientRefreshToken = process.env.NEXT_PUBLIC_EMAIL_REFRESH_TOKEN