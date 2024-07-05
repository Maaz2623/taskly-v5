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
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { deleteTask } from "@/lib/actions/task.action";
import CustomCheckbox from "./CustomCheckbox";
import StatusPing from "./StatusPing";
import PriorityLabel from "./PriorityLabel";

const CompletedTaskData = ({
  _id,
  title,
  description,
  priority,
  isPending,
  isCompleted,
}: TaskProps) => {

  const {toast} = useToast()

  return (
    <TableRow>
      <TableCell className="font-medium">
        <CustomCheckbox id={_id} type="completed" />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell className=""><PriorityLabel label={priority} /></TableCell>
      <TableCell className=""><StatusPing isCompleted={isCompleted} /></TableCell>
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

export default CompletedTaskData;