import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, whatsapp } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1️⃣ Email to admin
    await transporter.sendMail({
      from: `Clarity Blueprint <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Clarity Blueprint Submission',
      replyTo: email,
      html: `
        <h3>New Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
      `,
    });

    // 2️⃣ Auto-response email to user
    await transporter.sendMail({
      from: `Brenda Keya Coaching <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'How to Complete Your Clarity Blueprint Purchase',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest in <strong>The Clarity Blueprint</strong>!</p>
        <p>To complete your purchase and receive the downloadable PDF, kindly make a payment via <strong>M-Pesa</strong> using the details below:</p>
        <ul>
          <li><strong>Paybill Number:</strong> 111111</li>
          <li><strong>Account:</strong> BrendaKeya</li>
          <li><strong>Amount:</strong> Ksh 1,000</li>
        </ul>
        <p><strong>Once we confirm the payment, you will receive the download link.</strong></p>
        <p>If you have any questions, just reply to this email or contact us on WhatsApp.</p>
        <p>Warm regards,<br/>Brenda Keya<br/>The Aligned Voice</p>
      `,
    });

    // 3️⃣ WhatsApp message to user (optional WhatsApp field must be filled)
    if (whatsapp) {
      const phoneNumber = whatsapp.replace(/^0/, '254'); // Format for Kenya
console.log('WA_PHONE_ID:', process.env.WA_PHONE_ID);
console.log('WA_TOKEN begins with:', process.env.WA_TOKEN?.slice(0, 10));
console.log("Sending template:", process.env.WA_TEMPLATE, "language: en_US");
      const waRes = await fetch(`https://graph.facebook.com/v19.0/${process.env.WA_PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WA_TOKEN}`,
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({
  messaging_product: 'whatsapp',
  to: phoneNumber,
  type: 'template',
  template: {
    name: process.env.WA_TEMPLATE || 'hello_world',
    language: { code: 'en_US' }
  }
}),

      });

      const result = await waRes.json();

      if (!waRes.ok) {
        console.error('WhatsApp send error:', result);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email or WhatsApp sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send' }, { status: 500 });
  }
}
