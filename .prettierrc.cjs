/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],

  astroAllowShorthand: false,
  importOrder: [
    "<BUILT_IN_MODULES>",
    "",
    "^(astro$)|^(astro:(.*)$)|^(astro/(.*)$)",
    "^(@astrojs/(.*)$)|^(astro(.*)$)",
    "^((.*)-astro-(.*)$)|^((.*)-astro$)",
    "^(solid-js$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^layouts/(.*)$",
    "^components/(.*)$",
    "^content/(.*)$",
    "^assets/(.*)$",
    "^./(.*)$",
    "^../(.*)$",
    "",
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "^(?!.*[.]css$)[./].*$",
    "^(.*).css$",
    "^[.]",
  ],
};

module.exports = config;
