"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-slate-200 flex justify-between items-center mb-5 py-6 px-20">
      <Link href="/">
        <h1 className="text-3xl">Next Auth Sample App</h1>
      </Link>
    </header>
  );
};

export default Header;
