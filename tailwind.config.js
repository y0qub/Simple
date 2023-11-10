/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'min' : '400px',

      'maxPhone' : {'max': '400px'} 
    }
  },
  plugins: [],
}

