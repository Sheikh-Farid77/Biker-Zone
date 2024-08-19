/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'button': '#E76F51',
      'white' : '#FFFFFF',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

