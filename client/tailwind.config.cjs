/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./index.html", // If using Vite
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
