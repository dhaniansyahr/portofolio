/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
      },
      colors: {
        primary: "#1C1C1E",
      },
    },
  },
  plugins: [],
};
