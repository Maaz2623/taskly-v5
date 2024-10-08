"use client";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { markComplete, markIncomplete } from "@/lib/actions/task.action";
import { useToast } from "../ui/use-toast";

const CustomCheckbox = ({ id, type }: { id: string; type: string }) => {
  const { toast } = useToast();

  return (
    <div className="flex justify-start items-center gap-2">
      <Checkbox
        className="h-5 w-5 transition-all duration-100"
        // onClick={}
        onCheckedChange={async () => {
          if (type === "pending") {
            await markComplete(id);
            toast({
              title: `${
                type === "pending"
                  ? "Congratulations!"
                  : "Moved to pending tasks"
              }`,
              description: `${type === "pending" ? "Task completed" : ""}`,
            });
          } else {
            markIncomplete(id);
            toast({
              title: `${
                type === "pending"
                  ? "Congratulations!"
                  : "Moved to pending tasks"
              }`,
              description: `${type === "pending" ? "Task completed" : ""}`,
            });
          }
        }}
      />
      <p className="">{type === "pending" ? "Complete" : "Incomplete"}</p>
    </div>
  );
};

export default CustomCheckbox;
