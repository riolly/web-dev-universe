/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        head: ["Oswald", "san-serif"],
        body: ["Karla", "san-serif"],
      },
      colors: {
        brand: {
          50: "#f7f9fb",
          100: "#e3f1fc",
          200: "#c4ddf9",
          300: "#97baef",
          400: "#6c93e2",
          500: "#546fd6",
          600: "#4552c3",
          700: "#353e9f",
          800: "#252972",
          900: "#151947",
        },
        accent: {
          50: "#ebfdff",
          100: "#cdf8ff",
          200: "#a1eeff",
          300: "#39d7ff",
          400: "#1ac6f6",
          500: "#00a9dc",
          600: "#0185b9",
          700: "#096b95",
          800: "#115779",
          900: "#134866",
        },
      },
      boxShadow: {
        bottom: "0px 15px 20px -15px #111;",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
