/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#009DEE',
        secondary: '#FFFFFF',
        tertiary: '#FE7443',
        quaternary: '#000000',
      },
    },
  },
  plugins: [],
}

