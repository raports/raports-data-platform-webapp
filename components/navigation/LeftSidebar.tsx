import React from "react";
import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-start overflow-y-auto border-r border-light-800 bg-light-900 p-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[256px]">
      <div className="flex flex-1 flex-col">
        <NavLinks />
      </div>
    </section>
  );
};

export default LeftSidebar;
