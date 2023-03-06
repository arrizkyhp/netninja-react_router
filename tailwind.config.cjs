/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [],
      serif: [],
    },
    extend: {
      colors: {
        primary: {
          50: '#fdf6ef',
          100: '#fae9da',
          200: '#f5d0b3',
          300: '#eeb083',
          400: '#e68651',
          500: '#e0672f',
          600: '#d15025',
          700: '#bc4123',
          800: '#8b3221',
          900: '#702b1e',
        },
        secondary: {
          50: '#f5f6fa',
          100: '#e9ebf5',
          200: '#ced5e9',
          300: '#a4b1d5',
          400: '#7388bd',
          500: '#516aa6',
          600: '#3e528b',
          700: '#334271',
          800: '#2e3a5e',
          900: '#2b3452',
        },
        'accent-500': '#ffc82c',
        'accent-200': '#ffff2c',
        'variant-500': '#8492a6',
        'variant-200': '#dddddd',
        wall: '#f3f5f8',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
