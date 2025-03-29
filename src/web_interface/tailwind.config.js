const flowbite = require("flowbite-react/tailwind");
const { Montserrat } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/components/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'HKGrotesk': ['HKGrotesk', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#EDDFCB',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0px 0px 10px rgba(0, 0, 0, 0.4)',
        },
      });
    }
  ],
}

