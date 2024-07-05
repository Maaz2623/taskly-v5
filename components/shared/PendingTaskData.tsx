"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskProps } from "@/types";
import CustomCheckbox from "./CustomCheckbox";
import Image from "next/image";
import { deleteTask } from "@/lib/actions/task.action";
import { toast, useToast } from "../ui/use-toast";

const PendingTaskData = ({
  _id,
  title,
  description,
  priority,
  isPending,
  isCompleted,
}: TaskProps) => {
  const { toast } = useToast();

  return (
    <TableRow>
      <TableCell className="font-medium">
        <CustomCheckbox id={_id} type="pending" />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell className="">{priority}</TableCell>
      <TableCell className="">status</TableCell>
      <TableCell className="">
        <Image
          onClick={() => {
            deleteTask(_id);
            toast({
              title: "Task deleted",
            });
          }}
          className="rounded-sm hover:bg-secondary p-1 hover:cursor-pointer transition-all duration-200"
          src="/assets/bin.png"
          width={30}
          height={30}
          alt="Bin"
        />
      </TableCell>
    </TableRow>
  );
};

export default PendingTaskData;