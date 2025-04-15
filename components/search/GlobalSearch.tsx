import React from "react";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px]">
      <div className="relative flex min-h-[56px] grow items-center gap-1 rounded-xl background-light800_darkgradient px-4">
        <BiSearch className="text-light-400 dark:text-light-500" />
        <Input
          type="text"
          placeholder="Search for dashboards, datasets, and apps..."
          className="paragraph-regular no-focus border-none bg-transparent text-dark400_light700 shadow-none outline-hidden"
        />
      </div>
    </div>
  );
};
export default GlobalSearch;
