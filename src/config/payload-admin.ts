import type { Config } from "payload";

export const payloadAdminConfig: Config["admin"] = {
  components: {
    graphics: {
      Icon: "@/components/(payload)/icon",
      Logo: "@/components/(payload)/logo",
    },
  },
};
