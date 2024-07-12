import { sendPendingTaskEmails } from "@/lib/nodemailer";

export async function POST() {
  const res = await sendPendingTaskEmails();
  return Response.json(res.message);
}
