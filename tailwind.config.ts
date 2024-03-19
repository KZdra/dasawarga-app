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
    },
    colors :{
      'blueR': {
        '50': '#edf8ff',
        '100': '#d7ecff',
        '200': '#b9e0ff',
        '300': '#88ceff',
        '400': '#50b2ff',
        '500': '#2890ff',
        '600': '#0f6fff',
        '700': '#0a59eb',
        '800': '#0f47be',
        '900': '#134095',
        '950': '#11285a',
    },
    
    },
  },
  plugins: [require("daisyui")],
};
export default config;
