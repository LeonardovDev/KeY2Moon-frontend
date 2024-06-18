import type { NextRequest, NextResponse } from "next/server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_M7Kq6jL4_KgMZUCP7khz7RBYT18Z3SDm3");

export async function POST(req: NextRequest, res: NextResponse) {
  const { message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["leonardov0529@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({  message }),
      text: "",
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}
