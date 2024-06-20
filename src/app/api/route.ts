import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "../emails/EmailTemplate";
import dns2 from "dns2";

const resend = new Resend("re_Ee5vvV31_Nwxej621fVwPTA2dXgX8F1L7");

export async function POST(req: NextRequest) {
  const { name, email, message, phone, type } = await req.json();

  if (!name || !email || !message || !phone) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }
  try {
    const domain = email.split("@")[1];
    const dns = new dns2();
    const response = await dns.resolveA(domain);
    const validity = response.answers.length > 0 ? "Valid" : "Spam";
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: `hasnainahmad4890@gmail.com`,
      subject: `${name} has a message!`,
      react: EmailTemplate({ name, email, message, phone, validity, type }),
    });

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
