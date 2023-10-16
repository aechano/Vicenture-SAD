/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"'],
      },
      colors: {
        'lgu-green' :'#2D5F2E',
        'lgu-lime'  :'#B5F8B6',
        'lgu-yellow':'#FFE77B',
      },
    },
  },
  plugins: [],
} 