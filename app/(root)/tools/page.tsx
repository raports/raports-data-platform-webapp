import React from "react";
import { tools } from "@/constants";
import ToolCard from "@/components/cards/ToolCard";

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      {" "}
      {tools.map((tool) => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
};

export default page;
