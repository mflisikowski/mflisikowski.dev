"use client";

import { signOut } from "next-auth/react";

export function SignOutButton({ ...props }) {
  return (
    <button onClick={() => signOut()} {...props}>
      Sign out
    </button>
  );
}
