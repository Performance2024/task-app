/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cscolor: {
          100: "#F5F5F7",
          200: "#8E92BC",
          300: "#141522",
          400: "#54577A",
          500: "#FF4D5E",
          600: "#546FFF",
          700: "#BAC8FF",
          800: "#04A4F4",
          900: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
