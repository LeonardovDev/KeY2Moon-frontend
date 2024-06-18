import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
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
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
