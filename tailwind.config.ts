import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB3C8A",
        secondary: "#F29EBD",
        "sage-green": "#91C796",
        "light-gray": "#D1CFE4",
      },
    },
  },
  plugins: [],
};

export default config;
