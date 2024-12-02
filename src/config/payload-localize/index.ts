import type { Config } from "payload";

export const localization: Config["localization"] = {
  locales: [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Polski",
      code: "pl",
    },
  ],
  defaultLocale: "en",
  fallback: true,
};
