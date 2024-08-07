import type { Config } from "tailwindcss";
// module.exports = {
//   theme: {
//     extend: {
//       zIndex: {
//         '9999': '9999',
//       },
//       transitionProperty: {
//         'custom': 'all',
//       },
//       transitionTimingFunction: {
//         'ease-in-out': 'ease-in-out',
//       },
//       transitionDuration: {
//         '300': '300ms',
//       },
//     },
//   },
//   plugins: [],
// }


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
    },
  },
  plugins: [],
  
};

export default config;
