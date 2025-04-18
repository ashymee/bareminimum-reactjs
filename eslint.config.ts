// eslint.config.ts
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  // Konfigurasi dasar dari ESLint
  js.configs.recommended,

  // Konfigurasi TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname
      },
      globals: {
        document: "readonly",
        console: "readonly",
        React: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin
    },
    settings: {
      react: {
        version: "detect" // Otomatis mendeteksi versi React
      }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-non-null-assertion": "off", // Contoh aturan kustom
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    }
  },

  // Konfigurasi React Hooks
  {
    plugins: {
      "react-hooks": reactHooksPlugin
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },

  // Environment Node.js untuk file JavaScript
  {
    files: ["*.js", "*.cjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly"
      }
    }
  },

  // Environment Node.js untuk file TypeScript
  {
    files: ["*.ts"],
    languageOptions: {
      globals: {
        __dirname: "readonly"
      }
    }
  },

  // Konfigurasi khusus untuk file test
  {
    files: ["__test__/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null // Nonaktifkan type checking untuk file test
      }
    }
  },

  // Mengabaikan file tertentu
  {
    ignores: ["node_modules/", "dist/"]
  }
];
