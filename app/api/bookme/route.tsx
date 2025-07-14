import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Set up your transporter (using Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // e.g., brendakeyacoaching@gmail.com
      pass: process.env.EMAIL_PASS, // app password, not regular password!
    },
  });

  try {
    await transporter.sendMail({
      from: `"Booking Inquiry" <${process.env.EMAIL_USER}>`,
      to: "brendakeyacoaching@gmail.com",
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
