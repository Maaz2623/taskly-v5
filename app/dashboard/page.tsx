import CreateTaskForm from "@/components/shared/CreateTaskForm";
import TasksContainer from "@/components/shared/TasksContainer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = () => {

  const {userId} = auth()

  if(!userId) redirect('/sign-in')

  return (
    <div>
      <CreateTaskForm />
      <TasksContainer />
    </div>
  );
};

export default DashboardPage;