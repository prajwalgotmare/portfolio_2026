import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 22px 48px -26px rgba(15, 23, 42, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
