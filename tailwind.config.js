/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"'],
      },
      colors: {
        'lgu-green': '#2D5F2E',
        'lgu-lime': '#B5F8B6',
        'lgu-yellow': '#FFE77B',
        'calendar': '#008000'
      },
      boxShadow: {
        'chat': 'inset 0 0 5px rgba(0, 0, 0, 0.3)',
      },
      backgroundColor: {
        'emergency': 'red', // Define the 'success' background color as green
        'event': 'green'
      },
      screens: {
        'lg': '1169px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          '&::-webkit-scrollbar': {
            "display": "none"
          },
        }
      })
    })
  ],
} 