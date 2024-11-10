import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-5 bg-light-900 p-6 shadow-light-300 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="h1-bold text-dark-200">
          Ra<span className="primary-text-gradient">ports</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">User</div>
    </nav>
  );
};

export default Navbar;
