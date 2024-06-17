import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#092332",
        lightyellow: "#F3AD35",
      },
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        rancho: ['var(--font-rancho)'],
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
};
export default config;
