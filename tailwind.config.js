/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        ghostWhite: "#f8f8ff",
        grey: "#9f9fa0",
        blue: "#0369A1",
        darkprimary: "#18122b",
        darksecondary: "#393053",
        darkthird: "#282A3A",
        lightText: "#FFA3FD",
      },
      boxShadow: {
        heroShadow: "0px 0px 16px rgba(0,0,0,0.15)",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },

  plugins: [],
};
