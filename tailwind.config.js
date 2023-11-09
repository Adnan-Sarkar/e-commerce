/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        secondary: "#767676",
        secondaryLight: "#6D6D6D",
        grayLight: "#F5F5F3",
      },
    },
  },
  plugins: [],
};
