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
    // Email to you (admin)
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

    // Auto-reply to the user
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send emails' }, { status: 500 });
  }
}
