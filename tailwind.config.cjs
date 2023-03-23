/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px', '160%'],
      sm: ['12px', '160%'],
      md: ['14px', '160%'],
      base: ['16px', '160%'],
      lg: ['20px', '160%'],
      xl: ['26px', '160%'],
      '2xl': ['32px', '160%'],
      '3xl': ['40px', '160%'],
      '4xl': ['48px', '160%'],
    },
    colors: {
      primary: {
        50: '#E5F3FF',
        100: '#CCE7FF',
        200: '#B3DBFE',
        300: '#99CFFD',
        400: '#80C3FC',
        500: '#66B8FC',
        600: '#4DABFB',
        700: '#33A0FB',
        800: '#1A94FA',
        900: '#0088FA',
      },
      secondary: {
        50: '#F3EDFF',
        100: '#E7DAFF',
        200: '#DCC8FF',
        300: '#D0B6FF',
        400: '#C4A3FF',
        500: '#B891FF',
        600: '#AC7EFF',
        700: '#A16DFF',
        800: '#955BFF',
        900: '#8948FF',
      },
      green: '#00D468',
      red: '#FF3929',
      orange: '#FFAB14',
      ...defaultTheme.colors,
    },
    screens: {
      xs: { max: '639px' },
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
