import EmailProvider from "next-auth/providers/email";

export default EmailProvider({
  server: {
    host: process.env.EMAIL_SERVER_HOST as string,
    port: Number(process.env.EMAIL_SERVER_PORT) as number,
    auth: {
      user: process.env.EMAIL_SERVER_USER as string,
      pass: process.env.EMAIL_SERVER_PASSWORD as string,
    },
  },
  from: process.env.EMAIL_FROM as string,
});
