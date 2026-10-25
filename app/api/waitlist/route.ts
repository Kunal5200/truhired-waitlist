import { NextRequest, NextResponse } from "next/server";
import { resend, SENDER_EMAIL } from "@/lib/resend";
import {
  getWaitlistEmailHtml,
  getWaitlistEmailText,
} from "@/lib/email-template";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [email],
      subject: "You're on the TruHired waitlist",
      html: getWaitlistEmailHtml(email),
      text: getWaitlistEmailText(email),
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
