/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {        
        secondary: "#150E28",
        tertiary: "#903AFF",
        primary: "#D434FE",
      },
    },
  },
  plugins: [],
};
