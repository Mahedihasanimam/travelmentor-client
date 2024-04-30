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
        bgimg: "url('https://d2jedw6aeswgqp.cloudfront.net/n4m7ka%2Fpreview%2F57599698%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1714466498&Signature=WxtIz3uGeXnsZ7ZGyhMFOr8rlYvLKZFj04RqL5Bt06VCphYU~T3M4serkIWsD3UP6hsMFPCZGu5c71IjxqKoEI5yZ6v5XzvjiQ9HVfbUOXn0RDKiS35lumENo~I4xT6Q-Y5THHV4Qa4eO4rMmc7PbaNsLLZJ1-J0VHdXvFqE7er55IUIO10b-obYcOQ-DZawUZThFiJVhrN0YPCbUe3Mm59vi67HNTnpkY1m516WAMsA45IbaUsKrqQVyf4DA-~4JNWE9VNQe1o9uiDpAfqW4euNVxSBVPg6jfa0jNWICQUb7OzewodIO5BEKe-UyyzjDl3pKELzeMNnjw7IENTV7g__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ')",
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

