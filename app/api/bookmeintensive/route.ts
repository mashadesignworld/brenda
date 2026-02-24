import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// Ensure your prisma client is exported from here

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, role, challenge, goal } = await req.json();

    // 1. DATABASE: Save the lead first
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. ADMIN EMAIL: Sending Brenda the full strategy intake
    const adminMailPromise = transporter.sendMail({
      from: `"Intake Engine" <${process.env.EMAIL_USER}>`,
      to: "brendakeyacoaching@gmail.com",
      subject: `💎 NEW INTENSIVE: ${name} (${role})`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #d4a34a;">New Alignment Session Request</h2>
          <p><strong>Client:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Role:</strong> ${role}</p>
          <hr />
          <p><strong>Challenge:</strong><br/>${challenge}</p>
          <p><strong>Goal:</strong><br/>${goal}</p>
          <br/>
          <a href="https://wa.me/${whatsapp.replace(/\D/g,'')}" style="background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reply via WhatsApp</a>
        </div>
      `,
    });

    // 3. CLIENT EMAIL: The "Gold Standard" Confirmation
    const clientMailPromise = transporter.sendMail({
      from: `"Brenda Keya" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `The start of your alignment journey, ${name}`,
      html: `
        <div style="background-color: #050a12; padding: 50px 20px; font-family: 'Georgia', serif; color: #ffffff;">
      <div style="max-width: 600px; margin: 0 auto; border: 1px solid #d4a34a33; border-radius: 24px; overflow: hidden; background: #0a121e; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
        
        <div style="width: 100%; height: 300px; overflow: hidden;">
          <img src="https://brenda-sigma.vercel.app/brendapp2.jpeg" 
               alt="Brenda Keya" 
               style="width: 100%; height: 100%; object-fit: cover; border-bottom: 1px solid #d4a34a33;" />
        </div>

        <div style="padding: 40px; text-align: center;">
           <h1 style="color: #d4a34a; font-size: 16px; letter-spacing: 4px; text-transform: uppercase; margin: 0;">The Aligned Voice</h1>
           <div style="height: 1px; width: 40px; background: #d4a34a; margin: 20px auto;"></div>
        </div>

        <div style="padding: 0 40px 40px 40px; line-height: 1.8; text-align: left;">
          <h2 style="font-size: 24px; font-style: italic; font-weight: 300; margin-bottom: 20px; color: #ffffff;">Dear ${name},</h2>
          
          <p style="color: #9ca3af; font-size: 16px;">
            I have received your intake details for the <strong>Alignment Session</strong>. 
            Acknowledging your role as a <em>${role}</em>, I can already see the depth of the work ahead of us.
          </p>

          <p style="color: #9ca3af; font-size: 16px;">
            I am personally reviewing your challenge regarding: <br/>
            <span style="color: #d4a34a; font-style: italic;">"${challenge}"</span>
          </p>

          <p style="color: #9ca3af; font-size: 16px;">
            Expect a response within 24 hours to finalize our strategy date. I look forward to helping you command your space.
          </p>

          <div style="margin-top: 50px; border-top: 1px solid #ffffff10; pt: 30px; text-align: center;">
            <p style="font-family: 'Brush Script MT', cursive; font-size: 24px; color: #d4a34a; margin-bottom: 5px;">Brenda Keya</p>
            <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #4b5563;">Founder, The Aligned Voice Africa</p>
          </div>
        </div>

        <div style="background: #000000; padding: 20px; text-align: center; font-size: 10px; color: #374151; letter-spacing: 1px;">
          © 2026 THE ALIGNED VOICE AFRICA. PRIVATE & CONFIDENTIAL.
        </div>
      </div>
    </div>
      `,
    });

    await Promise.all([adminMailPromise, clientMailPromise]);

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Booking failed:", error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}