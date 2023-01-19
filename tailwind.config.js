/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
delete colors['lightBlue', 'coolGray', 'trueGray', 'warmGray']

module.exports = {
  content: ['./public/**/*.html',
  './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
    }, 
  },
}
