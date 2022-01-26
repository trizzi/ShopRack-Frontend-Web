module.exports = {
  content: [],
  theme: {
    extend: {
      ringColor: ['valid', 'invalid','placeholder','focus'],
      borderColor:['focus','hover','placehoder'],
      textColor:['focus','hover','placehoder'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-pseudo-selectors'),
  ],
};
