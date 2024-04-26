/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg: "url('./public/cool-background.svg')",
        gradient: "url('https://i.postimg.cc/KzXM2dqT/cool-background.png')"
      },
      fontFamily:{
        popins:[" font-family: 'Poppins', sans-serif;"]
      }
    },
  },
  plugins: [require("daisyui")],
}

