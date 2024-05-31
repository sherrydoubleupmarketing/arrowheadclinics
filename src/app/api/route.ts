import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "../emails/EmailTemplate";

const resend = new Resend("re_Ee5vvV31_Nwxej621fVwPTA2dXgX8F1L7");

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: `${email}`,
      subject: `${name} has a message!`,
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
