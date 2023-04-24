/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#FFF",
      transparent: "transparent",

      stone: {
        200: "#e7e5e4",
        400: "#a8a29e",
        600: "#57534e",
        800: "#292524",
      },
    },
    extend: {
      backgroundImage: {
        main: "linear-gradient(116.82deg, #334155 0%, #64748b 38.02%, #111827 100%)",
      },
    },
  },
  plugins: [],
};
