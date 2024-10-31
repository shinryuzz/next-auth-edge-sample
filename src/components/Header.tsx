"use client";

import Link from "next/link";
import { LogInButton, LogOutButton } from "./AuthButton";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-slate-200 flex justify-between items-center mb-5 py-6 px-20">
      <Link href="/">
        <h1 className="text-3xl">Next Auth Sample App</h1>
      </Link>
      <div className="flex items-center gap-5">
        {session ? <LogOutButton /> : <LogInButton />}
      </div>
    </header>
  );
};

export default Header;
