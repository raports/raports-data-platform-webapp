import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-light-900">
      <Navbar />
      <div className="flex">
        {/* <LeftSidebar /> */}
        <section className="flex min-h-screen flex-1 flex-col background-light850_dark100 px-6 pb-6 pt-36">
          <div className="mx-auto w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
