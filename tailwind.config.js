/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkModeBG: 'hsl(207, 26%, 17%)',
        lightModeBG: 'hsl(0, 0%, 98%)',
        'dark-blue': 'hsl(209, 23%, 22%)',
        'text-lightMode': 'hsl(200, 15%, 8%)',
        'input-lightMode': 'hsl(0, 0%, 52%)',
      },
    },
    fontFamily: {
      Nunito: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
