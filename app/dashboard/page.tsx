import CreateTaskForm from "@/components/shared/CreateTaskForm";
import Statistics from "@/components/shared/Statistics";
import TasksContainer from "@/components/shared/TasksContainer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <CreateTaskForm />
      </div>
      <TasksContainer />
    </div>
  );
};

export default DashboardPage;
