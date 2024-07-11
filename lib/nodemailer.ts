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
  await connectToDatabase()
  const pendingTasks = await Task.find({ isPending: true });
  const taskTitle = pendingTasks.map((task: cronJobTaskProps) => task.title);
  const emails = pendingTasks.map((task: cronJobTaskProps) => task.email);
  console.log("I'm here");
  await Promise.all(
    emails.map(async (email) => {
      // Assuming you have user email associated with the task
      const subject = "Pending Task Reminder";
      const text = `You have a pending task: ${taskTitle}. Please complete it soon.`;
      sendEmail(email, subject, text);
    })
  );
};
