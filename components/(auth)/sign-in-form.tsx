import Messages from "@/components/(auth)/messages";

export function SignInForm() {
  return (
    <form
      className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      action="/auth/sign-in"
      method="post"
    >
      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
      />

      <label className="text-md" htmlFor="password">
        Password
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        placeholder="••••••••"
        type="password"
        name="password"
        required
      />

      <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
        Sign in
      </button>

      <Messages />
    </form>
  );
}
