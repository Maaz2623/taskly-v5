import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@clerk/nextjs/server";
import { TaskProps } from "@/types";
import {
  getUserCompletedTasks,
  getUserPendingTasks,
} from "@/lib/actions/task.action";
import PendingTaskData from "./PendingTaskData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CompletedTaskData from "./CompletedTaskData";
import EmptyTasks from "./EmptyTasks";

const TasksContainer = async () => {
  const { userId } = auth();
  const pendingTasks = await getUserPendingTasks(userId);
  const completedTasks = await getUserCompletedTasks(userId);

  return (
    <div className="">
      <Tabs defaultValue="pending" className="bg-background">
        <TabsList className="w-full">
          <TabsTrigger className="w-full " value="pending">
            Pending
          </TabsTrigger>
          <TabsTrigger className="w-full " value="completed">
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Mark</TableHead>
                <TableHead className="w-[250px]">Title</TableHead>
                <TableHead className="w-[350px]">Description</TableHead>
                <TableHead className="w-[200px]">Priority</TableHead>
                <TableHead className="w-[200px]">Status</TableHead>
                <TableHead className="w-[100px]">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingTasks.map((task: TaskProps) => (
                <PendingTaskData
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  description={task.description}
                  isCompleted={task.isCompleted}
                  isPending={task.isPending}
                  priority={task.priority}
                  isOutDated={task.isOutDated}
                />
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="completed">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Mark</TableHead>
                <TableHead className="w-[250px]">Title</TableHead>
                <TableHead className="w-[350px]">Description</TableHead>
                <TableHead className="w-[200px]">Priority</TableHead>
                <TableHead className="w-[200px]">Status</TableHead>
                <TableHead className="w-[100px]">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedTasks.map((task: TaskProps) => (
                <CompletedTaskData
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  description={task.description}
                  isCompleted={task.isCompleted}
                  isPending={task.isPending}
                  priority={task.priority}
                  isOutDated={task.isOutDated}
                />
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TasksContainer;
