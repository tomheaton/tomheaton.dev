/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  printWidth: 80,
  endOfLine: "lf",
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
  tailwindStylesheet: "./src/styles/globals.css",
};
