/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#27292d',
        'custom-darker': '#191920',
        'custom-darkest': '#131319',
        'custom-b': '#35373b',
        'custom-primary': '#c5c7ca',
        'custom-secondary': '#7f8084',
        'custom-ph': '#7f8084',
        'custom-muted': '#6b6c70',
        'custom-button': '#4A96FF',
        'custom-button-hover': '#1d4ed8',
      },
    },
  },
  plugins: [],
};
