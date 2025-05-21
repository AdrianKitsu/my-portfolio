/** @type {import('tailwindcss').Config} */
const textshadow = require("tailwindcss-textshadow");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caslon: ["Caslon", "sans-serif"],
        futura: ["Futura", "sans-serif"],
        urw: ["Urw", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 31s linear infinite",
      },
      scale: {
        130: "1.3",
      },
      width: {
        420: "420px",
      },
      textShadow: {
        dark: "9px 9px 9px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
