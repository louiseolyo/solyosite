/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2EFEA",
        sage: "#6B8F71",
        olive: "#B9CBB1",
        terra: "#C26B47",
        charbon: "#3E3E3E",
      },
      fontFamily: {
        perso: ["policelogo", "sans-serif"],
      },
    },
  },
  plugins: [],
}


