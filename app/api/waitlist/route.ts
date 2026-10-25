import { NextRequest, NextResponse } from "next/server";
import { resend, SENDER_EMAIL, ADMIN_EMAIL } from "@/lib/resend";
import {
  getWaitlistEmailHtml,
  getWaitlistEmailText,
  getAdminNotificationEmailHtml,
  getAdminNotificationEmailText,
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

    const subscriberPromise = resend.emails.send({
      from: SENDER_EMAIL,
      to: [email],
      subject: "You're on the TruHired waitlist",
      html: getWaitlistEmailHtml(email),
      text: getWaitlistEmailText(email),
    });

    const adminPromise = ADMIN_EMAIL
      ? resend.emails.send({
          from: SENDER_EMAIL,
          to: [ADMIN_EMAIL],
          subject: `🚀 New Waitlist Signup: ${email}`,
          html: getAdminNotificationEmailHtml(email),
          text: getAdminNotificationEmailText(email),
        })
      : Promise.resolve({ data: null, error: null });

    const [subscriberResult, adminResult] = await Promise.allSettled([
      subscriberPromise,
      adminPromise,
    ]);

    const subscriberError =
      subscriberResult.status === "rejected"
        ? subscriberResult.reason
        : subscriberResult.value.error;

    const adminError =
      adminResult.status === "rejected"
        ? adminResult.reason
        : adminResult.value.error;

    if (subscriberError && adminError) {
      const errorMessage =
        subscriberError?.message ||
        adminError?.message ||
        "Failed to dispatch emails.";
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 }
      );
    }

    const subscriberData =
      subscriberResult.status === "fulfilled"
        ? subscriberResult.value.data
        : null;

    return NextResponse.json({
      success: true,
      id: subscriberData?.id,
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
