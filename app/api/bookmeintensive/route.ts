import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // FIX: We must await the JSON and assign it to 'data'
    const data = await req.json();

    // 1. Save the lead to Supabase
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

    console.log("Lead saved to Supabase:", savedLead.id);

    // 2. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Admin Email (To Brenda)
    const adminMailPromise = transporter.sendMail({
      from: `"Intake Engine" <${process.env.EMAIL_USER}>`,
      to: "brendakeyacoaching@gmail.com",
      subject: `💎 NEW INTENSIVE: ${data.name}`,
      html: `<p>New lead saved in DB with ID: ${savedLead.id}</p>
             <p><strong>Challenge:</strong> ${data.challenge}</p>`
    });

    // 4. Client Email (To User with your image)
    const clientMailPromise = transporter.sendMail({
      from: `"Brenda Keya" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `The start of your alignment journey, ${data.name}`,
      html: `
        <div style="background-color: #050a12; padding: 40px; color: #ffffff; font-family: serif;">
          <img src="https://brenda-sigma.vercel.app/brendapp2.jpeg" style="width: 100%; max-width: 600px; border-radius: 20px;" />
          <h1 style="color: #d4a34a;">Hello ${data.name}</h1>
          <p>I have received your intake regarding your role as ${data.role}.</p>
        </div>
      `
    });

    await Promise.all([adminMailPromise, clientMailPromise]);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      // TypeScript now knows 'error' has a '.message' property
      errorMessage = error.message;
    }
    console.error("Fullstack Error:", error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}