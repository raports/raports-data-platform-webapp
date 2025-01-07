import React from "react";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px]">
      <div className="relative flex min-h-[56px] grow items-center gap-1 rounded-xl bg-light-800 px-4">
        <BiSearch />
        <Input
          type="text"
          placeholder="Search for dashboards, datasets, and apps..."
          className="paragraph-regular no-focus border-none bg-transparent text-dark-400 shadow-none outline-none"
        />
      </div>
    </div>
  );
};
export default GlobalSearch;
