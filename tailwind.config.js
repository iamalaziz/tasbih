/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        lgbackground: '#222222',
        text: '#ffffff',
        'text-dark': '#666666',
        'text-darker': '#444444',
        accent: '#00EA86',
        'accent-dark': '#007543',
        'accent-darker': '#01301C',
        'icon-stroke': '6px solid #00EA86',
      },
      fontFamily: {
        heebo: ['Heebo'],
      },
    },
  },
  plugins: [],
};
