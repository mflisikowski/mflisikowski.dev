// Payload Config
export const payloadSecretConfig = process.env.PAYLOAD_SECRET || "";

export * from "@/config/payload-collections";
export * from "@/config/payload-plugins";
export * from "@/config/payload-editor";
export * from "@/config/payload-email";
export * from "@/config/payload-admin";
export * from "@/config/payload-db";
