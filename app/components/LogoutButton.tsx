"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
      className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition duration-300 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300"
    >
      Logout
    </button>
  );
}