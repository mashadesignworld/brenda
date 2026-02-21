import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Define the Admin Email Promise
    const adminMailPromise = transporter.sendMail({
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

    // 2. Define and EXECUTE the Client Email Promise
    const clientMailPromise = transporter.sendMail({
      from: `"Brenda Keya Coaching" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `An invitation into a brand-new season, ${name}`,
      html: `
        <div style="background-color: #f9f9f9; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #eeeeee;">
            
            <div style="background-color: #006677; padding: 15px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 18px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">Brenda Keya Coaching</h1>
            </div>

            <div style="width: 100%; text-align: center;">
               <img src="https://brenda-sigma.vercel.app/brendapp1.jpeg" alt="Brenda Keya" style="width: 100%; display: block; border-bottom: 4px solid #db2777;" />
            </div>

            <div style="padding: 40px; color: #333333; line-height: 1.6;">
              <h2 style="font-size: 24px; color: #111111; margin-top: 0;">Dear ${name},</h2>
              
              <p style="font-size: 16px;">Thank you for reaching out to <strong>Brenda Keya Coaching</strong>!</p>
              
              <p style="font-size: 16px;">This is a quick note to let you know that I've received your message and will get back to you as soon as possible.</p>

              <p style="font-size: 16px; margin-bottom: 30px;">In this season, I am dedicated to helping you unlock your true potential and step into the fullness of your calling.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://brenda-sigma.vercel.app" style="background-color: #006677; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; display: inline-block;">VISIT MY WEBSITE</a>
              </div>

              <div style="background-color: #fff5f7; border-left: 4px solid #db2777; padding: 20px; margin-top: 40px;">
                <p style="font-size: 14px; color: #666666; margin: 0; text-transform: uppercase; font-weight: bold;">Your message summary:</p>
                <p style="font-style: italic; color: #333333; margin-top: 10px;">"${message}"</p>
              </div>
            </div>

            <div style="background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 12px; color: #888888;">
              <p>© 2026 Brenda Keya Coaching. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    // 3. Run both in parallel and wait for them to finish
    const info = await Promise.all([adminMailPromise, clientMailPromise]);
    
    console.log("Emails sent successfully:", info);

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Email failed:", error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}