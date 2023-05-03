/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var($tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var($tw-gradient-stops))',
      },
      colors: {
        '$primary' : '#ABE6FC',
        '$secondary' : '#31A3CD',
        '$tertiary': '#FACE8D',

        '$text' :' #3f3f3',

        '$bg1' : '#CCF1FF',
        '$bg2' : '#ABE6FC',
        '$bg3' : '#F5F5F5',
        '$bg4' : '#FFFFFF'
      }
    },
  },
  plugins: [],
}
