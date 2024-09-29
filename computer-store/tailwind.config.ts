import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '430px',  // Custom breakpoint for 430px
      },
      boxShadow: {
        'custom-green': '0 10px 15px -3px rgba(0, 223, 154, 0.4), 0 4px 6px -2px rgba(0, 223, 154, 0.3)',
      },
      colors: {
        'custom-gray': 'rgba(136, 139, 138, 0.2)',
        'custom-gray-medium': 'rgba(128, 128, 128, 0.75)',
        
      },
      backgroundColor: {
        'green' : 'rgb(41 212 35)',
      },
      flexGrow: {
        '3': '3',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      scale: ['hover'],
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
  
};

export default config;
