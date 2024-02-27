/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik: ["Rubik Scribble", "system-ui"],
        hachi:["Hachi Maru Pop", "cursive"],
        normal:["Rubik", "sans-serif"]
      },
      colors:{
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
      }
    },
  },
  plugins: [],
}