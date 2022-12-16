/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tiny: "375px",
      xsm: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
        patrick: ["Patrick Hand SC", "cursive"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        roboto: ["Roboto Serif", "serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#121212",
          200: "#191919",
          300: "#282828",
          400: "#404040",
          500: "#b3b3b3",
        },
      },
    },
  },
  plugins: [],
};
