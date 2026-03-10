import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn", // Upozorní tě (žlutě), pokud vytvoříš něco, co nepoužíváš
      "no-console": "off",      // Dovolíme si console.log pro učení a ladění appky
    },
  },
];