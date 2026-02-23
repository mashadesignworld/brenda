import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Notification to Brenda (Admin)
    const adminMail = transporter.sendMail({
      from: `"Blueprint Order" <${process.env.EMAIL_USER}>`,
      to: "brendakeyacoaching@gmail.com",
      subject: `New Blueprint Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d4a34a;">New Blueprint Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
          <p>This user is waiting for M-Pesa payment confirmation.</p>
        </div>
      `,
    });

    // 2. The Gold-Themed M-Pesa Instructions to Client
   const clientMail = transporter.sendMail({
  from: `"Brenda Keya" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: `Hi ${name}, Your Clarity Blueprint Instructions`,
  html: `
    <div style="background-color: #f3f4f6; padding: 40px 10px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
        
        <div style="background-color: #050a12; padding: 15px; text-align: center;">
          <h1 style="color: #d4a34a; font-size: 14px; margin: 0; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">
            The Clarity Blueprint
          </h1>
        </div>

        <div style="width: 100%; text-align: center; padding-top: 30px;">
          <img src="https://brenda-sigma.vercel.app/brendapp2.jpeg" alt="Brenda Keya" 
               style="width: 80%; max-width: 400px; height: auto; border: 1px solid #d4a34a; display: inline-block; border-radius: 4px;" />
        </div>

        <div style="padding: 40px; color: #1a202c; line-height: 1.7;">
          <h2 style="font-size: 24px; color: #111111; margin-top: 0; font-weight: 700;">Dear ${name},</h2>
          
          <p style="font-size: 16px;">Thank you for your interest in <strong>The Clarity Blueprint</strong>!</p>
          
          <p style="font-size: 16px;">To complete your purchase and receive the downloadable PDF, kindly make a payment via <strong>M-Pesa</strong> using the details below:</p>

          <div style="background-color: #fdfbf7; border: 1px solid #d4a34a44; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Paybill Number:</strong> <span style="color: #d4a34a;">111111</span></p>
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Account:</strong> <span style="color: #d4a34a;">BrendaKeya</span></p>
            <p style="margin: 0; font-size: 15px;"><strong>Amount:</strong> <span style="color: #d4a34a;">Ksh 1,000</span></p>
          </div>

          <p style="font-size: 16px;">Once we confirm the payment, you will receive the download link and the bonus audio.</p>
          
          <p style="font-size: 15px; color: #4a5568; margin-top: 30px;">If you have any questions, just reply to this email or contact us on WhatsApp.</p>

          <div style="margin-top: 40px; border-top: 1px solid #edf2f7; padding-top: 25px;">
            <p style="font-size: 14px; color: #718096; margin: 0;">Warm regards,</p>
            <p style="font-size: 16px; color: #111111; margin: 5px 0; font-weight: bold;">Brenda Keya</p>
            <p style="font-size: 12px; color: #d4a34a; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">The Aligned Voice</p>
          </div>
        </div>

        <div style="background-color: #050a12; padding: 20px; text-align: center; font-size: 11px; color: #ffffff;">
          <p style="margin: 0;">© 2026 Brenda Keya. All rights reserved.</p>
        </div>
      </div>
    </div>
  `,
});

    await Promise.all([adminMail, clientMail]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blueprint Mail Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}