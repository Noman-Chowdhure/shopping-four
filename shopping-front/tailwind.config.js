/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        PT:"'Montserrat Underline',serif",
        GB:"'Playwrite GB J Guides',cursive",
        AGU:"'Agu Display',serif"
      }
    },
  },
  plugins: [],
}