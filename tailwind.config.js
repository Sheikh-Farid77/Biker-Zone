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
      'header-bg' : 'rgba(231, 111, 81, 0.1);',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

