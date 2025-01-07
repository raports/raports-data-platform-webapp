import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { signIn } from "@/auth";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <BiMenu className="size-[36px] sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className=" border-none bg-light-900 pb-[24px]">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <p className="h1-bold text-dark-200">
            Ra<span className="primary-text-gradient">ports</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col pt-16">
              <form
                action={async () => {
                  "use server";
                  await signIn("keycloak");
                }}
              >
                <Button
                  type="submit"
                  className="mb-5 min-h-[42px] w-full rounded-lg px-4 py-3"
                >
                  Sign In
                </Button>
              </form>
              <NavLinks isMobileNav></NavLinks>
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
