"use client";

import { useSession } from "next-auth/react";

export const runtime = "edge";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="w-full text-center">
      <h1 className="text-2xl my-4">Hello World</h1>
      <div>
        {session && (
          <div>
            <p>Hi, {session.user?.email}</p>
            <p> You logged in. </p>
          </div>
        )}
      </div>
    </div>
  );
}
