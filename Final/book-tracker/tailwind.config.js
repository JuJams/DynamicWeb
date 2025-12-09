/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#450920',
        'sky-blue': '#a53860',
        'mint': '#da627d',
        'yellow': '#ffa5ab',
        'pink': '#ce4257',
        'warm-brown': '#f9dbbd',
        'dark-brown': '#5C3A2E',
      },
      fontFamily: {
        'gaegu': ['Gaegu', 'cursive'],
      },
    },
  },
  plugins: [],
}
