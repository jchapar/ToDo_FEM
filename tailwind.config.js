/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primaryTextColor: 'rgb(var(--primary-text-color))',
        secondaryTextColor: 'rgb(var(--secondary-text-color))',
        assistingTextColor: 'rgb(var(--assisting-text-color))',
        selectedTextColor: 'rgb(var(--selected-text-color))',
        primaryBgColor: 'rgb(var(--primary-bg-color))',
        listBgColor: 'rgb(var(--list-bg-color))',
        whiteColor: 'rgb(var(--white-color))',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
