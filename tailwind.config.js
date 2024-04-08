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
      },
    },
  },
  plugins: [],
};
