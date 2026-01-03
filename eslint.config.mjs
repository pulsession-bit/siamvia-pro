import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "backend/**/*",
      "scripts/**/*",
      "legacy_vite/**/*",
      "Siam-Musltiva/**/*",
      ".next/**/*",
      "out/**/*",
      "dist/**/*",
      "build/**/*",
      "node_modules/**/*",
    ],
  },
];

export default eslintConfig;
