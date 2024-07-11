import { sendPendingTaskEmails } from '@/lib/nodemailer';
import { NextResponse } from 'next/server';

export async function GET() {
    await sendPendingTaskEmails()
    console.log("Emails Sent")
  return NextResponse.json({ ok: true });
}