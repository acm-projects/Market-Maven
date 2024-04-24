/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '300': '3.00',
      }
    },
    screens: {
      'sm': '640px',
      'md': '840px'
    }
  },
  plugins: [],
}


