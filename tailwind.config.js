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
        gradientOne: 'hsl(192, 100%, 67%)',
        gradientTwo: 'hsl(280, 87%, 65%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'light-header-bg-mobile': "url('./images/bg-mobile-light.jpg')",
        'dark-header-bg-mobile': "url('./images/bg-mobile-dark.jpg')",
        'light-header-bg-desktop': "url('./images/bg-desktop-light.jpg')",
        'dark-header-bg-desktop': "url('./images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
