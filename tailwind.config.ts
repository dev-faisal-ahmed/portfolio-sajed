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
        primary: "#ffd05a",
        secondary: "#0f1820",
        headerBackgroundColor: "#15222d",
        footerColor: "#444E57",
        smallButtonColor: "#4798D7",
      },
    },
  },
  plugins: [],
};
export default config;
