/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000814',
        'grey': '#D9D9D9',
        'blue': '#003566',
        'dark-yellow': '#ffc300',
        'yellow': '#ffd60a'
      }
    },
  },
  plugins: [],
}

