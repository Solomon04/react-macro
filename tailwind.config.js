/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'macro-',
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dde2e7',
          200: '#bcc5cf',
          300: '#9aa9b8',
          400: '#798ca0',
          500: '#576f88',
          600: '#46596d',
          700: '#344352',
          800: '#232c36',
          900: '#11161b',
          DEFAULT: '#576f88',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), require('@tailwindcss/typography')],
  prefix: 'tw-'
}
