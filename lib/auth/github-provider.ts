import GitHubProvider from "next-auth/providers/github";

export default GitHubProvider({
  clientId: process.env.GITHUB_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
});
