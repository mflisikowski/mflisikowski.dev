"use client";

import { signIn } from "next-auth/react";

export function SignInButton({ ...props }) {
  return (
    <button onClick={() => signIn()} {...props}>
      Sign in
    </button>
  );
}
