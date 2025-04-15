import React from "react";
import { tools } from "@/constants";
import ToolCard from "@/components/cards/ToolCard";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
};

export default page;
