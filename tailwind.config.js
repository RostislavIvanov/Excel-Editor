/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lightGrey': '#eeeeee',
        'hoverGrey': '#d7d7d7',
        'borderGrey': 'rgb(156 163 175)',
        'lightBlue': '#e8f6fa',
        'darkBlue': '#18a1cd',
        'textBlue': '#297ea8',
      },
    },
  },
  plugins: [],
};

