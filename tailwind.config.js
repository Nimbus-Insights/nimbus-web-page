/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ni-white": "#ffffee",
        "ni-yellow": "#ffbf00",
        "ni-blue": {
          dark: "#0b2a49",
          medium: "#3495c8",
          light: "#76dfff",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.5s ease-in-out forwards",
      },
      scale: {
        120: "1.20", // Escala para aumentar em 20%
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      transform: ["hover"],
      scale: ["hover"],
      animation: ["hover"],
    },
  },
};
