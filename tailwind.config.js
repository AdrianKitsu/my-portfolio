/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caslon: ["Caslon", "sans-serif"],
        futura: ["Futura", "sans-serif"],
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
    },
  },
  plugins: [],
};
