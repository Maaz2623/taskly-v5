"use server";

import { CreateTaskProps, TaskProps } from "@/types";
import Task from "../database/models/task.model";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { revalidatePath } from "next/cache";
import { currentUser, EmailAddress } from "@clerk/nextjs/server";
import { sendEmail } from "../nodemailer";

export const createTask = async (values: CreateTaskProps) => {
  try {
    await connectToDatabase();
    const user = await currentUser();
    // @ts-ignore
    const email = user.emailAddresses[0].emailAddress;
    const newTask = await Task.create({
      title: values.title,
      description: values.description,
      priority: values.priority,
      clerkId: values.clerkId,
      email: email,
    });
    console.log(newTask);
    revalidatePath("/dashboard");
    return JSON.parse(JSON.stringify({ message: "Ok", newTask }));
  } catch (error) {
    handleError(error);
  }
};

export const getUserPendingTasks = async (userId: string | null) => {
  try {
    await connectToDatabase();
    const tasks = await Task.find({
      clerkId: userId,
      isPending: true,
      isCompleted: false,
    });
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    handleError(error);
  }
};

export const getUserCompletedTasks = async (userId: string | null) => {
  try {
    await connectToDatabase();
    const tasks = await Task.find({
      clerkId: userId,
      isPending: false,
      isCompleted: true,
    });
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    handleError(error);
  }
};

export const markComplete = async (id: string) => {
  try {
    await connectToDatabase();
    const completedTask = await Task.findByIdAndUpdate(
      id,
      { isCompleted: true, isPending: false },
      { new: true } // To return the updated document
    );
    revalidatePath("/dashboard");
  } catch (error) {
    handleError(error);
  }
};

export const markIncomplete = async (id: string) => {
  try {
    await connectToDatabase();
    const completedTask = await Task.findByIdAndUpdate(
      id,
      { isCompleted: false, isPending: true },
      { new: true } // To return the updated document
    );
    revalidatePath("/dashboard");
  } catch (error) {
    handleError(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    await connectToDatabase();
    const toDeleteTask = await Task.findByIdAndDelete(id);
    revalidatePath("/dashboard");
  } catch (error) {
    handleError(error);
  }
};

export async function getAllPendingTasks() {
  try {
    await connectToDatabase();
    const pendingTasks: TaskProps[] = await Task.find({
      isPending: true,
    }).lean();
    if (pendingTasks.length > 0) {
      return pendingTasks;
    }
  } catch (error) {
    handleError(error);
  }
}
