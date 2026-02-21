import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try{
  const { name, email, message } = await req.json();

  // Set up your transporter (using Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // e.g., brendakeyacoaching@gmail.com
      pass: process.env.EMAIL_PASS, // app password, not regular password!
    },
  });

 const adminMail= transporter.sendMail({
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

    const clientMail = transporter.sendMail({
      from: `"Brenda Keya Coaching" <${process.env.EMAIL_USER}>`,
      to: email, // Send confirmation to the user who filled the form
      subject: `We've received your booking request!`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #db2777;">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>Brenda Keya Coaching</strong>!</p>
          <p>This is a quick note to let you know that I've received your message and will get back to you as soon as possible.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 0.9em; color: #666;">Your message summary:</p>
          <blockquote style="font-style: italic;">"${message}"</blockquote>
        </div>
      `,
    });

const info = await Promise.all([adminMail, clientMail]);
  console.log("Emails sent successfully:", info); // Check your terminal for this!
    // Run both emails in parallel
    await Promise.all([adminMail, clientMail]);

    return NextResponse.json({ success: true });
  } catch (error:unknown) {
    // TypeScript safe way to log errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Email failed:", error);
    return NextResponse.json({ success: false, error:errorMessage }, { status: 500 });
  }
}
