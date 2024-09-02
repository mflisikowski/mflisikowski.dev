module.exports = {
  singleQuote: false,
  printWidth: 100,
  useTabs: false,
  semi: true,
  trailingComma: "all",
  tailwindConfig: "./tailwind.config.ts",
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  importOrder: [
    "^@/types/(.*)$",
    "^@types/(.*)$",
    "^@/public/(.*)$",
    "^@/components/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  attributeGroups: ["^(id|name)$", "^class$", "$DEFAULT", "^aria-"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-tailwindcss",
  ],
};
