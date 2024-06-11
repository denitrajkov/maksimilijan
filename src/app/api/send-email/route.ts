import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  // Create a Nodemailer transporter using your SMTP settings
  let transporter = nodemailer.createTransport({
    service: 'yahoo', // e.g., 'gmail'
    auth: {
      user: process.env.EMAIL_USERNAME, // вашата email адреса
      pass: process.env.EMAIL_PASSWORD // вашата email лозинка
    }
  });

  // Email content
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // email адресата каде сакате да ја примате пораката
    subject: subject,
    text: `Име: ${name}\nEmail: ${email}\n\nПорака:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error sending email' });
  }
}
