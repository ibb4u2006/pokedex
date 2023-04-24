/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: '#FF3E4E',
        'red-100': '#FF3E4E1A',
        'grey-100': '#fcfcfc',
      },
      colors: {
        red: '#FF3E4E',
        'grey-100': '#fcfcfc',
        'grey-300': '#A5A5A5',
        'grey-500': '#E8E8E8',
      },
      maxWidth: {
        40: '10rem', //160px
        80: '20rem', //320px
      },
      minWidth: {
        11: '2.75rem', //44px
      },
    },
  },
  plugins: [],
};
