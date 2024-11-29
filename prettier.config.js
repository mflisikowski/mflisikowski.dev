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
    "^@/access/(.*)$",
    "^@/actions/(.*)$",
    "^@/components/(.*)$",
    "^@/config",
    "^@/hooks/(.*)$",
    "^@/i18n/(.*)$",
    "^@/providers/(.*)$",
    "^@/public/(.*)$",
    "^@/seo/(.*)$",
    "^@/stores/(.*)$",
    "^@/types/(.*)$",
    "^@/utils/(.*)$",
    "^@/types",
    "^[./]",
  ],
  attributeGroups: ["^(id|name)$", "^class$", "$DEFAULT", "^aria-"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-tailwindcss",
  ],
};
