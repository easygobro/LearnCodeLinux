import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-brown':'#f2e1cd',
        'custom-brown2': '#e3c9aa',
        'customOrange':'#e98102', 
        'customOrange2': "#d77704",
      },
      fontFamily: {
        abc: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        'landing': '35px'
      },
    },  
},
  plugins: [],
};
export default config;
