/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
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
  daisyui: {
    themes: ["light", "synthwave",],
  },
}

