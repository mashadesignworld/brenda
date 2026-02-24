import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const savedLead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        serviceType: "INTENSIVE", 
        role: data.role,
        challenge: data.challenge,
        goal: data.goal,
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- STYLING CONSTANTS ---
    const brandGold = "#d4a34a";
    const brandDark = "#050a12";
    const brandText = "#ffffff";

    // 1. ADMIN EMAIL (Brenda's Intel)
    const adminMailHtml = `
      <div style="background-color: ${brandDark}; color: ${brandText}; padding: 30px; font-family: 'Helvetica', sans-serif; max-width: 600px; border: 1px solid ${brandGold};">
        <h2 style="color: ${brandGold}; border-bottom: 1px solid ${brandGold}; padding-bottom: 10px;">New Elite Lead: ${data.name}</h2>
        <p style="font-size: 16px;"><strong>Role:</strong> ${data.role}</p>
        <p style="font-size: 16px;"><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        <div style="background: rgba(212, 163, 74, 0.1); padding: 15px; border-left: 4px solid ${brandGold}; margin: 20px 0;">
          <h3 style="margin-top: 0; color: ${brandGold};">The Challenge</h3>
          <p style="font-style: italic;">"${data.challenge}"</p>
        </div>
        <div style="background: rgba(212, 163, 74, 0.1); padding: 15px; border-left: 4px solid ${brandGold};">
          <h3 style="margin-top: 0; color: ${brandGold};">The Goal</h3>
          <p style="font-style: italic;">"${data.goal}"</p>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 30px;">ID: ${savedLead.id}</p>
      </div>
    `;

    // 2. CLIENT EMAIL (The Brand Experience)
    const clientMailHtml = `
      <div style="background-color: ${brandDark}; padding: 0; margin: 0; font-family: 'Georgia', serif; color: ${brandText};">
        <div style="max-width: 600px; margin: 0 auto; background-color: ${brandDark}; border: 1px solid #1a1a1a;">
          <img src="https://brenda-sigma.vercel.app/brendapp2.jpeg" style="width: 100%; display: block; border-bottom: 4px solid ${brandGold};" alt="Brenda Keya" />
          
          <div style="padding: 40px 30px;">
            <h1 style="color: ${brandGold}; font-size: 28px; font-weight: normal; margin-bottom: 20px; letter-spacing: 1px;">Hello ${data.name},</h1>
            
            <p style="font-size: 18px; line-height: 1.6; color: #e0e0e0;">
              Thank you for sharing your journey with me. I've received your intake regarding your role as <strong>${data.role}</strong>.
            </p>
            
            <p style="font-size: 18px; line-height: 1.6; color: #e0e0e0;">
              My team and I are reviewing your challenges and goals. We believe in high-alignment and deep intentionality, and I’m excited to see how we can bridge the gap together.
            </p>

            <div style="margin: 40px 0; text-align: center;">
               <hr style="border: 0; border-top: 1px solid ${brandGold}; width: 50px; margin-bottom: 20px;" />
               <p style="font-style: italic; color: ${brandGold}; font-size: 20px;">Stay Aligned,</p>
               <p style="font-size: 22px; margin-top: 10px; letter-spacing: 2px;">BRENDA KEYA</p>
            </div>
          </div>
          
          <div style="background-color: #000; padding: 20px; text-align: center; font-size: 12px; color: #444; letter-spacing: 1px;">
            INTENTIONAL LEADERSHIP & ALIGNMENT COACHING
          </div>
        </div>
      </div>
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"Brenda Keya | System" <${process.env.EMAIL_USER}>`,
        to: "brendakeyacoaching@gmail.com",
        subject: `💎 NEW INTENSIVE: ${data.name}`,
        html: adminMailHtml,
      }),
      transporter.sendMail({
        from: `"Brenda Keya" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: `The start of your alignment journey, ${data.name}`,
        html: clientMailHtml,
      })
    ]);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) errorMessage = error.message;
    console.error("Fullstack Error:", error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}