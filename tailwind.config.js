/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff135b",
        chartreuse: {
          50: "#feffe4",
          100: "#fcffc4",
          200: "#f7ff90",
          300: "#ecff50",
          400: "#daff01",
          500: "#bfe600",
          600: "#94b800",
          700: "#6f8b00",
          800: "#586d07",
          900: "#4a5c0b",
          950: "#263400",
        },
      },
    },
  },
  plugins: [],
};
