import React from "react";

const StatusPing = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
            isCompleted ? "bg-green-600" : "bg-orange-600"
          } opacity-75`}
        ></span>
        <span
          className={`relative ${
            isCompleted ? "bg-green-600" : "bg-orange-600"
          } inline-flex rounded-full h-2 w-2`}
        ></span>
      </span>
      <p className={`italic ${isCompleted ? "text-green-600" : "text-orange-600"}`}>
        {isCompleted ? "completed" : "pending"}
      </p>
    </div>
  );
};

export default StatusPing;
