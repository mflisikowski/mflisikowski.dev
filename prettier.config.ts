import type { Config } from "prettier";

/**
 * Prettier configuration
 * @type {Config}
 */
const config: Config = {
  singleQuote: false,
  printWidth: 100,
  useTabs: true,
  semi: true,
  trailingComma: "all" as const,
  tailwindConfig: "./tailwind.config.ts",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
