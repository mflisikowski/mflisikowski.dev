import { resendAdapter } from "@payloadcms/email-resend";
import type { Config } from "payload";

export const email: Config["email"] = resendAdapter({
  defaultFromAddress: "dev@mflisikowski.dev",
  defaultFromName: "Mateusz Flisikowski",
  apiKey: process.env.RESEND_API_KEY!,
});
