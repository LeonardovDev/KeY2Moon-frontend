import type { Config } from "tailwindcss";

const config: Config = {
  important:true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkblue": "#092332",
        "lightyellow": "#F3AD35",
        "trans-dark": "#78797B",
        "main-purple": "#801eff",
        "main-back": "#000211",
        "main-red": "#f33592",
        "main-green": "#45f336",
        "item-back": "#252525",
        "footer-text": "#aeaeae",
        "mobile-header": "rgb(32 34 39)",
      },
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        rancho: ['var(--font-rancho)'],
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [ 
    require('flowbite/plugin'),
    require("tailwind-scrollbar-hide")
  ],
};
export default config;
