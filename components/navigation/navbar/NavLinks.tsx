"use client";

import React from "react";

import { navigationLinks } from "@/constants";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {navigationLinks.map((group) => (
        <div key={group.title} className="mb-4">
          {group.title && (
            <p className="paragraph-semibold mb-2 mt-4 max-lg:hidden">
              {group.title}
            </p>
          )}
          {group.links.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            if (item.route === "/profile") {
              if (userId) item.route = `${item.route}/${userId}`;
              else return null;
            }

            const LinkComponent = (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  isActive ? "bg-light-700" : "",
                  "flex items-center p-2 hover:bg-gray-100 text-dark-400 rounded-lg"
                )}
              >
                <item.icon className="size-[24px]" />
                <p
                  className={cn(
                    isActive ? "font-bold" : "font-medium",
                    "ml-4 base-semibold",
                    !isMobileNav && "max-lg:hidden"
                  )}
                >
                  {item.label}
                </p>
              </Link>
            );

            return isMobileNav ? (
              <SheetClose asChild key={item.route}>
                {LinkComponent}
              </SheetClose>
            ) : (
              <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
