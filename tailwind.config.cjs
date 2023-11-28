/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xss': '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px'
      },
      colors: {
        primary: '#073742',
        secondary: '#BDEDFC',
        sky: '#EBFAFE',
        pink: '#FFA2EA',
        green: '#56FFA4',
        orange: '#FF9256',
        yellow: '#FEFF91',
        lace: '#FFDEF7',
        water: '#D1F2FD',
        calamansi: '#FDFFAD',
        'dark-gray': '#889BA0',
        'light-gray': '#E0E5E6',
        'accent-gray': '#111111',
        'base-gray': '#5A6C71',
        'accent-light-gray': '#6B738A'
      },
      backgroundColor: {
        'light': '#F4ECDC',
        'boxes': '#F6F6F6',
        'stroke': '#FFF',
      },
      opacity: {
        '1': '0.1',
        '2': '0.2',
        '3': '0.3',
        '4': '0.4',
        '5': '0.5',
        '6': '0.6',
        '7': '0.7',
        '8': '0.8',
        '9': '0.9',
        '10': '1',
      },
      width: {
        '18': '70px'
      },
      height: {
        '18': '70px'
      },
      fontSize: {
        'extra': '22px',
        '6.2xl': '62px'
      },
      borderRadius: {
        '5xl': '40px',
        'curved': '100px'
      }
    },
    container: {
      padding: '1rem',
      center: true
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi', 'ri', 'ph', 'bi', "charm", 'icon-park-outline', 'uil', 'carbon', 'gg', 'solar']),
    }),
  ],
}
