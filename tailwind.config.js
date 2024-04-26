/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg: "url('./public/cool-background.svg')"
      },
      fontFamily:{
        popins:[" font-family: 'Poppins', sans-serif;"]
      }
    },
  },
  plugins: [require("daisyui")],
}

