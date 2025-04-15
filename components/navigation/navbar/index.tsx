import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import GlobalSearch from "@/components/search/GlobalSearch";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-5 background-light900_dark200 p-6 shadow-light-300 sm:px-12">
      <Link href="/" className="flex items-center gap-1 max-lg:hidden">
        <p className="h1-bold text-dark300_light900">
          Ra<span className="primary-text-gradient">ports</span>
        </p>
      </Link>

      {/* <GlobalSearch /> */}

      <Theme />

      {/* <div className="flex-between gap-3">

        <form
          action={async () => {
            "use server";
            await signIn("keycloak");
          }}
        >
          <Button type="submit" className="min-w-[80px] max-sm:hidden">
            Sign In
          </Button>
        </form>

        <MobileNavigation />
      </div> */}
    </nav>
  );
};

export default Navbar;
