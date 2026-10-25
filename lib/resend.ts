import { Resend } from "resend";

const apiKey =
  process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;

export const resend = new Resend(apiKey);
export const SENDER_EMAIL =
  process.env.RESEND_FROM_EMAIL || "TruHired <no-reply@truhired.in>";
export const BCC_EMAIL =
  process.env.RESEND_BCC_EMAIL || "kunalsharma5868@gmail.com";
