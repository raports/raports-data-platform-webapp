import React from "react";
import { tools } from "@/constants";
import ToolCard from "@/components/cards/ToolCard";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {tools.map((tool) => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
};

export default page;
