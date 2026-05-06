import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-cream": "#fff6d1",
        "primary-green": "#003631",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
