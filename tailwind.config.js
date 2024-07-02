/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      backgroundImage: {
        bgimg:"url('https://d183lnwxwyo5i2.cloudfront.net/e3dhua%2Fpreview%2F57613009%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1714500436&Signature=RPy7XklAfBAGXgMwY763TKy3BKy6WJdXfe7QGiDcuRHJ7wS3P9kj9z3rsjXI3AcrserDwmL3rCTfSCGjowh74dE-G31mhleno1Sw2NDsRYuhCeZ2weA6lyNKFBVFFwyF2pCijsqXao9zXBIiTRfTYjPsF3vwthz9FjcjNpXeiZ4yLv0daKmzaCpTtsizDmCegJML-xHjaF6ZCwnHfwFl8xiz~FOkQX1Vo58kySxKnyF2uZatX0OnYZqyAQWNoh24L~RibF156KPJdS9owq4grhxlrN54JFxA3yygWPwE0wrBNPYUFWO228t27k6SFYB0lS8kQdFTW7YdmL9dV~YIqA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ')",
        gradient: "url('https://i.postimg.cc/KzXM2dqT/cool-background.png')",
      },
      fontFamily: {
        popins: [" font-family: 'Poppins', sans-serif;"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "synthwave"],
  },
};
