import { NextAuthOptions } from "next-auth";

import EmailProvider from "@/lib/auth/email-provider";
import GitHubProvider from "@/lib/auth/github-provider";
import PrismaAdapter from "@/lib/auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  providers: [EmailProvider, GitHubProvider],
  adapter: PrismaAdapter,
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signOut: "/sign-out",
    signIn: "/sign-in",
  },
};
