import { sendPendingTaskEmails } from "@/lib/nodemailer";

export async function GET() {
  const res = await sendPendingTaskEmails();
  return Response.json(res.message);
}
