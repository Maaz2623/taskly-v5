import React from "react";

const PriorityLabel = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-start items-center w-1/2">
      <div
        className={`flex w-full justify-center rounded-2xl items-center ${
          label === "High"
            ? "bg-red-700 bg-opacity-50 border border-red-500 border-opacity-50 shadow-sm shadow-red-500 backdrop-blur-lg backdrop-filter"
            : label === "Medium"
            ? "bg-yellow-700 bg-opacity-50 border border-yellow-500 border-opacity-50 shadow-sm shadow-yellow-500 backdrop-blur-lg backdrop-filter"
            : "bg-green-700 bg-opacity-50 border border-green-500 border-opacity-50 shadow-sm shadow-green-500 backdrop-blur-lg backdrop-filter"
        } `}
      >
        <p
          className={`text-center px-5 rounded-xl text-[12px] tracking-wider font-medium `}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default PriorityLabel;
