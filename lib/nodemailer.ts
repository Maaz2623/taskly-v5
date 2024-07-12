"use server";

import nodemailer from "nodemailer";
import Task from "./database/models/task.model";
import { cronJobTaskProps, TaskProps } from "@/types";
import { connectToDatabase } from "./database/mongoose";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohammedmaaz2623@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: "mohammedmaaz2623@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const sendPendingTaskEmails = async () => {
  try {
    await connectToDatabase(); // Connect to your database
    const pendingTasks = await Task.find({ isPending: true });

    const uniqueEmailsSet: any = new Set();

    // Collect unique emails and task titles
    pendingTasks.forEach((task) => {
      uniqueEmailsSet.add(task.email);
    });

    const uniqueEmails: string[] = Array.from(uniqueEmailsSet);

    await Promise.all(
      uniqueEmails.map(async (uniqueEmail) => {
        const subject = "Pending Task Reminder";
        const text = `You have pending tasks in your Taskly list, please complete them soon.`;
        await sendEmail(uniqueEmail, subject, text);
      })
    );

    return { message: `Emails sent to: ${uniqueEmails.join(", ")}`, status: 1 };
  } catch (error) {
    console.error("Error sending pending task emails:", error);
    throw error; // Rethrow the error to be handled elsewhere
  }
};
